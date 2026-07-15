// Source: signwell-sdk-generator/extras/node/overlay/src/extras/errors.ts
// Do not edit the generated SDK copy directly.

export interface ApiErrorOptions {
  message?: string | undefined;
  code?: number | undefined;
  response?: Response | undefined;
  responseHeaders?: Headers | undefined;
  responseBody?: string | undefined;
  body?: unknown;
  cause?: unknown;
}

export interface RateLimitInfo {
  limit?: number | undefined;
  remaining?: number | undefined;
  reset?: number | undefined;
  resetAt?: Date | undefined;
  retryAfter?: number | undefined;
  retryAfterAt?: Date | undefined;
}

export interface ApiStatusErrorOptions extends ApiErrorOptions {
  code: number;
  rateLimit?: RateLimitInfo | undefined;
}

export class ApiError extends Error {
  readonly code: number | undefined;
  readonly response: Response | undefined;
  readonly responseHeaders: Headers | undefined;
  readonly responseBody: string | undefined;
  readonly body: unknown | undefined;
  override readonly cause: unknown | undefined;

  constructor(options: ApiErrorOptions | string = {}) {
    const normalized = typeof options === 'string' ? { message: options } : options;
    super(normalized.message ?? 'SignWell API error');
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.name;
    this.code = normalized.code;
    this.response = normalized.response;
    this.responseHeaders = normalized.responseHeaders;
    this.responseBody = normalized.responseBody;
    this.body = normalized.body ?? parseJson(normalized.responseBody);
    this.cause = normalized.cause;
  }
}

export class ApiStatusError extends ApiError {
  readonly rateLimit: RateLimitInfo | undefined;

  constructor(options: ApiStatusErrorOptions) {
    super(options);
    this.rateLimit = options.rateLimit ?? extractRateLimitInfo(options.responseHeaders ?? options.response);
  }

  static async fromResponse(response: Response): Promise<ApiStatusError> {
    const responseBody = await safeResponseText(response);
    const options: ApiStatusErrorOptions = {
      code: response.status,
      response,
      responseHeaders: response.headers,
      message: response.statusText || 'Response returned an error code',
      rateLimit: extractRateLimitInfo(response.headers)
    };
    if (responseBody !== undefined) {
      options.responseBody = responseBody;
    }
    return ApiStatusError.for(options);
  }

  static for(options: ApiStatusErrorOptions): ApiStatusError {
    const ErrorClass = statusErrorClass(options.code);
    return new ErrorClass(options);
  }
}

export class BadRequestError extends ApiStatusError {}
export class AuthenticationError extends ApiStatusError {}
export class PermissionDeniedError extends ApiStatusError {}
export class NotFoundError extends ApiStatusError {}
export class ConflictError extends ApiStatusError {}
export class UnprocessableEntityError extends ApiStatusError {}
export class RateLimitError extends ApiStatusError {}
export class InternalServerError extends ApiStatusError {}
export class ApiConnectionError extends ApiError {}
export class ApiTimeoutError extends ApiConnectionError {}
export class UnsupportedContentTypeError extends ApiError {}
export class FetchError extends ApiConnectionError {}

export const ForbiddenError = PermissionDeniedError;
export const TransportError = ApiConnectionError;

export class RequiredError extends ApiError {
  readonly field: string;

  constructor(field: string, message?: string) {
    super({ message: message ?? `Required parameter "${field}" was null or undefined.` });
    this.field = field;
  }
}

function statusErrorClass(code: number): typeof ApiStatusError {
  if (code === 400) return BadRequestError;
  if (code === 401) return AuthenticationError;
  if (code === 403) return PermissionDeniedError;
  if (code === 404) return NotFoundError;
  if (code === 409) return ConflictError;
  if (code === 422) return UnprocessableEntityError;
  if (code === 429) return RateLimitError;
  if (code >= 500) return InternalServerError;
  return ApiStatusError;
}

export function extractRateLimitInfo(source: Headers | Response | ApiError | undefined): RateLimitInfo | undefined {
  if (source === undefined) {
    return undefined;
  }

  if (source instanceof ApiError) {
    if (source instanceof ApiStatusError && source.rateLimit !== undefined) {
      return source.rateLimit;
    }
    return extractRateLimitInfo(source.responseHeaders ?? source.response);
  }

  const headers = headersFromSource(source);
  if (headers === undefined) {
    return undefined;
  }

  const limit = parseHeaderNumber(firstHeader(headers, ['x-ratelimit-limit', 'ratelimit-limit']));
  const remaining = parseHeaderNumber(firstHeader(headers, ['x-ratelimit-remaining', 'ratelimit-remaining']));
  const reset = parseHeaderNumber(firstHeader(headers, ['x-ratelimit-reset', 'ratelimit-reset']));
  const retryAfter = parseRetryAfter(firstHeader(headers, ['retry-after']));
  const rateLimit: RateLimitInfo = {};

  if (limit !== undefined) {
    rateLimit.limit = limit;
  }
  if (remaining !== undefined) {
    rateLimit.remaining = remaining;
  }
  if (reset !== undefined) {
    rateLimit.reset = reset;
    if (reset > 1_000_000_000) {
      rateLimit.resetAt = new Date(reset * 1000);
    }
  }
  if (retryAfter !== undefined) {
    if (retryAfter.seconds !== undefined) {
      rateLimit.retryAfter = retryAfter.seconds;
    }
    if (retryAfter.at !== undefined) {
      rateLimit.retryAfterAt = retryAfter.at;
    }
  }

  return Object.keys(rateLimit).length > 0 ? rateLimit : undefined;
}

function headersFromSource(source: Headers | Response): Headers | undefined {
  if (typeof Headers !== 'undefined' && source instanceof Headers) {
    return source;
  }
  if (typeof Response !== 'undefined' && source instanceof Response) {
    return source.headers;
  }
  return undefined;
}

function firstHeader(headers: Headers, names: string[]): string | undefined {
  for (const name of names) {
    const value = headers.get(name);
    if (value !== null && value.trim() !== '') {
      return value;
    }
  }
  return undefined;
}

function parseHeaderNumber(value: string | undefined): number | undefined {
  if (value === undefined) {
    return undefined;
  }

  const match = value.trim().match(/^-?\d+(?:\.\d+)?/);
  if (!match) {
    return undefined;
  }

  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseRetryAfter(value: string | undefined): { seconds?: number; at?: Date } | undefined {
  if (value === undefined) {
    return undefined;
  }

  const seconds = parseHeaderNumber(value);
  if (seconds !== undefined) {
    return { seconds };
  }

  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) {
    return undefined;
  }

  return {
    seconds: Math.max(0, Math.ceil((timestamp - Date.now()) / 1000)),
    at: new Date(timestamp)
  };
}

async function safeResponseText(response: Response): Promise<string | undefined> {
  try {
    return await response.clone().text();
  } catch {
    return undefined;
  }
}

function parseJson(value: string | undefined): unknown {
  if (!value) {
    return undefined;
  }

  try {
    return JSON.parse(value) as unknown;
  } catch {
    return undefined;
  }
}

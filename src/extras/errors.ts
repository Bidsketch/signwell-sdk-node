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
  static async fromResponse(response: Response): Promise<ApiStatusError> {
    const responseBody = await safeResponseText(response);
    const options: ApiErrorOptions & { code: number } = {
      code: response.status,
      response,
      responseHeaders: response.headers,
      message: response.statusText || 'Response returned an error code'
    };
    if (responseBody !== undefined) {
      options.responseBody = responseBody;
    }
    return ApiStatusError.for(options);
  }

  static for(options: ApiErrorOptions & { code: number }): ApiStatusError {
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

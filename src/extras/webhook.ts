// Source: signwell-sdk-generator/extras/node/overlay/src/extras/webhook.ts
// Do not edit the generated SDK copy directly.

import { createHmac, timingSafeEqual } from 'node:crypto';

export interface SignWellWebhookEvent {
  type: string;
  time: string | number;
  hash: string;
  [key: string]: unknown;
}

export interface VerifyEventOptions {
  event: SignWellWebhookEvent | Record<string, unknown>;
  webhookId: string;
  toleranceSeconds?: number;
  now?: () => number;
}

export interface WebhookReplayStore {
  add(key: string, expiresAtUnixSeconds: number): boolean | Promise<boolean>;
}

export interface VerifyEventOnceOptions extends VerifyEventOptions {
  replayStore: WebhookReplayStore;
  toleranceSeconds: number;
}

export interface MemoryReplayStoreOptions {
  maxEntries?: number;
  now?: () => number;
}

interface ParsedWebhookEvent {
  type: unknown;
  time: unknown;
  hash: string;
}

export function verifyEvent(options: VerifyEventOptions): boolean {
  try {
    verifyEventOrThrow(options);
    return true;
  } catch {
    return false;
  }
}

export async function verifyEventOnce(options: VerifyEventOnceOptions): Promise<boolean> {
  try {
    await verifyEventOnceOrThrow(options);
    return true;
  } catch {
    return false;
  }
}

export async function verifyEventOnceOrThrow(options: VerifyEventOnceOptions): Promise<true> {
  const parsed = verifyEventData(options);

  if (options.toleranceSeconds === undefined) {
    throw new TypeError('toleranceSeconds is required for replay protection');
  }

  if (!options.replayStore || typeof options.replayStore.add !== 'function') {
    throw new TypeError('replayStore with an atomic add method is required');
  }

  const eventTime = Number(parsed.time);
  const expiresAt = eventTime + options.toleranceSeconds;
  const stored = await options.replayStore.add(replayKeyFromParsed(parsed), expiresAt);
  if (!stored) {
    throw new TypeError('webhook event has already been processed');
  }

  return true;
}

export function replayKey(event: SignWellWebhookEvent | Record<string, unknown>): string {
  return replayKeyFromParsed(parseEvent(event));
}

export function createMemoryReplayStore(options: MemoryReplayStoreOptions = {}): WebhookReplayStore {
  const maxEntries = options.maxEntries ?? 10_000;
  const now = options.now ?? currentUnixTime;
  if (!Number.isInteger(maxEntries) || maxEntries <= 0) {
    throw new TypeError('maxEntries must be a positive integer');
  }

  const entries = new Map<string, number>();
  return {
    add(key: string, expiresAtUnixSeconds: number): boolean {
      const currentTime = now();
      for (const [entryKey, expiresAt] of entries) {
        if (expiresAt < currentTime) {
          entries.delete(entryKey);
        }
      }

      if (entries.has(key)) {
        return false;
      }

      while (entries.size >= maxEntries) {
        const oldest = entries.keys().next().value as string | undefined;
        if (oldest === undefined) {
          break;
        }
        entries.delete(oldest);
      }

      entries.set(key, expiresAtUnixSeconds);
      return true;
    }
  };
}

export function verifyEventOrThrow({ event, webhookId, toleranceSeconds, now = currentUnixTime }: VerifyEventOptions): true {
  const options: VerifyEventOptions = { event, webhookId, now };
  if (toleranceSeconds !== undefined) {
    options.toleranceSeconds = toleranceSeconds;
  }
  verifyEventData(options);
  return true;
}

function verifyEventData({ event, webhookId, toleranceSeconds, now = currentUnixTime }: VerifyEventOptions): ParsedWebhookEvent {
  if (typeof webhookId !== 'string' || webhookId.length === 0) {
    throw new TypeError('webhookId must be a non-empty string');
  }

  const parsed = parseEvent(event);
  if (toleranceSeconds !== undefined) {
    verifyFreshTimestamp(parsed.time, toleranceSeconds, now);
  }

  const data = `${String(parsed.type)}@${String(parsed.time)}`;
  const calculated = createHmac('sha256', webhookId).update(data).digest('hex');
  if (!secureCompare(calculated, parsed.hash)) {
    throw new TypeError('webhook signature is invalid');
  }

  return parsed;
}

function parseEvent(event: SignWellWebhookEvent | Record<string, unknown>): ParsedWebhookEvent {
  if (!isRecord(event)) {
    throw new TypeError('event must be an object');
  }

  const type = eventValue(event, 'type');
  const time = eventValue(event, 'time');
  const hash = eventValue(event, 'hash');
  const missing = [
    ['type', type],
    ['time', time],
    ['hash', hash]
  ].filter(([, value]) => value === undefined || value === null || value === '');

  if (missing.length > 0) {
    throw new TypeError(
      `event is missing required keys: ${missing.map(([key]) => key).join(', ')}. Make sure you pass payload.event, not the full webhook payload`
    );
  }

  if (typeof hash !== 'string') {
    throw new TypeError('event.hash must be a string');
  }

  return { type, time, hash };
}

function replayKeyFromParsed(event: ParsedWebhookEvent): string {
  return `signwell:${String(event.type)}:${String(event.time)}:${event.hash}`;
}

function eventValue(event: Record<string, unknown>, key: string): unknown {
  return event[key];
}

function verifyFreshTimestamp(time: unknown, toleranceSeconds: number, now: () => number): void {
  if (!Number.isFinite(toleranceSeconds) || toleranceSeconds < 0) {
    throw new TypeError('toleranceSeconds must be a non-negative number');
  }

  const timestamp = Number(time);
  if (!Number.isFinite(timestamp)) {
    throw new TypeError('event.time must be a Unix timestamp when toleranceSeconds is provided');
  }

  if (Math.abs(now() - timestamp) > toleranceSeconds) {
    throw new TypeError('webhook timestamp is outside the allowed tolerance');
  }
}

function currentUnixTime(): number {
  return Math.floor(Date.now() / 1000);
}

function secureCompare(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left, 'utf8');
  const rightBuffer = Buffer.from(right, 'utf8');
  return leftBuffer.byteLength === rightBuffer.byteLength && timingSafeEqual(leftBuffer, rightBuffer);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

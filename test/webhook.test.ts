import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import {
  createMemoryReplayStore,
  replayKey,
  verifyEvent,
  verifyEventOnce,
  verifyEventOnceOrThrow,
  verifyEventOrThrow
} from '../src/extras/webhook.js';

describe('Webhook', () => {
  it('verifies a valid SignWell webhook event', () => {
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = '1710000000';
    const hash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');

    expect(verifyEvent({ event: { type, time, hash }, webhookId })).toBe(true);
    expect(verifyEventOrThrow({ event: { type, time, hash }, webhookId })).toBe(true);
  });

  it('returns false for invalid signatures', () => {
    expect(verifyEvent({
      event: { type: 'document_completed', time: '1710000000', hash: 'bad' },
      webhookId: 'whk_123'
    })).toBe(false);
  });

  it('returns false for correct-length invalid signatures', () => {
    expect(verifyEvent({
      event: { type: 'document_completed', time: '1710000000', hash: '0'.repeat(64) },
      webhookId: 'whk_123'
    })).toBe(false);
  });

  it('raises a useful error for non-string signatures', () => {
    expect(() => verifyEventOrThrow({
      event: { type: 'document_completed', time: '1710000000', hash: 123 },
      webhookId: 'whk_123'
    })).toThrow(/event\.hash must be a string/);
  });

  it('optionally enforces timestamp freshness', () => {
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = '1710000000';
    const hash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');

    expect(verifyEvent({
      event: { type, time, hash },
      webhookId,
      toleranceSeconds: 60,
      now: () => 1710000030
    })).toBe(true);

    expect(verifyEvent({
      event: { type, time, hash },
      webhookId,
      toleranceSeconds: 60,
      now: () => 1710000100
    })).toBe(false);
    expect(() => verifyEventOrThrow({
      event: { type, time, hash },
      webhookId,
      toleranceSeconds: 60,
      now: () => 1710000100
    })).toThrow(/outside the allowed tolerance/);
  });

  it('raises a useful error when the caller passes the full payload', () => {
    expect(() => verifyEventOrThrow({
      event: { event: { type: 'document_completed' } },
      webhookId: 'whk_123'
    })).toThrow(/payload.event/);
  });

  it('rejects replayed webhook events with a replay store', async () => {
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = 1710000000;
    const hash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');
    const event = { type, time, hash };
    const replayStore = createMemoryReplayStore({ now: () => time });

    await expect(verifyEventOnceOrThrow({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => time,
      replayStore
    })).resolves.toBe(true);

    await expect(verifyEventOnceOrThrow({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => time,
      replayStore
    })).rejects.toThrow(/already been processed/);
    await expect(verifyEventOnce({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => time,
      replayStore
    })).resolves.toBe(false);
  });

  it('rejects duplicate events at the exact freshness boundary', async () => {
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = 1710000000;
    const hash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');
    const event = { type, time, hash };
    const replayStore = createMemoryReplayStore({ now: () => time + 60 });

    await expect(verifyEventOnce({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => time + 60,
      replayStore
    })).resolves.toBe(true);

    await expect(verifyEventOnce({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => time + 60,
      replayStore
    })).resolves.toBe(false);
  });

  it('does not store invalid signatures in the replay store', async () => {
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = 1710000000;
    const validHash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');
    const replayStore = createMemoryReplayStore({ now: () => time });

    await expect(verifyEventOnce({
      event: { type, time, hash: '0'.repeat(64) },
      webhookId,
      toleranceSeconds: 60,
      now: () => time,
      replayStore
    })).resolves.toBe(false);

    await expect(verifyEventOnce({
      event: { type, time, hash: validHash },
      webhookId,
      toleranceSeconds: 60,
      now: () => time,
      replayStore
    })).resolves.toBe(true);
  });

  it('expires entries from the in-memory replay store', async () => {
    let currentTime = 1710000000;
    const webhookId = 'whk_123';
    const type = 'document_completed';
    const time = 1710000000;
    const hash = createHmac('sha256', webhookId).update(`${type}@${time}`).digest('hex');
    const event = { type, time, hash };
    const replayStore = createMemoryReplayStore({ now: () => currentTime });

    await expect(verifyEventOnce({
      event,
      webhookId,
      toleranceSeconds: 60,
      now: () => currentTime,
      replayStore
    })).resolves.toBe(true);

    currentTime = time + 61;
    await expect(verifyEventOnce({
      event,
      webhookId,
      toleranceSeconds: 120,
      now: () => currentTime,
      replayStore
    })).resolves.toBe(true);
  });

  it('builds a stable replay key', () => {
    expect(replayKey({
      type: 'document_completed',
      time: 1710000000,
      hash: 'a'.repeat(64)
    })).toBe(`signwell:document_completed:1710000000:${'a'.repeat(64)}`);
  });
});

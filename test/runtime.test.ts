import { describe, expect, it } from 'vitest';
import {
  ApiTimeoutError,
  BlobApiResponse,
  BulkSendApi,
  Configuration,
  DocumentApi,
  NotFoundError,
  RegionalApi,
  UnsupportedContentTypeError
} from '../src/index.js';

function streamFromTextChunks(chunks: string[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();

  return new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    }
  });
}

async function readStreamText(stream: ReadableStream<Uint8Array>): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let text = '';
  let done = false;

  while (!done) {
    const result = await reader.read();
    done = result.done;
    if (!result.done) {
      text += decoder.decode(result.value, { stream: true });
    }
  }

  reader.releaseLock();
  return text + decoder.decode();
}

describe('runtime', () => {
  it('throws status-specific errors with parsed bodies', async () => {
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => new Response(JSON.stringify({ message: 'Not found' }), {
        status: 404,
        statusText: 'Not Found',
        headers: { 'Content-Type': 'application/json' }
      })
    }));

    await expect(api.getDocument({ id: 'missing' })).rejects.toMatchObject({
      name: 'NotFoundError',
      code: 404,
      body: { message: 'Not found' }
    });
    await expect(api.getDocument({ id: 'missing' })).rejects.toBeInstanceOf(NotFoundError);
  });

  it('raises typed unsupported content-type errors for JSON responses', async () => {
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => new Response('plain text', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    }));

    await expect(api.getDocument({ id: 'doc_123' })).rejects.toBeInstanceOf(UnsupportedContentTypeError);
  });

  it('uses JSON mode for base64 bulk send CSV templates', async () => {
    let acceptHeader: string | undefined;
    const api = new BulkSendApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return new Response(JSON.stringify({ data: 'ZGF0YQ==' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    const response = await api.getBulkSendCsvTemplate({
      templateIds: ['00000000-0000-0000-0000-000000000000'],
      base64: true
    });

    expect(response).toEqual({ data: 'ZGF0YQ==' });
    expect(acceptHeader).toBe('application/json');
  });

  it('uses Blob mode for binary bulk send CSV templates', async () => {
    let acceptHeader: string | undefined;
    const api = new BulkSendApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return new Response('name,email\nJane,jane@example.com\n', {
          status: 200,
          headers: { 'Content-Type': 'text/csv' }
        });
      }
    }));

    const response = await api.getBulkSendCsvTemplate({
      templateIds: ['00000000-0000-0000-0000-000000000000']
    });

    expect(response).toBeInstanceOf(Blob);
    expect(await response.text()).toContain('Jane');
    expect(acceptHeader).toBe('application/octet-stream');
  });

  it('exposes raw binary response bodies as streams without buffering into Blob', async () => {
    let acceptHeader: string | undefined;
    let blobCalled = false;
    const payloadChunks = ['%PDF-1.7\n', 'chunk-one\n', 'chunk-two\n'];
    const response = new Response(streamFromTextChunks(payloadChunks), {
      status: 200,
      headers: { 'Content-Type': 'application/pdf' }
    });
    Object.defineProperty(response, 'blob', {
      value: async () => {
        blobCalled = true;
        return new Blob([]);
      }
    });

    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return response;
      }
    }));

    const rawResponse = await api.getCompletedPdfRaw({ id: 'doc_123' });
    expect(rawResponse).toBeInstanceOf(BlobApiResponse);

    const stream = (rawResponse as BlobApiResponse).stream();
    await expect(readStreamText(stream)).resolves.toBe(payloadChunks.join(''));
    expect(blobCalled).toBe(false);
    expect(acceptHeader).toBe('application/octet-stream');
  });

  it('uses Blob mode for default NOM-151 certificate downloads', async () => {
    let acceptHeader: string | undefined;
    const api = new RegionalApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return new Response('zip-data', {
          status: 200,
          headers: { 'Content-Type': 'application/zip' }
        });
      }
    }));

    const response = await api.getNom151Certificate({ id: 'doc_123' });

    expect(response).toBeInstanceOf(Blob);
    expect(await response.text()).toBe('zip-data');
    expect(acceptHeader).toBe('application/octet-stream');
  });

  it('uses JSON URL mode for NOM-151 certificate downloads', async () => {
    let acceptHeader: string | undefined;
    const api = new RegionalApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return new Response(JSON.stringify({ file_url: 'https://example.com/nom151.zip' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    const response = await api.getNom151Certificate({ id: 'doc_123', urlOnly: true });

    expect(response).toEqual({ file_url: 'https://example.com/nom151.zip' });
    expect(acceptHeader).toBe('application/json');
  });

  it('uses JSON object mode for NOM-151 certificate downloads', async () => {
    let acceptHeader: string | undefined;
    const certificate = {
      nom151: {
        status: 'issued',
        transactionId: 'txn_123',
        hash: 'hash_123',
        folio: 'folio_123',
        issuedAt: '2026-05-30T00:00:00Z',
        provider: 'SeguriData',
        validationUrl: 'https://example.com/validate',
        constancia: 'Y2VydA=='
      }
    };
    const api = new RegionalApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        acceptHeader = new Headers(init.headers).get('Accept') ?? undefined;
        return new Response(JSON.stringify(certificate), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    const response = await api.getNom151Certificate({ id: 'doc_123', objectOnly: true });

    expect(response).toEqual(certificate);
    expect(acceptHeader).toBe('application/json');
  });

  it('rejects conflicting NOM-151 response modes at runtime', async () => {
    const api = new RegionalApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => new Response(null, { status: 204 })
    }));
    const unsafeApi = api as unknown as {
      getNom151Certificate(requestParameters: { id: string; urlOnly: true; objectOnly: true }): Promise<unknown>;
    };

    await expect(unsafeApi.getNom151Certificate({
      id: 'doc_123',
      urlOnly: true,
      objectOnly: true
    })).rejects.toThrow(/urlOnly and objectOnly/);
  });

  it('lets generated auth headers override global headers', async () => {
    let apiKeyHeader: string | null = null;
    const api = new DocumentApi(new Configuration({
      apiKey: 'generated_key',
      headers: { 'X-Api-Key': 'global_key' },
      fetchApi: async (_url, init) => {
        apiKeyHeader = new Headers(init.headers).get('X-Api-Key');
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await api.getDocument({ id: 'doc_123' });

    expect(apiKeyHeader).toBe('generated_key');
  });

  it('merges initOverrides headers and serializes body with the final content type', async () => {
    let headers: Headers | undefined;
    let body: BodyInit | null | undefined;
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        headers = new Headers(init.headers);
        body = init.body;
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await api.createDocument({
      documentRequest: {
        files: [{ name: 'contract.pdf', file_url: 'https://example.com/contract.pdf' }]
      }
    }, {
      headers: {
        'Content-Type': 'text/plain',
        'X-Custom': 'override'
      }
    });

    expect(headers?.get('X-Api-Key')).toBe('test_key');
    expect(headers?.get('X-Custom')).toBe('override');
    expect(headers?.get('Content-Type')).toBe('text/plain');
    expect(body).toBe('[object Object]');
  });

  it('maps abort-like transport errors to ApiTimeoutError', async () => {
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => {
        const error = new Error('aborted');
        error.name = 'AbortError';
        throw error;
      }
    }));

    await expect(api.getDocument({ id: 'doc_123' })).rejects.toBeInstanceOf(ApiTimeoutError);
  });
});

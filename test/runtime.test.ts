import { describe, expect, it, vi } from 'vitest';
import {
  ApiConnectionError,
  ApiTimeoutError,
  BlobApiResponse,
  BulkSendApi,
  Configuration,
  DocumentApi,
  extractRateLimitInfo,
  ForbiddenError,
  NotFoundError,
  normalizeSignWellRequestBody,
  PermissionDeniedError,
  RateLimitError,
  RegionalApi,
  RequiredError,
  TemplateApi,
  TransportError,
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

function urlFromInput(input: string | URL | Request): string {
  return input instanceof Request ? input.url : String(input);
}

async function collectAsync<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const collected: T[] = [];
  for await (const item of iterable) {
    collected.push(item);
  }
  return collected;
}

describe('runtime', () => {
  it('replays POST bodies after explicit 429s and tolerates future response enums', async () => {
    const bodies: Array<RequestInit['body']> = [];
    const api = new DocumentApi(new Configuration({
      fetchApi: async (_url, init) => {
        bodies.push(init?.body);
        return bodies.length === 1
          ? new Response('limited', { status: 429, headers: { 'Retry-After': '0' } })
          : Response.json({ id: 'doc_1', fields: [[{ date_format: 'future_format' }]] });
      }
    }));
    const document = await api.createDocument({ documentRequest: { name: 'Retry document', test_mode: true } });
    expect(bodies).toHaveLength(2);
    expect(bodies[0]).toBe(bodies[1]);
    expect(JSON.parse(String(bodies[0])).name).toBe('Retry document');
    expect(document.fields?.[0]?.[0]?.date_format).toBe('future_format');
  });

  it('bounds retries, honors opt-out and long waits, and preserves rate-limit errors', async () => {
    for (const [limit, retryAfter, expected] of [[2, '0', 3], [0, '0', 1], [2, '120', 1]] as const) {
      let calls = 0;
      const api = new DocumentApi(new Configuration({ maxRateLimitRetries: limit, fetchApi: async () => {
        calls += 1;
        return new Response('{}', { status: 429, headers: { 'Retry-After': retryAfter } });
      } }));
      await expect(api.getDocument({ id: 'doc_1' })).rejects.toBeInstanceOf(RateLimitError);
      expect(calls).toBe(expected);
    }
  });

  it('backs off, cancels pending retries, and retries downloads without rejected content', async () => {
    vi.useFakeTimers();
    try {
      let calls = 0;
      const api = new DocumentApi(new Configuration({ fetchApi: async () => {
        calls += 1;
        return calls === 1 ? new Response('limited', { status: 429 })
          : new Response('%PDF', { headers: { 'Content-Type': 'application/pdf' } });
      } }));
      const pending = api.getCompletedPdf({ id: 'doc_1' });
      await vi.advanceTimersByTimeAsync(999);
      expect(calls).toBe(1);
      await vi.advanceTimersByTimeAsync(1);
      expect(await (await pending).text()).toBe('%PDF');
      const controller = new AbortController();
      const cancelled = new DocumentApi(new Configuration({ fetchApi: async () => {
        calls += 1;
        return new Response('{}', { status: 429, headers: { 'Retry-After': '30' } });
      } })).getDocument({ id: 'doc_1' }, { signal: controller.signal });
      const assertion = expect(cancelled).rejects.toBeInstanceOf(ApiTimeoutError);
      await vi.advanceTimersByTimeAsync(0);
      controller.abort();
      await assertion;
      await vi.advanceTimersByTimeAsync(30000);
      expect(calls).toBe(3);
    } finally {
      vi.useRealTimers();
    }
  });

  it('rejects empty and blank document IDs before making a request', async () => {
    let calls = 0;
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => {
        calls += 1;
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await expect(api.getDocument({ id: '' })).rejects.toMatchObject({
      name: 'RequiredError',
      field: 'id'
    });
    await expect(api.getDocument({ id: '   ' })).rejects.toBeInstanceOf(RequiredError);
    expect(calls).toBe(0);
  });

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

  it('exports additive error aliases without changing existing classes', () => {
    expect(ForbiddenError).toBe(PermissionDeniedError);
    expect(TransportError).toBe(ApiConnectionError);
  });

  it('exposes rate limit headers on status errors', async () => {
    const api = new DocumentApi(new Configuration({
      maxRateLimitRetries: 0,
      apiKey: 'test_key',
      fetchApi: async () => new Response(JSON.stringify({ message: 'Too many requests' }), {
        status: 429,
        statusText: 'Too Many Requests',
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': '100',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': '1710000000',
          'Retry-After': '30'
        }
      })
    }));

    try {
      await api.getDocument({ id: 'doc_123' });
      throw new Error('Expected getDocument to throw');
    } catch (error) {
      expect(error).toBeInstanceOf(RateLimitError);
      if (!(error instanceof RateLimitError)) {
        throw error;
      }
      expect(error.rateLimit).toMatchObject({
        limit: 100,
        remaining: 0,
        reset: 1710000000,
        retryAfter: 30
      });
      expect(extractRateLimitInfo(error)).toBe(error.rateLimit);
    }
  });

  it('allows rate limit header extraction from successful raw responses', async () => {
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => new Response(JSON.stringify({ id: 'doc_123' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': '100',
          'X-RateLimit-Remaining': '99'
        }
      })
    }));

    const response = await api.getDocumentRaw({ id: 'doc_123' });

    expect(extractRateLimitInfo(response.raw)).toMatchObject({
      limit: 100,
      remaining: 99
    });
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

  it('serializes list document and template query filters and clamps limits', async () => {
    const urls: string[] = [];
    const documentApi = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (input) => {
        urls.push(urlFromInput(input));
        return new Response(JSON.stringify({
          documents: [],
          current_page: 1,
          next_page: null,
          total_count: 0,
          total_pages: 1
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));
    const templateApi = new TemplateApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (input) => {
        urls.push(urlFromInput(input));
        return new Response(JSON.stringify({
          templates: [],
          current_page: 1,
          next_page: null,
          total_count: 0,
          total_pages: 1
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await documentApi.listDocuments({ query: 'status:Completed AND name:NDA', limit: 100 });
    await templateApi.listTemplates({ query: 'name:NDA AND archived:false', limit: 100 });

    const documentUrl = new URL(urls[0]!);
    expect(documentUrl.pathname).toBe('/api/v1/documents');
    expect(documentUrl.searchParams.get('query')).toBe('status:Completed AND name:NDA');
    expect(documentUrl.searchParams.get('limit')).toBe('50');

    const templateUrl = new URL(urls[1]!);
    expect(templateUrl.pathname).toBe('/api/v1/document_templates');
    expect(templateUrl.searchParams.get('query')).toBe('name:NDA AND archived:false');
    expect(templateUrl.searchParams.get('limit')).toBe('50');
  });

  it('iterates document pages and document items until next_page is null', async () => {
    const urls: string[] = [];
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (input) => {
        const url = new URL(urlFromInput(input));
        urls.push(url.toString());
        const page = url.searchParams.get('page') ?? '1';
        return new Response(JSON.stringify({
          documents: [{ id: `doc_${page}` }],
          current_page: Number(page),
          next_page: page === '1' ? 2 : null,
          total_count: 2,
          total_pages: 2
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    const pages = await collectAsync(api.iterateDocumentPages({ query: 'status:Completed', limit: 100 }));
    const documents = await collectAsync(api.iterateDocuments({ query: 'status:Completed', limit: 100 }));

    expect(pages.map((page) => page.current_page)).toEqual([1, 2]);
    expect(documents.map((document) => document.id)).toEqual(['doc_1', 'doc_2']);
    expect(urls.map((url) => new URL(url).searchParams.get('page'))).toEqual(['1', '2', '1', '2']);
    expect(new URL(urls[0]!).searchParams.get('limit')).toBe('50');
  });

  it('iterates template pages and template items until next_page is null', async () => {
    const api = new TemplateApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (input) => {
        const url = new URL(urlFromInput(input));
        const page = url.searchParams.get('page') ?? '1';
        return new Response(JSON.stringify({
          templates: [{ id: `tmpl_${page}` }],
          current_page: Number(page),
          next_page: page === '1' ? 2 : null,
          total_count: 2,
          total_pages: 2
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    const pages = await collectAsync(api.iterateTemplatePages({ query: 'name:NDA' }));
    const templates = await collectAsync(api.iterateTemplates({ query: 'name:NDA' }));

    expect(pages.map((page) => page.current_page)).toEqual([1, 2]);
    expect(templates.map((template) => template.id)).toEqual(['tmpl_1', 'tmpl_2']);
  });

  it('waits for document completion with bounded polling', async () => {
    const statuses = ['In Progress', 'Completed'];
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async () => new Response(JSON.stringify({ id: 'doc_123', status: statuses.shift() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }));

    const result = await api.waitForCompletion('doc_123', { intervalMs: 0, maxAttempts: 3 });

    expect(result.status).toBe('Completed');
  });

  it('normalizes checkbox request values to API wire values', () => {
    expect(normalizeSignWellRequestBody({
      fields: [
        [
          { type: 'checkbox', value: true },
          { type: 'checkbox', value: 'false' },
          { type: 'text', value: 'true' }
        ]
      ]
    })).toEqual({
      fields: [
        [
          { type: 'checkbox', value: 't' },
          { type: 'checkbox', value: 'f' },
          { type: 'text', value: 'true' }
        ]
      ]
    });

    expect(() => normalizeSignWellRequestBody({ type: 'checkbox', value: 'yes' })).toThrow(/Checkbox/);
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

  it('sends the SignWell default User-Agent', async () => {
    let userAgent: string | null = null;
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        userAgent = new Headers(init.headers).get('User-Agent');
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await api.getDocument({ id: 'doc_123' });

    expect(userAgent).toMatch(/^signwell-sdk-node\/\d+\.\d+\.\d+/);
  });

  it('lets a configured User-Agent replace the default at any casing', async () => {
    let userAgent: string | null = null;
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      headers: { 'user-agent': 'MyApp/1.0' },
      fetchApi: async (_url, init) => {
        userAgent = new Headers(init.headers).get('User-Agent');
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await api.getDocument({ id: 'doc_123' });

    // Replaced, not comma-joined with the default.
    expect(userAgent).toBe('MyApp/1.0');
  });

  it('lets a per-request User-Agent replace the default at any casing', async () => {
    let userAgent: string | null = null;
    const api = new DocumentApi(new Configuration({
      apiKey: 'test_key',
      fetchApi: async (_url, init) => {
        userAgent = new Headers(init.headers).get('User-Agent');
        return new Response(JSON.stringify({ id: 'doc_123' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }));

    await api.getDocument({ id: 'doc_123' }, { headers: { 'user-agent': 'PerRequest/2.0' } });

    expect(userAgent).toBe('PerRequest/2.0');
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

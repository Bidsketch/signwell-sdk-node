import { describe, expect, it } from 'vitest';
import {
  type CreateSigningDocumentParams,
  createRequestingDocument,
  createSigningDocument,
  createSigningDocumentFromTemplate,
  embeddedSigningUrl,
  embeddedSigningUrls,
  requestingIframe,
  scriptTag,
  signingIframe
} from '../src/extras/embedded.js';
import type { DocumentFromTemplateRequest, DocumentFromTemplateResponse, DocumentRequest, DocumentResponse } from '../src/models/index.js';

describe('Embedded', () => {
  it('creates an embedded signing document request with defaults', async () => {
    let captured: DocumentRequest | undefined;
    const documentApi = {
      async createDocument({ documentRequest }: { documentRequest: DocumentRequest }): Promise<DocumentResponse> {
        captured = documentRequest;
        return documentRequest as unknown as DocumentResponse;
      },
      async createDocumentFromTemplate(): Promise<DocumentFromTemplateResponse> {
        throw new Error('not used');
      }
    };

    await createSigningDocument({
      name: 'NDA',
      files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
      recipients: [{ name: 'Jane Doe', email: 'jane@example.com', passcode: '   ' }],
      fields: [[{ x: 20, y: 60, page: 1, type: 'signature' }]]
    }, { documentApi });

    expect(captured?.embedded_signing).toBe(true);
    expect(captured?.embedded_signing_notifications).toBe(false);
    expect(captured?.recipients?.[0]?.id).toBe('1');
    expect(captured?.recipients?.[0]?.passcode).toBeUndefined();
    expect(captured?.fields?.[0]?.[0]?.recipient_id).toBe('1');
  });

  it('creates a requesting draft document', async () => {
    let captured: DocumentRequest | undefined;
    const documentApi = {
      async createDocument({ documentRequest }: { documentRequest: DocumentRequest }): Promise<DocumentResponse> {
        captured = documentRequest;
        return documentRequest as unknown as DocumentResponse;
      },
      async createDocumentFromTemplate(): Promise<DocumentFromTemplateResponse> {
        throw new Error('not used');
      }
    };

    await createRequestingDocument({
      name: 'Contract',
      files: [{ name: 'contract.pdf', file_base64: 'ZGF0YQ==' }],
      recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }]
    }, { documentApi });

    expect(captured?.draft).toBe(true);
  });

  it('allows embedded signing with a signature page instead of explicit fields', async () => {
    let captured: DocumentRequest | undefined;
    const documentApi = {
      async createDocument({ documentRequest }: { documentRequest: DocumentRequest }): Promise<DocumentResponse> {
        captured = documentRequest;
        return documentRequest as unknown as DocumentResponse;
      },
      async createDocumentFromTemplate(): Promise<DocumentFromTemplateResponse> {
        throw new Error('not used');
      }
    };

    await createSigningDocument({
      name: 'NDA',
      files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
      recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }],
      with_signature_page: true
    }, { documentApi });

    expect(captured?.with_signature_page).toBe(true);
  });

  it('rejects embedded signing without fields, text tags, or a signature page', async () => {
    await expect(createSigningDocument({
      name: 'NDA',
      files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
      recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }]
    } as unknown as CreateSigningDocumentParams, {
      documentApi: {
        async createDocument(): Promise<DocumentResponse> {
          throw new Error('should not call API');
        },
        async createDocumentFromTemplate(): Promise<DocumentFromTemplateResponse> {
          throw new Error('not used');
        }
      }
    })).rejects.toThrow(/fields for every recipient/);
  });

  it('rejects embedded signing when a recipient has no field assignment', async () => {
    await expect(createSigningDocument({
      name: 'NDA',
      files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
      recipients: [
        { id: '1', name: 'Jane Doe', email: 'jane@example.com' },
        { id: '2', name: 'John Doe', email: 'john@example.com' }
      ],
      fields: [[{ x: 20, y: 60, page: 1, type: 'signature', recipient_id: '1' }]]
    }, {
      documentApi: {
        async createDocument(): Promise<DocumentResponse> {
          throw new Error('should not call API');
        },
        async createDocumentFromTemplate(): Promise<DocumentFromTemplateResponse> {
          throw new Error('not used');
        }
      }
    })).rejects.toThrow(/fields for every recipient/);
  });

  it('creates an embedded signing request from a template', async () => {
    const documentApi = {
      async createDocument(): Promise<DocumentResponse> {
        throw new Error('not used');
      },
      async createDocumentFromTemplate(
        { documentFromTemplateRequest }: { documentFromTemplateRequest: DocumentFromTemplateRequest }
      ): Promise<DocumentFromTemplateResponse> {
        return documentFromTemplateRequest as unknown as DocumentFromTemplateResponse;
      }
    };

    const response = await createSigningDocumentFromTemplate({
      template_id: 'template_123',
      recipients: [{ placeholder_name: 'Signer 1', name: 'Jane Doe', email: 'jane@example.com', passcode: '' }]
    }, { documentApi });

    expect(response.embedded_signing).toBe(true);
    expect(response.recipients?.[0]?.placeholder_name).toBe('Signer 1');
    expect(response.recipients?.[0]?.passcode).toBeUndefined();
  });

  it('extracts embedded signing URLs', () => {
    const document = {
      recipients: [
        { email: 'jane@example.com', embedded_signing_url: 'https://www.signwell.com/docs/abc' },
        { email: 'missing@example.com', embedded_signing_url: null }
      ]
    };

    expect(embeddedSigningUrl(document)).toBe('https://www.signwell.com/docs/abc');
    expect(embeddedSigningUrls(document)).toEqual({
      'jane@example.com': 'https://www.signwell.com/docs/abc'
    });
  });

  it('renders safe embed script helpers', () => {
    expect(scriptTag()).toBe('<script src="https://static.signwell.com/assets/embedded.js"></script>');
    const iframe = signingIframe({
      url: 'https://www.signwell.com/path?a=1&b=2',
      container_id: 'container</script>&\u2028\u2029',
      allow_close: false,
      events: { completed: 'SignWellHandlers.completed' }
    });
    expect(iframe).toContain('\\u003c/script\\u003e');
    expect(iframe).toContain('\\u0026');
    expect(iframe).toContain('\\u2028');
    expect(iframe).toContain('\\u2029');
    expect(requestingIframe({ url: 'https://www.signwell.com/edit', auto_open: false })).not.toContain('embed.open();');
  });

  it('rejects unsafe embed URLs by default', () => {
    expect(() => signingIframe({ url: 'javascript:alert(1)' })).toThrow(/Embed URL must use HTTPS/);
    expect(() => signingIframe({ url: 'http://www.signwell.com/sign' })).toThrow(/Embed URL must use HTTPS/);
    expect(() => signingIframe({ url: 'https://user:pass@www.signwell.com/sign' })).toThrow(/credentials/);
    expect(() => signingIframe({ url: 'https://evil.example/sign' })).toThrow(/host is not allowed/);
  });

  it('allows exact custom embed hosts for non-production environments', () => {
    const iframe = requestingIframe({
      url: 'https://sandbox.signwell.test/edit',
      allowed_embed_hosts: ['sandbox.signwell.test']
    });

    expect(iframe).toContain('"url":"https://sandbox.signwell.test/edit"');
    expect(() => requestingIframe({
      url: 'https://evil-sandbox.signwell.test/edit',
      allowed_embed_hosts: ['sandbox.signwell.test']
    })).toThrow(/host is not allowed/);
  });

  it('validates optional redirect URLs', () => {
    expect(signingIframe({
      url: 'https://www.signwell.com/sign',
      redirect_url: 'https://app.example.com/done',
      decline_redirect_url: 'https://app.example.com/declined'
    })).toContain('"redirectUrl":"https://app.example.com/done"');

    expect(() => signingIframe({
      url: 'https://www.signwell.com/sign',
      redirect_url: 'http://app.example.com/done'
    })).toThrow(/Redirect URL must use HTTPS/);

    expect(() => signingIframe({
      url: 'https://www.signwell.com/sign',
      redirect_url: 'https://user:pass@app.example.com/done'
    })).toThrow(/credentials/);

    expect(() => signingIframe({
      url: 'https://www.signwell.com/sign',
      redirect_url: 'https://evil.example/done',
      allowed_redirect_hosts: ['app.example.com']
    })).toThrow(/Redirect URL host is not allowed/);
  });

  it('rejects raw JavaScript event handlers', () => {
    expect(() => signingIframe({
      url: 'https://www.signwell.com/sign',
      events: { completed: 'alert("x")' }
    })).toThrow(/Event handler paths/);
  });

  it('rejects prototype-chain event handler paths', () => {
    expect(() => signingIframe({
      url: 'https://www.signwell.com/sign',
      events: { completed: 'constructor.constructor' }
    })).toThrow(/prototype-chain/);
  });
});

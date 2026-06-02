# @signwell/node-sdk

TypeScript SDK for the SignWell API.

## Installation

```sh
npm install @signwell/node-sdk
```

Requires Node.js 18 or newer.

## Quick Start

```ts
import { Configuration, DocumentApi, FieldType } from '@signwell/node-sdk';

const documents = new DocumentApi(new Configuration({
  apiKey: process.env.SIGNWELL_API_KEY
}));

const document = await documents.createDocument({
  documentRequest: {
    name: 'NDA',
    test_mode: true,
    files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
    recipients: [{ id: '1', name: 'Jane Doe', email: 'jane@example.com' }],
    fields: [[{ x: 20, y: 60, page: 1, type: FieldType.Signature, recipient_id: '1' }]]
  }
});
```

## Namespaces

```ts
import { Resources, Models, Errors, Embedded, Webhook } from '@signwell/node-sdk';

const api = new Resources.DocumentApi();
const fieldType: Models.FieldType = Models.FieldType.Signature;
```

## Errors

```ts
import { DocumentApi, NotFoundError, RateLimitError } from '@signwell/node-sdk';

try {
  await new DocumentApi().getDocument({ id: 'missing' });
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log(error.body);
  } else if (error instanceof RateLimitError) {
    console.log('Try again later');
  }
}
```

## Binary Responses

```ts
import { BulkSendApi, DocumentApi, RegionalApi } from '@signwell/node-sdk';

const csv = await new BulkSendApi().getBulkSendCsvTemplate({
  templateIds: ['00000000-0000-0000-0000-000000000000']
}); // Blob

const csvJson = await new BulkSendApi().getBulkSendCsvTemplate({
  templateIds: ['00000000-0000-0000-0000-000000000000'],
  base64: true
}); // BulkSendCsvTemplateResponse

const pdf = await new DocumentApi().getCompletedPdf({ id: 'doc_123' }); // Blob
const pdfUrl = await new DocumentApi().getCompletedPdf({ id: 'doc_123', urlOnly: true }); // CompletedPdfUrlResponse

const certificate = await new RegionalApi().getNom151Certificate({ id: 'doc_123' }); // Blob
const certificateUrl = await new RegionalApi().getNom151Certificate({ id: 'doc_123', urlOnly: true }); // Nom151UrlResponse
const certificateObject = await new RegionalApi().getNom151Certificate({ id: 'doc_123', objectOnly: true }); // Nom151CertificateResponse
```

## Embedded Helpers

```ts
import { Embedded, FieldType } from '@signwell/node-sdk';

const document = await Embedded.createSigningDocument({
  name: 'NDA',
  files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
  recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }],
  fields: [[{ x: 20, y: 60, page: 1, type: FieldType.Signature }]]
});

const url = Embedded.embeddedSigningUrl(document);
const script = Embedded.signingIframe({ url: url ?? '', events: { completed: 'SignWellHandlers.completed' } });
```

Embedded signing documents must provide fields for every recipient, set `with_signature_page: true`, or use `text_tags: true`. The helper validates that shape before making the API request so invalid fieldless signing documents fail locally instead of returning a `422` response.

Embed helpers only accept HTTPS SignWell URLs by default and reject credentialed URLs, `http:`, `javascript:`, and arbitrary hosts before rendering script output. For non-production SignWell environments, pass exact hostnames through `allowed_embed_hosts`. Redirect URLs must be HTTPS and credential-free; pass `allowed_redirect_hosts` to restrict redirects to your app host.

## Webhooks

```ts
import { Webhook } from '@signwell/node-sdk';

const replayStore = Webhook.createMemoryReplayStore();

Webhook.verifyEventOrThrow({
  event: payload.event,
  webhookId: process.env.SIGNWELL_WEBHOOK_ID ?? '',
  toleranceSeconds: 300
});

await Webhook.verifyEventOnceOrThrow({
  event: payload.event,
  webhookId: process.env.SIGNWELL_WEBHOOK_ID ?? '',
  toleranceSeconds: 300,
  replayStore
});
```

`verifyEvent` and `verifyEventOrThrow` remain synchronous and do not store replay state. Use `verifyEventOnce` or `verifyEventOnceOrThrow` with an atomic `WebhookReplayStore` when webhook processing has side effects. The in-memory replay store is intended for local development and single-process examples; production apps should back the store with Redis, a database, or another shared atomic insert.

## Build

```sh
npm ci
npm run validate
```

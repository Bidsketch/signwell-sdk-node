import { expectAssignable, expectError, expectType } from 'tsd';
import {
  APIApplicationApi,
  ApiApplicationApi,
  BadRequestError,
  BulkSendApi,
  Configuration,
  DocumentApi,
  Embedded,
  Errors,
  Models,
  NotFoundError,
  RegionalApi,
  Resources,
  Webhook,
  createSigningDocument,
  createMemoryReplayStore,
  verifyEvent,
  verifyEventOnce
} from '@signwell/node-sdk';

const bulkSendApi = new BulkSendApi(new Configuration({ apiKey: 'test_key' }));
expectType<Promise<Blob>>(bulkSendApi.getBulkSendCsvTemplate({
  templateIds: ['00000000-0000-0000-0000-000000000000']
}));
expectType<Promise<Models.BulkSendCsvTemplateResponse>>(bulkSendApi.getBulkSendCsvTemplate({
  templateIds: ['00000000-0000-0000-0000-000000000000'],
  base64: true
}));

const documentApi = new DocumentApi();
expectType<Promise<Blob>>(documentApi.getCompletedPdf({ id: 'doc_123' }));
expectType<Promise<Models.CompletedPdfUrlResponse>>(documentApi.getCompletedPdf({
  id: 'doc_123',
  urlOnly: true
}));

const regionalApi = new RegionalApi(new Configuration({ apiKey: 'test_key' }));
expectType<Promise<Blob>>(regionalApi.getNom151Certificate({ id: 'doc_123' }));
expectType<Promise<Models.Nom151UrlResponse>>(regionalApi.getNom151Certificate({
  id: 'doc_123',
  urlOnly: true
}));
expectType<Promise<Models.Nom151CertificateResponse>>(regionalApi.getNom151Certificate({
  id: 'doc_123',
  objectOnly: true
}));
expectError(regionalApi.getNom151Certificate({
  id: 'doc_123',
  urlOnly: true,
  objectOnly: true
}));

expectAssignable<Models.FilesInner>({ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' });
expectAssignable<Models.FilesInner>({ name: 'nda.pdf', file_base64: 'ZGF0YQ==' });
expectError(expectAssignable<Models.FilesInner>({ name: 'nda.pdf' }));
expectError(expectAssignable<Models.FilesInner>({
  name: 'nda.pdf',
  file_url: 'https://example.com/nda.pdf',
  file_base64: 'ZGF0YQ=='
}));
expectAssignable<Models.AdditionalFilesInner>({ name: 'appendix.pdf', file_url: 'https://example.com/appendix.pdf' });
expectError(expectAssignable<Models.AdditionalFilesInner>({ name: 'appendix.pdf' }));

expectAssignable<Models.DocumentFromTemplateRequest>({
  template_id: '00000000-0000-0000-0000-000000000000',
  recipients: []
});
expectAssignable<Models.DocumentFromTemplateRequest>({
  template_ids: ['00000000-0000-0000-0000-000000000000'],
  recipients: []
});
expectError(expectAssignable<Models.DocumentFromTemplateRequest>({ recipients: [] }));
expectError(expectAssignable<Models.DocumentFromTemplateRequest>({
  template_id: '00000000-0000-0000-0000-000000000000',
  template_ids: ['00000000-0000-0000-0000-000000000000'],
  recipients: []
}));

expectType<boolean>(verifyEvent({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123',
  toleranceSeconds: 300,
  now: () => 1710000000
}));
expectType<boolean>(Webhook.verifyEvent({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123'
}));
const replayStore: Webhook.WebhookReplayStore = Webhook.createMemoryReplayStore({ maxEntries: 100 });
expectType<Webhook.WebhookReplayStore>(createMemoryReplayStore());
expectType<string>(Webhook.replayKey({
  type: 'document_completed',
  time: '1710000000',
  hash: 'abc'
}));
expectType<Promise<boolean>>(Webhook.verifyEventOnce({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123',
  toleranceSeconds: 300,
  replayStore
}));
expectType<Promise<boolean>>(verifyEventOnce({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123',
  toleranceSeconds: 300,
  replayStore
}));
expectType<Promise<true>>(Webhook.verifyEventOnceOrThrow({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123',
  toleranceSeconds: 300,
  replayStore
}));
expectError(Webhook.verifyEventOnce({
  event: { type: 'document_completed', time: '1710000000', hash: 'abc' },
  webhookId: 'whk_123',
  replayStore
}));

expectType<string>(Embedded.scriptTag());
expectType<string>(Embedded.signingIframe({
  url: 'https://www.signwell.com/embedded/sign/doc_123',
  allowed_embed_hosts: ['staging.signwell.test'],
  redirect_url: 'https://app.example.com/done',
  allowed_redirect_hosts: ['app.example.com']
}));
expectType<Promise<Models.DocumentResponse>>(createSigningDocument({
  name: 'NDA',
  files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
  recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }],
  fields: [[{ x: 20, y: 60, page: 1, type: Models.FieldType.Signature }]]
}));
expectType<Promise<Models.DocumentResponse>>(createSigningDocument({
  name: 'NDA',
  files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
  recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }],
  with_signature_page: true
}));
expectType<Promise<Models.DocumentResponse>>(createSigningDocument({
  name: 'NDA',
  files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
  recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }],
  text_tags: true
}));
expectError(createSigningDocument({
  name: 'NDA',
  files: [{ name: 'nda.pdf', file_url: 'https://example.com/nda.pdf' }],
  recipients: [{ name: 'Jane Doe', email: 'jane@example.com' }]
}));

expectAssignable<typeof Resources.DocumentApi>(DocumentApi);
expectAssignable<typeof Resources.ApiApplicationApi>(ApiApplicationApi);
expectAssignable<typeof Resources.APIApplicationApi>(APIApplicationApi);
expectAssignable<typeof Models.FieldType>(Models.FieldType);
expectAssignable<typeof Errors.NotFoundError>(NotFoundError);
expectAssignable<BadRequestError>(new Errors.BadRequestError({ code: 400 }));

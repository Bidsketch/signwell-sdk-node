// Source: signwell-sdk-generator/extras/node/overlay/src/extras/embedded.ts
// Do not edit the generated SDK copy directly.

import { DocumentApi } from '../apis/DocumentApi.js';
import type {
  DocumentFromTemplateRequest,
  DocumentFromTemplateResponse,
  DocumentRequest,
  DocumentResponse,
  FieldsInnerInner,
  FilesInner,
  RecipientsInner,
  TemplateRecipientsInner
} from '../models/index.js';
import type { Configuration } from '../runtime.js';

export const SCRIPT_URL = 'https://static.signwell.com/assets/embedded.js';

export interface EmbeddedRecipientInput {
  id?: string;
  name: string;
  email: string;
  passcode?: string | number | null;
}

export interface EmbeddedTemplateRecipientInput extends EmbeddedRecipientInput {
  placeholder_name?: string;
}

export type EmbeddedFileInput =
  | { name: string; file_url: string; file_base64?: never }
  | { name: string; file_base64: string; file_url?: never };

export type EmbeddedFieldInput =
  Omit<FieldsInnerInner, 'recipient_id' | 'required'> &
  Partial<Pick<FieldsInnerInner, 'recipient_id' | 'required'>>;

export interface EmbeddedClientOptions {
  documentApi?: Pick<DocumentApi, 'createDocument' | 'createDocumentFromTemplate'>;
  configuration?: Configuration;
}

export type CreateSigningDocumentParams =
  Omit<DocumentRequest, 'name' | 'files' | 'recipients' | 'fields' | 'test_mode' | 'embedded_signing' | 'embedded_signing_notifications' | 'with_signature_page' | 'text_tags'> & {
    name: string;
    files: EmbeddedFileInput[];
    recipients: EmbeddedRecipientInput[];
    test_mode?: boolean;
    send_notifications?: boolean;
  } & (
    | { fields: EmbeddedFieldInput[][]; with_signature_page?: boolean; text_tags?: boolean }
    | { fields?: EmbeddedFieldInput[][]; with_signature_page: true; text_tags?: boolean }
    | { fields?: EmbeddedFieldInput[][]; with_signature_page?: boolean; text_tags: true }
  );

export interface CreateRequestingDocumentParams
  extends Omit<DocumentRequest, 'name' | 'files' | 'recipients' | 'test_mode' | 'draft'> {
  name: string;
  files: EmbeddedFileInput[];
  recipients: EmbeddedRecipientInput[];
  test_mode?: boolean;
}

export type TemplateSelector =
  | { template_id: string; template_ids?: never }
  | { template_ids: string[]; template_id?: never };

export type CreateSigningDocumentFromTemplateParams =
  TemplateSelector &
  Omit<DocumentFromTemplateRequest, 'template_id' | 'template_ids' | 'recipients' | 'test_mode' | 'embedded_signing' | 'embedded_signing_notifications'> & {
    recipients: EmbeddedTemplateRecipientInput[];
    test_mode?: boolean;
    send_notifications?: boolean;
  };

export interface EmbeddedSigningRecipient {
  email?: string | null;
  embedded_signing_url?: string | null;
}

export interface EmbeddedSigningDocument {
  recipients?: EmbeddedSigningRecipient[] | null;
}

export interface EmbedEvents {
  completed?: string;
  closed?: string;
  declined?: string;
  error?: string;
  [eventName: string]: string | undefined;
}

export interface SigningIframeOptions {
  url: string;
  allowed_embed_hosts?: readonly string[];
  allowed_redirect_hosts?: readonly string[];
  container_id?: string;
  allow_decline?: boolean;
  allow_close?: boolean;
  show_header?: boolean;
  allow_download?: boolean;
  redirect_url?: string;
  decline_redirect_url?: string;
  events?: EmbedEvents;
  auto_open?: boolean;
}

export interface RequestingIframeOptions {
  url: string;
  allowed_embed_hosts?: readonly string[];
  allowed_redirect_hosts?: readonly string[];
  container_id?: string;
  allow_close?: boolean;
  show_header?: boolean;
  allow_download?: boolean;
  show_send_button?: boolean;
  redirect_url?: string;
  events?: EmbedEvents;
  auto_open?: boolean;
}

const SAFE_HANDLER_PATH = /^[$A-Z_][0-9A-Z_$]*(?:\.[$A-Z_][0-9A-Z_$]*)*$/i;
const BLOCKED_HANDLER_SEGMENTS = new Set(['__proto__', 'constructor', 'prototype']);

export async function createSigningDocument(
  params: CreateSigningDocumentParams,
  options: EmbeddedClientOptions = {}
): Promise<DocumentResponse> {
  const {
    name,
    files,
    recipients,
    fields,
    test_mode = false,
    send_notifications = false,
    ...rest
  } = params;
  const recipientModels = buildRecipients(recipients);
  const request: DocumentRequest = {
    ...rest,
    name,
    test_mode,
    files: buildFiles(files),
    recipients: recipientModels,
    embedded_signing: true,
    embedded_signing_notifications: send_notifications
  };

  if (fields) {
    request.fields = buildFields(fields, recipientModels);
  }

  validateSigningPlacement(request, recipientModels);

  return documentApi(options).createDocument({ documentRequest: request });
}

export async function createRequestingDocument(
  params: CreateRequestingDocumentParams,
  options: EmbeddedClientOptions = {}
): Promise<DocumentResponse> {
  const {
    name,
    files,
    recipients,
    test_mode = false,
    ...rest
  } = params;
  const request: DocumentRequest = {
    ...rest,
    name,
    test_mode,
    files: buildFiles(files),
    recipients: buildRecipients(recipients),
    draft: true
  };

  return documentApi(options).createDocument({ documentRequest: request });
}

export async function createSigningDocumentFromTemplate(
  params: CreateSigningDocumentFromTemplateParams,
  options: EmbeddedClientOptions = {}
): Promise<DocumentFromTemplateResponse> {
  const {
    recipients,
    test_mode = false,
    send_notifications = false,
    ...rest
  } = params;
  const request: DocumentFromTemplateRequest = {
    ...rest,
    test_mode,
    recipients: buildTemplateRecipients(recipients),
    embedded_signing: true,
    embedded_signing_notifications: send_notifications
  };

  return documentApi(options).createDocumentFromTemplate({ documentFromTemplateRequest: request });
}

export function embeddedSigningUrls(document: EmbeddedSigningDocument): Record<string, string> {
  const recipients = document.recipients ?? [];
  return recipients.reduce<Record<string, string>>((urls, recipient) => {
    if (recipient.email && recipient.embedded_signing_url) {
      urls[recipient.email] = recipient.embedded_signing_url;
    }
    return urls;
  }, {});
}

export function embeddedSigningUrl(document: EmbeddedSigningDocument, recipientIndex = 0): string | undefined {
  return document.recipients?.[recipientIndex]?.embedded_signing_url ?? undefined;
}

export function scriptTag(): string {
  return `<script src="${SCRIPT_URL}"></script>`;
}

export function signingIframe(options: SigningIframeOptions): string {
  const jsOptions = buildIframeOptions({
    url: options.url,
    allowedEmbedHosts: options.allowed_embed_hosts,
    allowedRedirectHosts: options.allowed_redirect_hosts,
    values: { containerId: options.container_id },
    booleans: {
      allowDecline: options.allow_decline,
      allowClose: options.allow_close,
      showHeader: options.show_header,
      allowDownload: options.allow_download
    },
    redirects: {
      redirectUrl: options.redirect_url,
      declineRedirectUrl: options.decline_redirect_url
    }
  });

  return buildEmbedScript(jsOptions, options.events ?? {}, options.auto_open ?? true);
}

export function requestingIframe(options: RequestingIframeOptions): string {
  const jsOptions = buildIframeOptions({
    url: options.url,
    allowedEmbedHosts: options.allowed_embed_hosts,
    allowedRedirectHosts: options.allowed_redirect_hosts,
    values: { containerId: options.container_id },
    booleans: {
      allowClose: options.allow_close,
      showHeader: options.show_header,
      allowDownload: options.allow_download,
      showSendButton: options.show_send_button
    },
    redirects: { redirectUrl: options.redirect_url }
  });

  return buildEmbedScript(jsOptions, options.events ?? {}, options.auto_open ?? true);
}

function buildIframeOptions({
  url,
  allowedEmbedHosts,
  allowedRedirectHosts,
  values,
  booleans,
  redirects
}: {
  url: string;
  allowedEmbedHosts: readonly string[] | undefined;
  allowedRedirectHosts: readonly string[] | undefined;
  values: Record<string, string | undefined>;
  booleans: Record<string, boolean | undefined>;
  redirects: Record<string, string | undefined>;
}): Record<string, unknown> {
  const jsOptions: Record<string, unknown> = {
    url: validateEmbedUrl(url, allowedEmbedHosts)
  };
  for (const [key, value] of Object.entries(values)) {
    setIfPresent(jsOptions, key, value);
  }
  for (const [key, value] of Object.entries(booleans)) {
    setIfFalse(jsOptions, key, value);
  }
  for (const [key, value] of Object.entries(redirects)) {
    setIfPresent(jsOptions, key, validateRedirectUrl(value, allowedRedirectHosts));
  }
  return jsOptions;
}

function documentApi(options: EmbeddedClientOptions): Pick<DocumentApi, 'createDocument' | 'createDocumentFromTemplate'> {
  return options.documentApi ?? new DocumentApi(options.configuration);
}

function buildRecipients(recipients: EmbeddedRecipientInput[]): RecipientsInner[] {
  return recipients.map((recipient, index) => {
    const model: RecipientsInner = {
      id: recipient.id ?? String(index + 1),
      name: recipient.name,
      email: recipient.email
    };
    const passcode = optionalString(recipient.passcode);
    if (passcode !== undefined) {
      model.passcode = passcode;
    }
    return model;
  });
}

function buildTemplateRecipients(recipients: EmbeddedTemplateRecipientInput[]): TemplateRecipientsInner[] {
  return recipients.map((recipient, index) => {
    const model: TemplateRecipientsInner = {
      id: recipient.id ?? String(index + 1),
      name: recipient.name,
      email: recipient.email
    };
    if (recipient.placeholder_name !== undefined) {
      model.placeholder_name = recipient.placeholder_name;
    }
    const passcode = optionalString(recipient.passcode);
    if (passcode !== undefined) {
      model.passcode = passcode;
    }
    return model;
  });
}

function buildFiles(files: EmbeddedFileInput[]): FilesInner[] {
  return files.map((file) => {
    if (!file.name) {
      throw new TypeError('Each file must include name');
    }

    if ('file_url' in file && file.file_url) {
      return { file_url: file.file_url, name: file.name };
    }

    if ('file_base64' in file && file.file_base64) {
      return { file_base64: file.file_base64, name: file.name };
    }

    throw new TypeError('Each file must include either file_url or file_base64');
  });
}

function buildFields(fields: EmbeddedFieldInput[][], recipientModels: RecipientsInner[]): FieldsInnerInner[][] {
  const defaultRecipientId = recipientModels[0]?.id;
  return fields.map((fileFields) => fileFields.map((field) => {
    const { recipient_id, required, ...fieldValues } = field;
    const resolvedRecipientId = recipient_id ?? defaultRecipientId;
    if (resolvedRecipientId === undefined) {
      throw new TypeError('Each field must include recipient_id when no default recipient exists');
    }

    const model: FieldsInnerInner = {
      ...fieldValues,
      recipient_id: resolvedRecipientId,
      required: required ?? true
    };
    return model;
  }));
}

function validateSigningPlacement(request: DocumentRequest, recipientModels: RecipientsInner[]): void {
  if (request.with_signature_page === true || request.text_tags === true) {
    return;
  }

  const assignedRecipientIds = new Set(
    (request.fields ?? [])
      .flat()
      .map((field) => field.recipient_id)
      .filter((recipientId): recipientId is string => typeof recipientId === 'string' && recipientId.length > 0)
  );
  const missingRecipients = recipientModels.filter((recipient) => recipient.id && !assignedRecipientIds.has(recipient.id));

  if ((request.fields ?? []).flat().length === 0 || missingRecipients.length > 0) {
    throw new TypeError('Embedded signing documents must include fields for every recipient, set with_signature_page: true, or set text_tags: true');
  }
}

function optionalString(value: string | number | null | undefined): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  const normalized = String(value).trim();
  return normalized.length > 0 ? normalized : undefined;
}

function setIfPresent(target: Record<string, unknown>, key: string, value: string | undefined): void {
  if (value !== undefined) {
    target[key] = value;
  }
}

function setIfFalse(target: Record<string, unknown>, key: string, value: boolean | undefined): void {
  if (value === false) {
    target[key] = value;
  }
}

function validateEmbedUrl(rawUrl: string, allowedHosts?: readonly string[]): string {
  const parsed = parseHttpsUrl(rawUrl, 'Embed URL');
  const hostname = parsed.hostname.toLowerCase();
  if (!isDefaultSignWellHost(hostname) && !normalizeAllowedHosts(allowedHosts).has(hostname)) {
    throw new TypeError('Embed URL host is not allowed');
  }
  return parsed.href;
}

function validateRedirectUrl(rawUrl: string | undefined, allowedHosts?: readonly string[]): string | undefined {
  if (rawUrl === undefined) {
    return undefined;
  }

  const parsed = parseHttpsUrl(rawUrl, 'Redirect URL');
  const allowedHostSet = normalizeAllowedHosts(allowedHosts);
  if (allowedHostSet.size > 0 && !allowedHostSet.has(parsed.hostname.toLowerCase())) {
    throw new TypeError('Redirect URL host is not allowed');
  }
  return parsed.href;
}

function parseHttpsUrl(rawUrl: string, label: 'Embed URL' | 'Redirect URL'): URL {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new TypeError(`${label} is invalid`);
  }

  if (parsed.protocol !== 'https:') {
    throw new TypeError(`${label} must use HTTPS`);
  }

  if (parsed.username || parsed.password) {
    throw new TypeError(`${label} must not include credentials`);
  }

  if (!parsed.hostname) {
    throw new TypeError(`${label} host is required`);
  }

  return parsed;
}

function isDefaultSignWellHost(hostname: string): boolean {
  return hostname === 'signwell.com' || hostname.endsWith('.signwell.com');
}

function normalizeAllowedHosts(allowedHosts: readonly string[] | undefined): Set<string> {
  const normalized = new Set<string>();
  for (const host of allowedHosts ?? []) {
    const value = host.trim().toLowerCase();
    if (!value || value.includes('/') || value.includes('@') || value.includes(':')) {
      throw new TypeError('Allowed hosts must be exact hostnames');
    }
    normalized.add(value);
  }
  return normalized;
}

function buildEmbedScript(jsOptions: Record<string, unknown>, events: EmbedEvents, autoOpen: boolean): string {
  const config = scriptSafeJson(jsOptions);
  const eventPaths = scriptSafeJson(normalizeEventPaths(events));
  const openCall = autoOpen ? 'embed.open();' : '';

  return `<script>(function() {
  var config = ${config};
  var eventPaths = ${eventPaths};
  var resolveSignWellHandler = function(path) {
    if (!path) return null;
    return path.split('.').reduce(function(context, key) {
      return context && context[key];
    }, globalThis);
  };

  if (Object.keys(eventPaths).length > 0) {
    config.events = {};
    Object.keys(eventPaths).forEach(function(name) {
      var handler = resolveSignWellHandler(eventPaths[name]);
      if (typeof handler === 'function') {
        config.events[name] = handler;
      }
    });
  }

  var embed = new SignWellEmbed(config);
  ${openCall}
})();</script>`;
}

function normalizeEventPaths(events: EmbedEvents): Record<string, string> {
  return Object.entries(events).reduce<Record<string, string>>((normalized, [eventName, handlerPath]) => {
    if (handlerPath === undefined) {
      return normalized;
    }

    const path = handlerPath.trim();
    if (!SAFE_HANDLER_PATH.test(path)) {
      throw new TypeError(`Event handler paths must be dot-separated JavaScript identifiers. Invalid handler for ${eventName}: ${handlerPath}`);
    }

    if (path.split('.').some((segment) => BLOCKED_HANDLER_SEGMENTS.has(segment))) {
      throw new TypeError(`Event handler paths cannot include prototype-chain segments. Invalid handler for ${eventName}: ${handlerPath}`);
    }

    normalized[eventName] = path;
    return normalized;
  }, {});
}

function scriptSafeJson(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (char) => {
    switch (char) {
      case '<':
        return '\\u003c';
      case '>':
        return '\\u003e';
      case '&':
        return '\\u0026';
      case '\u2028':
        return '\\u2028';
      case '\u2029':
        return '\\u2029';
      default:
        return char;
    }
  });
}

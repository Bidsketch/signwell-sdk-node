import { describe, expect, it } from 'vitest';
import * as sdk from '../src/index.js';
import { DocumentApi, TemplateApi } from '../src/index.js';

describe('exports', () => {
  it('exports Ruby-parity API resources at the root and Resources namespace', () => {
    const expectedResources = [
      'DocumentApi',
      'TemplateApi',
      'BulkSendApi',
      'WebhooksApi',
      'MeApi',
      'RegionalApi',
      'ApiApplicationApi',
      'APIApplicationApi'
    ];
    const rootExports: Record<string, unknown> = sdk;
    const resourceExports: Record<string, unknown> = sdk.Resources;

    for (const resource of expectedResources) {
      expect(typeof rootExports[resource]).toBe('function');
      expect(typeof resourceExports[resource]).toBe('function');
    }
  });

  it('keeps internal SDK endpoints generated', () => {
    expect(typeof new DocumentApi().listDocuments).toBe('function');
    expect(typeof new TemplateApi().listTemplates).toBe('function');
  });
});

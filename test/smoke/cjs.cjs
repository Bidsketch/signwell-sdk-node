const sdk = require('../../dist/index.js');

if (typeof sdk.DocumentApi !== 'function') {
  throw new Error('DocumentApi was not exported from CommonJS build');
}

if (typeof sdk.Resources.DocumentApi !== 'function') {
  throw new Error('Resources namespace was not exported from CommonJS build');
}

if (typeof sdk.APIApplicationApi !== 'function' || typeof sdk.Resources.APIApplicationApi !== 'function') {
  throw new Error('APIApplicationApi alias was not exported from CommonJS build');
}

if (typeof sdk.Embedded.scriptTag !== 'function') {
  throw new Error('Embedded namespace was not exported from CommonJS build');
}

if (typeof sdk.Webhook.verifyEvent !== 'function') {
  throw new Error('Webhook namespace was not exported from CommonJS build');
}

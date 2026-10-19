# DocumentApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDocument**](DocumentApi.md#createdocument) | **POST** /api/v1/documents | Create Document |
| [**createDocumentFromTemplate**](DocumentApi.md#createdocumentfromtemplate) | **POST** /api/v1/document_templates/documents | Create Document from Template |
| [**deleteDocument**](DocumentApi.md#deletedocument) | **DELETE** /api/v1/documents/{id} | Delete Document |
| [**getCompletedPdf**](DocumentApi.md#getcompletedpdf) | **GET** /api/v1/documents/{id}/completed_pdf | Completed PDF |
| [**getDocument**](DocumentApi.md#getdocument) | **GET** /api/v1/documents/{id} | Get Document |
| [**listDocuments**](DocumentApi.md#listdocuments) | **GET** /api/v1/documents | List Documents |
| [**sendDocument**](DocumentApi.md#senddocument) | **POST** /api/v1/documents/{id}/send | Update and Send Document |
| [**sendReminder**](DocumentApi.md#sendreminderoperation) | **POST** /api/v1/documents/{id}/remind | Send Reminder |
| [**updateAuthentication**](DocumentApi.md#updateauthenticationoperation) | **PATCH** /api/v1/documents/{id}/authentication | Update Authentication |
| [**updateRecipients**](DocumentApi.md#updaterecipientsoperation) | **PATCH** /api/v1/documents/{id}/recipients | Update Recipients |



## createDocument

> DocumentResponse createDocument(documentRequest)

Create Document

Creates and optionally sends a new document for signing. If &#x60;draft&#x60; is set to true the document will not be sent. Recipients are notified by email, SMS, or both based on each recipient\&#39;s &#x60;delivery_method&#x60;. SMS delivery is available only to workspaces that are eligible for SMS and have it enabled, and requires a &#x60;phone_number&#x60; in E.164 format.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { CreateDocumentRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // DocumentRequest
    documentRequest: ...,
  } satisfies CreateDocumentRequest;

  try {
    const data = await api.createDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentRequest** | [DocumentRequest](DocumentRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | created |  -  |
| **400** | bad request |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDocumentFromTemplate

> DocumentFromTemplateResponse createDocumentFromTemplate(documentFromTemplateRequest)

Create Document from Template

Creates and optionally sends a new document for signing. If &#x60;draft&#x60; is set to true the document will not be sent. Pre-signed template signatures and initials are copied to the new document as document content — they remain visible on the document but do not generate a signing event, do not emit a &#x60;document_signed&#x60; webhook, and the recipient\&#39;s status will not reflect them as a real signing action. If the template was pre-signed for a signer and the request adds new unsigned signature/initials fields for that same signer, the pre-applied ratifications are cleared silently so the signer is asked to sign once. Recipients are notified by email, SMS, or both based on each recipient\&#39;s &#x60;delivery_method&#x60;. SMS delivery is available only to workspaces that are eligible for SMS and have it enabled, and requires a &#x60;phone_number&#x60; in E.164 format.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { CreateDocumentFromTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // DocumentFromTemplateRequest
    documentFromTemplateRequest: ...,
  } satisfies CreateDocumentFromTemplateRequest;

  try {
    const data = await api.createDocumentFromTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentFromTemplateRequest** | [DocumentFromTemplateRequest](DocumentFromTemplateRequest.md) |  | |

### Return type

[**DocumentFromTemplateResponse**](DocumentFromTemplateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | created |  -  |
| **400** | bad request |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDocument

> deleteDocument(id)

Delete Document

Deletes a document. Deleting a document will also cancel document signing (if in progress).  Supply the unique document ID from either a Create Document request or document page URL.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { DeleteDocumentRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDocumentRequest;

  try {
    const data = await api.deleteDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | no content |  -  |
| **404** | not found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCompletedPdf

> CompletedPdfResponse getCompletedPdf(id, urlOnly, auditPage, fileFormat)

Completed PDF

Gets a completed document PDF or ZIP file. Supply the unique document ID from either a document creation request or document page URL.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { GetCompletedPdfRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean (optional)
    urlOnly: true,
    // boolean (optional)
    auditPage: true,
    // FileFormat (optional)
    fileFormat: ...,
  } satisfies GetCompletedPdfRequest;

  try {
    const data = await api.getCompletedPdf(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **urlOnly** | `boolean` |  | [Optional] [Defaults to `false`] |
| **auditPage** | `boolean` |  | [Optional] [Defaults to `true`] |
| **fileFormat** | `FileFormat` |  | [Optional] [Defaults to `undefined`] [Enum: pdf, zip] |

### Return type

[**CompletedPdfResponse**](CompletedPdfResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful, returns the final completed PDF, or if url_only is set to true, a JSON object is returned. When url_only&#x3D;false (default), the response is the raw PDF or ZIP binary data. |  -  |
| **404** | not_found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocument

> DocumentResponse getDocument(id)

Get Document

Returns a document and all associated document data. Supply the unique document ID from either a document creation request or Document page URL. Each recipient includes its &#x60;delivery_method&#x60;, and recipients whose delivery includes SMS also include an &#x60;sms&#x60; object with the masked phone number and SMS delivery status.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { GetDocumentRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentRequest;

  try {
    const data = await api.getDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **404** | not_found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDocuments

> DocumentListResponse listDocuments(page, limit, query)

List Documents

Returns a paginated list of documents for the authenticated account.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { ListDocumentsRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string | Search query using SignWell key:value syntax, for example `status:Completed AND name:NDA`. (optional)
    query: query_example,
  } satisfies ListDocumentsRequest;

  try {
    const data = await api.listDocuments(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **query** | `string` | Search query using SignWell key:value syntax, for example &#x60;status:Completed AND name:NDA&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**DocumentListResponse**](DocumentListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **401** | unauthorized |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendDocument

> DocumentResponse sendDocument(id, updateDocumentAndSendRequest)

Update and Send Document

Updates a draft document and sends it to be signed by recipients. &#x60;subject&#x60; and &#x60;message&#x60; apply to email notifications only; SMS notifications always use fixed system templates.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { SendDocumentRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDocumentAndSendRequest
    updateDocumentAndSendRequest: ...,
  } satisfies SendDocumentRequest;

  try {
    const data = await api.sendDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateDocumentAndSendRequest** | [UpdateDocumentAndSendRequest](UpdateDocumentAndSendRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | created |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendReminder

> sendReminder(id, sendReminderRequest)

Send Reminder

Sends a reminder to recipients who have not signed yet. Each recipient is reminded through their delivery method (email, SMS, or both). SMS reminders are only sent to recipients whose delivery method includes SMS, and only when the workspace is eligible for SMS and has it enabled.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { SendReminderOperationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // SendReminderRequest
    sendReminderRequest: ...,
  } satisfies SendReminderOperationRequest;

  try {
    const data = await api.sendReminder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **sendReminderRequest** | [SendReminderRequest](SendReminderRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | created |  -  |
| **404** | not found |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAuthentication

> DocumentResponse updateAuthentication(id, updateAuthenticationRequest)

Update Authentication

Update passcode delivery settings for recipients on a sent document. Only recipients who have not started signing can be updated.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { UpdateAuthenticationOperationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateAuthenticationRequest
    updateAuthenticationRequest: ...,
  } satisfies UpdateAuthenticationOperationRequest;

  try {
    const data = await api.updateAuthentication(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateAuthenticationRequest** | [UpdateAuthenticationRequest](UpdateAuthenticationRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **400** | bad request - invalid delivery methods |  -  |
| **404** | not found |  -  |
| **422** | unprocessable entity - invalid delivery methods |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRecipients

> DocumentResponse updateRecipients(id, updateRecipientsRequest)

Update Recipients

Updates one or more recipients on a document that has already been sent. Only recipients who have not started signing may be updated. Recipient IDs must be retrieved from the Get Document response. Allowed document statuses: sent, viewed, pending, bounced. For non-embedded documents, updated recipients will receive a new notification email. For embedded signing documents, email behavior follows each recipient\&#39;s send_email setting. This endpoint does not support changing a recipient\&#39;s &#x60;delivery_method&#x60; or &#x60;phone_number&#x60;; SMS delivery settings are set when the document is created.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '@signwell/node-sdk';
import type { UpdateRecipientsOperationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateRecipientsRequest
    updateRecipientsRequest: ...,
  } satisfies UpdateRecipientsOperationRequest;

  try {
    const data = await api.updateRecipients(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateRecipientsRequest** | [UpdateRecipientsRequest](UpdateRecipientsRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **400** | bad request - invalid structure |  -  |
| **404** | not found |  -  |
| **409** | conflict - document not in eligible state |  -  |
| **422** | unprocessable entity - business rule violation |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


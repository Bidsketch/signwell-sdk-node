# BulkSendApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBulkSend**](BulkSendApi.md#createbulksendoperation) | **POST** /api/v1/bulk_sends | Create Bulk Send |
| [**getBulkSend**](BulkSendApi.md#getbulksend) | **GET** /api/v1/bulk_sends/{id} | Get Bulk Send |
| [**getBulkSendCsvTemplate**](BulkSendApi.md#getbulksendcsvtemplate) | **GET** /api/v1/bulk_sends/csv_template | Get Bulk Send CSV Template |
| [**getBulkSendDocuments**](BulkSendApi.md#getbulksenddocuments) | **GET** /api/v1/bulk_sends/{id}/documents | Get Bulk Send Documents |
| [**listBulkSends**](BulkSendApi.md#listbulksends) | **GET** /api/v1/bulk_sends | List Bulk Sendings |
| [**validateBulkSendCsv**](BulkSendApi.md#validatebulksendcsv) | **POST** /api/v1/bulk_sends/validate_csv | Validate Bulk Send CSV |



## createBulkSend

> BulkSendCreateResponse createBulkSend(createBulkSendRequest)

Create Bulk Send

Creates a bulk send, and it validates the CSV file before creating the bulk send.

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { CreateBulkSendOperationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // CreateBulkSendRequest
    createBulkSendRequest: ...,
  } satisfies CreateBulkSendOperationRequest;

  try {
    const data = await api.createBulkSend(body);
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
| **createBulkSendRequest** | [CreateBulkSendRequest](CreateBulkSendRequest.md) |  | |

### Return type

[**BulkSendCreateResponse**](BulkSendCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | successful |  -  |
| **401** | unauthorized |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkSend

> BulkSendResponse getBulkSend(id)

Get Bulk Send

Returns information about the Bulk Send.

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { GetBulkSendRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetBulkSendRequest;

  try {
    const data = await api.getBulkSend(body);
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

[**BulkSendResponse**](BulkSendResponse.md)

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
| **404** | not found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkSendCsvTemplate

> Blob getBulkSendCsvTemplate(templateIds, base64)

Get Bulk Send CSV Template

Fetches a CSV template that corresponds to the provided document template IDs. CSV templates are blank CSV files that have columns containing required and optional data that can be sent when creating a bulk send. Fields can be referenced by the field label. Example: [placeholder name]_[field label] could be something like customer_address or signer_company_name (if \&#39;Customer\&#39; and \&#39;Signer\&#39; were placeholder names for templates set up in SignWell).

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { GetBulkSendCsvTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // Array<string>
    templateIds: ...,
    // boolean (optional)
    base64: true,
  } satisfies GetBulkSendCsvTemplateRequest;

  try {
    const data = await api.getBulkSendCsvTemplate(body);
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
| **templateIds** | `Array<string>` |  | |
| **base64** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **401** | unauthorized |  -  |
| **404** | not found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkSendDocuments

> BulkSendDocumentsResponse getBulkSendDocuments(id, limit, page)

Get Bulk Send Documents

Returns information about the Bulk Send.

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { GetBulkSendDocumentsRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
    // number (optional)
    page: 56,
  } satisfies GetBulkSendDocumentsRequest;

  try {
    const data = await api.getBulkSendDocuments(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |

### Return type

[**BulkSendDocumentsResponse**](BulkSendDocumentsResponse.md)

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
| **404** | not found |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBulkSends

> BulkSendListResponse listBulkSends(userEmail, limit, page, apiApplicationId)

List Bulk Sendings

Returns information about the Bulk Send.

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { ListBulkSendsRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // string (optional)
    userEmail: userEmail_example,
    // number (optional)
    limit: 56,
    // number (optional)
    page: 56,
    // string (optional)
    apiApplicationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListBulkSendsRequest;

  try {
    const data = await api.listBulkSends(body);
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
| **userEmail** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **apiApplicationId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**BulkSendListResponse**](BulkSendListResponse.md)

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


## validateBulkSendCsv

> BulkSendValidateCsvResponse validateBulkSendCsv(bulkSendCsvRequest)

Validate Bulk Send CSV

Validates a Bulk Send CSV file before creating the Bulk Send. It will check the structure of the CSV and the data it contains, and return any errors found.

### Example

```ts
import {
  Configuration,
  BulkSendApi,
} from '@signwell/node-sdk';
import type { ValidateBulkSendCsvRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BulkSendApi(config);

  const body = {
    // BulkSendCsvRequest
    bulkSendCsvRequest: ...,
  } satisfies ValidateBulkSendCsvRequest;

  try {
    const data = await api.validateBulkSendCsv(body);
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
| **bulkSendCsvRequest** | [BulkSendCsvRequest](BulkSendCsvRequest.md) |  | |

### Return type

[**BulkSendValidateCsvResponse**](BulkSendValidateCsvResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful |  -  |
| **401** | unauthorized |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


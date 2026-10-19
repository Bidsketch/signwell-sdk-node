# TemplateApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTemplate**](TemplateApi.md#createtemplate) | **POST** /api/v1/document_templates | Create Template |
| [**deleteTemplate**](TemplateApi.md#deletetemplate) | **DELETE** /api/v1/document_templates/{id} | Delete Template |
| [**getTemplate**](TemplateApi.md#gettemplate) | **GET** /api/v1/document_templates/{id} | Get Template |
| [**listTemplates**](TemplateApi.md#listtemplates) | **GET** /api/v1/document_templates | List Templates |
| [**updateTemplate**](TemplateApi.md#updatetemplate) | **PUT** /api/v1/document_templates/{id} | Update Template |



## createTemplate

> DocumentTemplateResponse createTemplate(documentTemplateRequest)

Create Template

Creates a new template.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from '@signwell/node-sdk';
import type { CreateTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateApi(config);

  const body = {
    // DocumentTemplateRequest
    documentTemplateRequest: ...,
  } satisfies CreateTemplateRequest;

  try {
    const data = await api.createTemplate(body);
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
| **documentTemplateRequest** | [DocumentTemplateRequest](DocumentTemplateRequest.md) |  | |

### Return type

[**DocumentTemplateResponse**](DocumentTemplateResponse.md)

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


## deleteTemplate

> deleteTemplate(id)

Delete Template

Deletes a template. Supply the unique template ID from either a Create Template request or template page URL.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from '@signwell/node-sdk';
import type { DeleteTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTemplateRequest;

  try {
    const data = await api.deleteTemplate(body);
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


## getTemplate

> DocumentTemplateResponse getTemplate(id)

Get Template

Returns a template and all associated template data. Supply the unique template ID from either a Create Template request or template page URL.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from '@signwell/node-sdk';
import type { GetTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTemplateRequest;

  try {
    const data = await api.getTemplate(body);
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

[**DocumentTemplateResponse**](DocumentTemplateResponse.md)

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


## listTemplates

> DocumentTemplateListResponse listTemplates(page, limit, query)

List Templates

Returns a paginated list of templates for the authenticated account.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from '@signwell/node-sdk';
import type { ListTemplatesRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string | Search query using SignWell key:value syntax, for example `name:NDA AND archived:false`. (optional)
    query: query_example,
  } satisfies ListTemplatesRequest;

  try {
    const data = await api.listTemplates(body);
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
| **query** | `string` | Search query using SignWell key:value syntax, for example &#x60;name:NDA AND archived:false&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**DocumentTemplateListResponse**](DocumentTemplateListResponse.md)

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


## updateTemplate

> DocumentTemplateResponse updateTemplate(id, documentTemplateUpdateRequest)

Update Template

Updates an existing template.

### Example

```ts
import {
  Configuration,
  TemplateApi,
} from '@signwell/node-sdk';
import type { UpdateTemplateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new TemplateApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DocumentTemplateUpdateRequest
    documentTemplateUpdateRequest: ...,
  } satisfies UpdateTemplateRequest;

  try {
    const data = await api.updateTemplate(body);
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
| **documentTemplateUpdateRequest** | [DocumentTemplateUpdateRequest](DocumentTemplateUpdateRequest.md) |  | |

### Return type

[**DocumentTemplateResponse**](DocumentTemplateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ok |  -  |
| **400** | bad request |  -  |
| **422** | unprocessable entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


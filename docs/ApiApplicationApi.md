# ApiApplicationApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteApiApplication**](ApiApplicationApi.md#deleteapiapplication) | **DELETE** /api/v1/api_applications/{id} | Delete API Application |
| [**getApiApplication**](ApiApplicationApi.md#getapiapplication) | **GET** /api/v1/api_applications/{id} | Get API Application |



## deleteApiApplication

> deleteApiApplication(id)

Delete API Application

Deletes an API Application from an account. Supply the unique Application ID from either the Create API Application response or the API Application edit page

### Example

```ts
import {
  Configuration,
  ApiApplicationApi,
} from '@signwell/node-sdk';
import type { DeleteApiApplicationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ApiApplicationApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteApiApplicationRequest;

  try {
    const data = await api.deleteApiApplication(body);
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


## getApiApplication

> ApiApplicationResponse getApiApplication(id)

Get API Application

Gets the details of a specific API Application within an account. Supply the unique Application ID from either the Create API Application response or the API Application edit page.

### Example

```ts
import {
  Configuration,
  ApiApplicationApi,
} from '@signwell/node-sdk';
import type { GetApiApplicationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ApiApplicationApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetApiApplicationRequest;

  try {
    const data = await api.getApiApplication(body);
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

[**ApiApplicationResponse**](ApiApplicationResponse.md)

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


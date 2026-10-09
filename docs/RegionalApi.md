# RegionalApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getNom151Certificate**](RegionalApi.md#getnom151certificate) | **GET** /api/v1/documents/{id}/nom151_certificate | MX – NOM-151 Certificate |



## getNom151Certificate

> Nom151UrlResponse getNom151Certificate(id, urlOnly, objectOnly)

MX – NOM-151 Certificate

Download NOM-151 certificate for a completed document. Returns a ZIP file, download URL, or raw certificate data based on query parameters.

### Example

```ts
import {
  Configuration,
  RegionalApi,
} from '@signwell/node-sdk';
import type { GetNom151CertificateRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new RegionalApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | If true, returns JSON with download URL instead of downloading the file (optional)
    urlOnly: true,
    // boolean (optional)
    objectOnly: true,
  } satisfies GetNom151CertificateRequest;

  try {
    const data = await api.getNom151Certificate(body);
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
| **urlOnly** | `boolean` | If true, returns JSON with download URL instead of downloading the file | [Optional] [Defaults to `false`] |
| **objectOnly** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**Nom151UrlResponse**](Nom151UrlResponse.md)

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
| **422** | unprocessable_entity |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


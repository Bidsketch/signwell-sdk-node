# WebhooksApi

All URIs are relative to *https://www.signwell.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook**](WebhooksApi.md#createwebhookoperation) | **POST** /api/v1/hooks | Create Webhook |
| [**deleteWebhook**](WebhooksApi.md#deletewebhook) | **DELETE** /api/v1/hooks/{id} | Delete Webhook |
| [**listWebhooks**](WebhooksApi.md#listwebhooks) | **GET** /api/v1/hooks | List Webhooks |



## createWebhook

> WebhookResponse createWebhook(createWebhookRequest)

Create Webhook

Register a callback URL that we will post document events to. Note: a &#x60;document_signed&#x60; event is not emitted solely because a pre-signed template signature/initials was copied as document content, and &#x60;event.related_signer&#x60; only identifies a real recipient signing action. Two additional event types cover SMS delivery outcomes: &#x60;document_sms_failed&#x60; fires when an SMS reaches a terminal failure (undelivered or failed), and &#x60;document_sms_opted_out&#x60; fires when a phone number is newly added to the SMS suppression list. Both carry &#x60;event.related_recipient&#x60; (id, name, email when present, &#x60;phone_number_masked&#x60;, and &#x60;delivery_method&#x60;) instead of &#x60;event.related_signer&#x60;, and each recipient in &#x60;data.object.recipients[]&#x60; whose delivery method includes SMS carries a nested &#x60;sms&#x60; object (&#x60;phone_number_masked&#x60;, &#x60;send_sms&#x60;, &#x60;send_sms_delay&#x60;, &#x60;delivery_status&#x60;, &#x60;message_type&#x60;, &#x60;failed&#x60;, &#x60;failed_details&#x60;). Email-only recipients keep their existing payload shape unchanged. Only webhooks registered on API-type hooks receive these two events.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signwell/node-sdk';
import type { CreateWebhookOperationRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookRequest
    createWebhookRequest: ...,
  } satisfies CreateWebhookOperationRequest;

  try {
    const data = await api.createWebhook(body);
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
| **createWebhookRequest** | [CreateWebhookRequest](CreateWebhookRequest.md) |  | |

### Return type

[**WebhookResponse**](WebhookResponse.md)

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
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhook

> deleteWebhook(id)

Delete Webhook

Deletes a registered callback URL that we are posting document events to.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signwell/node-sdk';
import type { DeleteWebhookRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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


## listWebhooks

> Array&lt;WebhookResponse&gt; listWebhooks()

List Webhooks

List all the webhooks in the account.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@signwell/node-sdk';
import type { ListWebhooksRequest } from '@signwell/node-sdk';

async function example() {
  console.log("🚀 Testing @signwell/node-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.listWebhooks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WebhookResponse&gt;**](WebhookResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ok |  -  |
| **429** | rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


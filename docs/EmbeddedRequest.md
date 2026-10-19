
# EmbeddedRequest

Optional container for embedded settings. Purely additive: requests that omit it behave exactly as before, and the existing top-level `api_application_id`, `embedded_signing` and `embedded_signing_notifications` parameters are unchanged. Not supported on template endpoints, which return a `422` if it is present.

## Properties

Name | Type
------------ | -------------
`branding` | [EmbeddedBrandingRequest](EmbeddedBrandingRequest.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



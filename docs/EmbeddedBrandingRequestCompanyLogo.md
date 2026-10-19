
# EmbeddedBrandingRequestCompanyLogo

Logo shown on this document\'s embedded pages. Supply either `file_url` or `file_base64`, never both — sending both returns a `422`. Sending `company_logo` replaces the logo outright, so whichever source you omit is cleared; sending it as `null` removes the logo. Recommended size is 300 x 60 px with a transparent background; these are recommendations, not validated. In responses this property is `\"provided\"` — the URL and the Base64 payload are never returned.

## Properties

Name | Type
------------ | -------------
`file_url` | string
`file_base64` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# EmbeddedBrandingRequest

Branding for this document\'s embedded requesting and signing experiences. Every property is optional and independent. A property you supply overrides the selected API Application; one you omit inherits from it, then from the SignWell default. `company_logo` has one extra step between those two: the account\'s Settings > Branding logo, which applies on paid plans only. The colors and the border radius have no account step — omitting one falls straight through to the SignWell default. On Update and Send Document the object is a patch: only the properties you send change, and a property sent as `null` clears your override so the value inherits again. Sending `branding` itself as `null` clears every property.

## Properties

Name | Type
------------ | -------------
`company_logo` | [EmbeddedBrandingRequestCompanyLogo](EmbeddedBrandingRequestCompanyLogo.md)
`accent_color` | string
`button_label_color` | string
`link_color` | string
`button_border_radius` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# DocumentTemplateResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`api_application_id` | string
`requester_email_address` | string
`custom_requester_name` | string
`custom_requester_email` | string
`name` | string
`subject` | string
`message` | string
`metadata` | { [key: string]: string | undefined; }
`created_at` | string
`updated_at` | string
`placeholders` | [Array&lt;DocumentTemplateResponsePlaceholdersInner&gt;](DocumentTemplateResponsePlaceholdersInner.md)
`copied_placeholders` | [Array&lt;DocumentTemplateResponseCopiedPlaceholdersInner&gt;](DocumentTemplateResponseCopiedPlaceholdersInner.md)
`status` | string
`reminders` | boolean
`archived` | boolean
`embedded_edit_url` | string
`template_link` | string
`template_id` | string
`apply_signing_order` | boolean
`redirect_url` | string
`decline_redirect_url` | string
`language` | string
`expires_in` | number
`files` | [Array&lt;FileInfo&gt;](FileInfo.md)
`fields` | Array&lt;Array&lt;DocumentResponseFieldsInnerInner&gt;&gt;
`allow_decline` | boolean
`allow_reassign` | boolean
`labels` | [Array&lt;LabelInfo&gt;](LabelInfo.md)
`checkbox_groups` | [Array&lt;CheckboxGroupInfo&gt;](CheckboxGroupInfo.md)
`conditional_rules` | [Array&lt;ConditionalRuleInfo&gt;](ConditionalRuleInfo.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



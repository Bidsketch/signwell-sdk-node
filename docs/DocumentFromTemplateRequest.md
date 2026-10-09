
# DocumentFromTemplateRequest


## Properties

Name | Type
------------ | -------------
`test_mode` | boolean
`send_sms_test_preview_email` | boolean
`template_id` | string
`template_ids` | Array&lt;string&gt;
`name` | string
`subject` | string
`message` | string
`recipients` | [Array&lt;TemplateRecipientsInner&gt;](TemplateRecipientsInner.md)
`exclude_placeholders` | Array&lt;string&gt;
`draft` | boolean
`with_signature_page` | boolean
`expires_in` | number
`reminders` | boolean
`apply_signing_order` | boolean
`api_application_id` | string
`embedded_signing` | boolean
`embedded_signing_notifications` | boolean
`embedded` | [EmbeddedRequest](EmbeddedRequest.md)
`text_tags` | boolean
`custom_requester_name` | string
`custom_requester_email` | string
`redirect_url` | string
`allow_decline` | boolean
`allow_reassign` | boolean
`decline_redirect_url` | string
`language` | string
`conditional_rules` | [Array&lt;ConditionalRuleRequest&gt;](ConditionalRuleRequest.md)
`conditional_rules_mode` | string
`metadata` | { [key: string]: string | undefined; }
`template_fields` | [Array&lt;TemplateFieldValuesInner&gt;](TemplateFieldValuesInner.md)
`files` | [Array&lt;AdditionalFilesInner&gt;](AdditionalFilesInner.md)
`fields` | Array&lt;Array&lt;AdditionalFieldsInnerInner&gt;&gt;
`attachment_requests` | [Array&lt;AttachmentRequestsInner&gt;](AttachmentRequestsInner.md)
`copied_contacts` | [Array&lt;CopiedContactsInner&gt;](CopiedContactsInner.md)
`labels` | [Array&lt;LabelRequest&gt;](LabelRequest.md)
`checkbox_groups` | [Array&lt;CheckboxGroupsInner&gt;](CheckboxGroupsInner.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



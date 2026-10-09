
# ConditionalRuleRequest

A conditional logic rule. Create requires target_id, action_type, action_field_ids and conditions; id and deleted are ignored on create. On an update (template update or document update-and-send) the rules are an incremental upsert keyed by id: send id + the fields to change to modify a rule, id + deleted: true to remove it, or omit id to add a new rule.

## Properties

Name | Type
------------ | -------------
`id` | string
`deleted` | boolean
`target_id` | string
`action_type` | string
`action_field_ids` | Array&lt;string&gt;
`conditions` | [Array&lt;ConditionalRuleRequestConditionsInner&gt;](ConditionalRuleRequestConditionsInner.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



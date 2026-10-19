/**
 * Account or workspace information
 * @export
 * @interface AccountInfoResponse
 */
export interface AccountInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponse
     */
    plan_tier: string;
    /**
     * 
     * @type {number}
     * @memberof AccountInfoResponse
     */
    active_templates?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponse
     */
    can_create_template?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponse
     */
    can_create_tracking_document?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponse
     */
    can_create_completion_document?: boolean;
    /**
     * 
     * @type {Array<AccountInfoResponseActiveUsersInner>}
     * @memberof AccountInfoResponse
     */
    active_users?: Array<AccountInfoResponseActiveUsersInner>;
    /**
     * 
     * @type {AccountInfoResponsePreferences}
     * @memberof AccountInfoResponse
     */
    preferences?: AccountInfoResponsePreferences;
}

/**
 * 
 * @export
 * @interface AccountInfoResponseActiveUsersInner
 */
export interface AccountInfoResponseActiveUsersInner {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponseActiveUsersInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponseActiveUsersInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponseActiveUsersInner
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponseActiveUsersInner
     */
    has_google_registration?: boolean;
}

/**
 * 
 * @export
 * @interface AccountInfoResponsePreferences
 */
export interface AccountInfoResponsePreferences {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponsePreferences
     */
    date_format?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountInfoResponsePreferences
     */
    days_until_links_expire?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    disable_apply_everywhere?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    disable_apply_everywhere_effective?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    disable_drawn_signatures?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    disable_typed_signatures?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    disable_uploaded_signatures?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    enable_redirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    hide_document_id_in_audit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    mute_branding?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponsePreferences
     */
    redirect_url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    separate_audit_pdf?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    separate_completed_file?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInfoResponsePreferences
     */
    enable_nom151_compliance?: boolean;
}

/**
 * 
 * @export
 * @interface AdditionalFieldsInnerInner
 */
export interface AdditionalFieldsInnerInner {
    /**
     * Horizontal value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof AdditionalFieldsInnerInner
     */
    x: number;
    /**
     * Vertical value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof AdditionalFieldsInnerInner
     */
    y: number;
    /**
     * The page number within the file. If the page does not exist within the file then the field won't be created.
     * @type {number}
     * @memberof AdditionalFieldsInnerInner
     */
    page: number;
    /**
     * Unique identifier of the recipient assigned to the field. Recipients assigned to fields will be the only ones that will see and be able to complete those fields.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    recipient_id: string;
    /**
     * 
     * @type {FieldType}
     * @memberof AdditionalFieldsInnerInner
     */
    type: FieldType;
    /**
     * Whether the field must be completed by the recipient. Defaults to `true` except for checkbox type fields.
     * @type {boolean}
     * @memberof AdditionalFieldsInnerInner
     */
    required?: boolean;
    /**
     * Text and Date fields only: label that is displayed when the field is empty.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    label?: string;
    /**
     * 
     * @type {AdditionalFieldsInnerInnerValue}
     * @memberof AdditionalFieldsInnerInner
     */
    value?: AdditionalFieldsInnerInnerValue;
    /**
     * Unique identifier of the field. Useful when needing to reference specific field values or update a document and its fields.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    api_id?: string;
    /**
     * Checkbox fields only. At least 2 checkbox fields in an array of fields must be assigned to the same recipient and grouped with selection requirements.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    name?: string;
    /**
     * 
     * @type {TextValidation}
     * @memberof AdditionalFieldsInnerInner
     */
    validation?: TextValidation;
    /**
     * Text fields with custom validation only: the regex pattern used to validate field values. Required when validation is set to custom.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    validation_regex?: string;
    /**
     * Text fields with custom validation only: the error message shown to the recipient when their input doesn't match the regex pattern. Required when validation is set to custom.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    validation_regex_error_message?: string;
    /**
     * Text fields only: whether the field width will stay fixed and text will display in multiple lines, rather than one long line. If set to `false` the field width will automatically grow horizontally to fit text on one line. Defaults to `false`.
     * @type {boolean}
     * @memberof AdditionalFieldsInnerInner
     */
    fixed_width?: boolean;
    /**
     * Date fields only: makes fields readonly and automatically populates with the date the recipient signed. Defaults to `false`.
     * @type {boolean}
     * @memberof AdditionalFieldsInnerInner
     */
    lock_sign_date?: boolean;
    /**
     * 
     * @type {DateFormat}
     * @memberof AdditionalFieldsInnerInner
     */
    date_format?: DateFormat;
    /**
     * Date fields only (text field formulas coming soon): formulas are a way to prefill fields with calculated future or past dates. Addition, subtraction, and parentheses are allowed. Valid event dates are `created_date`, `sent_date`, and `signed_date`. Valid time periods are `day`, `days`, `week`, `weeks`, `month`, and `months`. Example: `formula: 'sent_date + 10 days'`. Use with `lock_sign_date` if you'd like to make the field readonly and prevent signers from choosing a different date.
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    formula?: string;
    /**
     * Height of the field (in pixels). Maximum height varies by field type: Signature/Initials (200px), others (74px). When using text tags if the height is greater than the maximum height, the height will be set to the maximum height.
     * @type {number}
     * @memberof AdditionalFieldsInnerInner
     */
    height?: number;
    /**
     * Width of the field (in pixels). For text fields, width will auto-grow unless `fixed_width` is true.
     * @type {number}
     * @memberof AdditionalFieldsInnerInner
     */
    width?: number;
    /**
     * Array of dropdown options (for dropdown/select fields only)
     * @type {Array<DropdownOption>}
     * @memberof AdditionalFieldsInnerInner
     */
    options?: Array<DropdownOption>;
    /**
     * Default selected option (for dropdown/select fields only)
     * @type {string}
     * @memberof AdditionalFieldsInnerInner
     */
    default_option?: string;
    /**
     * Whether to allow "Other" option with text input (for dropdown/select fields only)
     * @type {boolean}
     * @memberof AdditionalFieldsInnerInner
     */
    allow_other?: boolean;
}



/**
 * @type AdditionalFieldsInnerInnerValue
 * Varies according to the field type. Text fields accept strings or numbers. Date fields accept Iso8601 date strings. CheckBoxes accept booleans. Signature and Initials fields can't be signed through API requests. Autofill text fields accept strings or numbers.
 * @export
 */
export type AdditionalFieldsInnerInnerValue = boolean | number | string;/**
 * Additional files to be appended to the document. Will not replace existing files from the template. Document files can be uploaded by specifying a file URL or base64 string. Either `file_url` or `file_base64` must be present (not both). Valid file types are: .pdf, .docx, .jpg, .png, .ppt, .xls, .pages, and .txt.
 * @export
 */
export type AdditionalFilesInner = { name: string; file_url: string; file_base64?: never } | { name: string; file_base64: string; file_url?: never };

/**
 * API application details
 * @export
 * @interface ApiApplicationResponse
 */
export interface ApiApplicationResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponse
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiApplicationResponse
     */
    callback_urls?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponse
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponse
     */
    updated_at?: string;
    /**
     * 
     * @type {ApiApplicationResponseOwner}
     * @memberof ApiApplicationResponse
     */
    owner?: ApiApplicationResponseOwner;
    /**
     * 
     * @type {ApiApplicationResponsePreferences}
     * @memberof ApiApplicationResponse
     */
    preferences?: ApiApplicationResponsePreferences;
}

/**
 * 
 * @export
 * @interface ApiApplicationResponseOwner
 */
export interface ApiApplicationResponseOwner {
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponseOwner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponseOwner
     */
    account_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponseOwner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponseOwner
     */
    email: string;
}

/**
 * 
 * @export
 * @interface ApiApplicationResponsePreferences
 */
export interface ApiApplicationResponsePreferences {
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponsePreferences
     */
    button_text_color?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiApplicationResponsePreferences
     */
    buttons_border_radius?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponsePreferences
     */
    custom_logo_file?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponsePreferences
     */
    link_text_color?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApplicationResponsePreferences
     */
    primary_color?: string | null;
}

/**
 * Attachment request information
 * @export
 * @interface AttachmentRequestInfo
 */
export interface AttachmentRequestInfo {
    /**
     * Name of the attachment request
     * @type {string}
     * @memberof AttachmentRequestInfo
     */
    name: string;
    /**
     * URL of the uploaded attachment (when available)
     * @type {string}
     * @memberof AttachmentRequestInfo
     */
    url?: string;
    /**
     * Whether the attachment is required
     * @type {boolean}
     * @memberof AttachmentRequestInfo
     */
    required: boolean;
}

/**
 * 
 * @export
 * @interface AttachmentRequestsInner
 */
export interface AttachmentRequestsInner {
    /**
     * Name of the requested attachment.
     * @type {string}
     * @memberof AttachmentRequestsInner
     */
    name: string;
    /**
     * Unique identifier of the recipient that will view the attachment request.
     * @type {string}
     * @memberof AttachmentRequestsInner
     */
    recipient_id: string;
    /**
     * Whether the recipient will need to upload the attachment to successfully complete/sign the document. Defaults to `true`.
     * @type {boolean}
     * @memberof AttachmentRequestsInner
     */
    required?: boolean;
}

/**
 * Bulk send creation response
 * @export
 * @interface BulkSendCreateResponse
 */
export interface BulkSendCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof BulkSendCreateResponse
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkSendCreateResponse
     */
    template_ids: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BulkSendCreateResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendCreateResponse
     */
    documents_count: number;
    /**
     * 
     * @type {string}
     * @memberof BulkSendCreateResponse
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendCreateResponse
     */
    user_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendCreateResponse
     */
    status: string;
}

/**
 * 
 * @export
 * @interface BulkSendCsvRequest
 */
export interface BulkSendCsvRequest {
    /**
     * Specify one or more templates to generate a single blank CSV file that will contain available columns for your recipient data. The template_ids[] parameter is an array of template IDs (e.g.,`/?template_ids[]=5a67dbd7-928a-4ea0-a7e2-e476a0eb045f&template_ids[]=d7315111-c671-4b15-8354-c9a19bbaefa0`). Each ID should be a separate parameter in the query string.
     * @type {Array<string>}
     * @memberof BulkSendCsvRequest
     */
    template_ids: Array<string>;
    /**
     * A RFC 4648 base64 string of the template CSV file to be validated. While 21 CFR Part 11 is enabled, every recipient needs a name: the CSV must carry a name column next to each placeholder email column (for example `signer_name` alongside `signer_email`), and each row must fill that name in wherever it carries the matching email, otherwise it returns a 422. A row that leaves both the email and the name blank sends nothing to that placeholder, so no name is needed there.
     * @type {string}
     * @memberof BulkSendCsvRequest
     */
    bulk_send_csv: string;
}

/**
 * Base64-encoded CSV template
 * @export
 * @interface BulkSendCsvTemplateResponse
 */
export interface BulkSendCsvTemplateResponse {
    /**
     * Base64-encoded CSV content
     * @type {string}
     * @memberof BulkSendCsvTemplateResponse
     */
    data: string;
}

/**
 * Paginated list of documents in a bulk send
 * @export
 * @interface BulkSendDocumentsResponse
 */
export interface BulkSendDocumentsResponse {
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    user_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendDocumentsResponse
     */
    status?: string;
    /**
     * 
     * @type {Array<DocumentResponse>}
     * @memberof BulkSendDocumentsResponse
     */
    documents: Array<DocumentResponse>;
    /**
     * 
     * @type {number}
     * @memberof BulkSendDocumentsResponse
     */
    current_page: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendDocumentsResponse
     */
    next_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendDocumentsResponse
     */
    previous_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendDocumentsResponse
     */
    total_count: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendDocumentsResponse
     */
    total_pages: number;
}

/**
 * Bulk send summary in list responses
 * @export
 * @interface BulkSendListItem
 */
export interface BulkSendListItem {
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListItem
     */
    documents_count: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListItem
     */
    documents_completed: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListItem
     */
    documents_not_completed: number;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    user_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListItem
     */
    status: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkSendListItem
     */
    template_ids: Array<string>;
}

/**
 * List of bulk sends with pagination
 * @export
 * @interface BulkSendListResponse
 */
export interface BulkSendListResponse {
    /**
     * 
     * @type {Array<BulkSendListItem>}
     * @memberof BulkSendListResponse
     */
    bulk_sends: Array<BulkSendListItem>;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListResponse
     */
    current_page: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListResponse
     */
    next_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListResponse
     */
    previous_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListResponse
     */
    total_count: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListResponse
     */
    total_pages: number;
}

/**
 * Bulk send details
 * @export
 * @interface BulkSendResponse
 */
export interface BulkSendResponse {
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendResponse
     */
    documents_count: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendResponse
     */
    documents_completed?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendResponse
     */
    documents_not_completed?: number;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    user_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponse
     */
    status: string;
    /**
     * 
     * @type {Array<BulkSendResponseTemplatesInner>}
     * @memberof BulkSendResponse
     */
    templates?: Array<BulkSendResponseTemplatesInner>;
}

/**
 * 
 * @export
 * @interface BulkSendResponseTemplatesInner
 */
export interface BulkSendResponseTemplatesInner {
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponseTemplatesInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendResponseTemplatesInner
     */
    name: string;
}

/**
 * Validated bulk send CSV response with defaults applied
 * @export
 * @interface BulkSendValidateCsvResponse
 */
export interface BulkSendValidateCsvResponse {
    /**
     * Base64-encoded CSV content
     * @type {string}
     * @memberof BulkSendValidateCsvResponse
     */
    bulk_send_csv: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkSendValidateCsvResponse
     */
    template_ids: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BulkSendValidateCsvResponse
     */
    skip_row_errors?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BulkSendValidateCsvResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendValidateCsvResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendValidateCsvResponse
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkSendValidateCsvResponse
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BulkSendValidateCsvResponse
     */
    apply_signing_order?: boolean;
}

/**
 * Checkbox group configuration
 * @export
 * @interface CheckboxGroupInfo
 */
export interface CheckboxGroupInfo {
    /**
     * Checkbox group ID
     * @type {string}
     * @memberof CheckboxGroupInfo
     */
    id: string;
    /**
     * Name of the checkbox group
     * @type {string}
     * @memberof CheckboxGroupInfo
     */
    group_name?: string | null;
    /**
     * Recipient ID associated with the group
     * @type {string}
     * @memberof CheckboxGroupInfo
     */
    recipient_id?: string | null;
    /**
     * IDs of checkboxes in this group
     * @type {Array<string>}
     * @memberof CheckboxGroupInfo
     */
    checkbox_ids: Array<string>;
    /**
     * 
     * @type {CheckboxValidation}
     * @memberof CheckboxGroupInfo
     */
    validation?: CheckboxValidation;
    /**
     * Whether at least one checkbox must be checked
     * @type {boolean}
     * @memberof CheckboxGroupInfo
     */
    required: boolean;
    /**
     * Minimum number of checkboxes to check
     * @type {number}
     * @memberof CheckboxGroupInfo
     */
    min_value?: number;
    /**
     * Maximum number of checkboxes to check
     * @type {number}
     * @memberof CheckboxGroupInfo
     */
    max_value?: number;
    /**
     * Exact number of checkboxes that must be checked
     * @type {number}
     * @memberof CheckboxGroupInfo
     */
    exact_value?: number;
}



/**
 * 
 * @export
 * @interface CheckboxGroupsInner
 */
export interface CheckboxGroupsInner {
    /**
     * A unique identifier for the checkbox group.
     * @type {string}
     * @memberof CheckboxGroupsInner
     */
    group_name: string;
    /**
     * The recipient ID associated with the checkbox group.
     * @type {string}
     * @memberof CheckboxGroupsInner
     */
    recipient_id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CheckboxGroupsInner
     */
    checkbox_ids: Array<string>;
    /**
     * 
     * @type {CheckboxValidation}
     * @memberof CheckboxGroupsInner
     */
    validation?: CheckboxValidation;
    /**
     * Whether the group must be completed by the recipient. Defaults to false.
     * @type {boolean}
     * @memberof CheckboxGroupsInner
     */
    required?: boolean;
    /**
     * The minimum number of checkboxes that must be checked in the group. (Only for validation: minimum and range)
     * @type {number}
     * @memberof CheckboxGroupsInner
     */
    min_value?: number;
    /**
     * The maximum number of checkboxes that can be checked in the group. (Only for validation: maximum and range)
     * @type {number}
     * @memberof CheckboxGroupsInner
     */
    max_value?: number;
    /**
     * The exact number of checkboxes that must be checked in the group. (Only for validation: exact)
     * @type {number}
     * @memberof CheckboxGroupsInner
     */
    exact_value?: number;
}



/**
 * Validation rule for checkbox groups
 * @export
 * @enum {string}
 */
export enum CheckboxValidation {
    Minimum = 'minimum',
    Maximum = 'maximum',
    Range = 'range',
    Exact = 'exact',
    UnknownDefaultOpenApi = '11184809'
}
/**
 * @type CompletedPdfResponse
 * 
 * @export
 */
export type CompletedPdfResponse = Blob | CompletedPdfUrlResponse;/**
 * JSON response containing the URL to the completed PDF file (returned when url_only=true)
 * @export
 * @interface CompletedPdfUrlResponse
 */
export interface CompletedPdfUrlResponse {
    /**
     * URL to download the completed document
     * @type {string}
     * @memberof CompletedPdfUrlResponse
     */
    file_url: string;
}

/**
 * Audit record of a signer-side decision about a CL rule that fired against a completed field.
 * @export
 * @interface ConditionalLogicDecisionInfo
 */
export interface ConditionalLogicDecisionInfo {
    /**
     * External ID of the conditional rule that fired
     * @type {string}
     * @memberof ConditionalLogicDecisionInfo
     */
    rule_id: string;
    /**
     * api_id of the field the decision applies to
     * @type {string}
     * @memberof ConditionalLogicDecisionInfo
     */
    field_api_id: string;
    /**
     * Whether the signer kept the existing signature or the value was cleared
     * @type {string}
     * @memberof ConditionalLogicDecisionInfo
     */
    decision_type: ConditionalLogicDecisionInfoDecisionTypeEnum;
    /**
     * When the decision was recorded
     * @type {string}
     * @memberof ConditionalLogicDecisionInfo
     */
    decided_at: string;
    /**
     * Human-readable summary of the decision
     * @type {string}
     * @memberof ConditionalLogicDecisionInfo
     */
    description?: string;
}


/**
* @export
* @enum {string}
*/
export enum ConditionalLogicDecisionInfoDecisionTypeEnum {
    KeptSignature = 'kept_signature',
    ClearedValue = 'cleared_value',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Conditional rule configuration
 * @export
 * @interface ConditionalRuleInfo
 */
export interface ConditionalRuleInfo {
    /**
     * Conditional rule ID
     * @type {string}
     * @memberof ConditionalRuleInfo
     */
    id: string;
    /**
     * api_id of the field that owns the rule, or the external_id of a checkbox group when the rule is owned by a group (groups have no api_id)
     * @type {string}
     * @memberof ConditionalRuleInfo
     */
    target_id: string;
    /**
     * Action applied to action_field_ids when the conditions are met
     * @type {string}
     * @memberof ConditionalRuleInfo
     */
    action_type: ConditionalRuleInfoActionTypeEnum;
    /**
     * api_ids of fields the rule affects when triggered
     * @type {Array<string>}
     * @memberof ConditionalRuleInfo
     */
    action_field_ids?: Array<string>;
    /**
     * 
     * @type {Array<ConditionalRuleInfoConditionsInner>}
     * @memberof ConditionalRuleInfo
     */
    conditions?: Array<ConditionalRuleInfoConditionsInner>;
}


/**
* @export
* @enum {string}
*/
export enum ConditionalRuleInfoActionTypeEnum {
    Show = 'show',
    Hide = 'hide',
    Require = 'require',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface ConditionalRuleInfoConditionsInner
 */
export interface ConditionalRuleInfoConditionsInner {
    /**
     * How field_api_ids combine within this condition
     * @type {string}
     * @memberof ConditionalRuleInfoConditionsInner
     */
    condition_type?: ConditionalRuleInfoConditionsInnerConditionTypeEnum;
    /**
     * Field state that satisfies this condition
     * @type {string}
     * @memberof ConditionalRuleInfoConditionsInner
     */
    status?: ConditionalRuleInfoConditionsInnerStatusEnum;
    /**
     * How this condition joins with the next one in the rule
     * @type {string}
     * @memberof ConditionalRuleInfoConditionsInner
     */
    join_operator?: ConditionalRuleInfoConditionsInnerJoinOperatorEnum;
    /**
     * api_ids of fields evaluated by this condition
     * @type {Array<string>}
     * @memberof ConditionalRuleInfoConditionsInner
     */
    field_api_ids?: Array<string>;
    /**
     * Order of this condition within the rule
     * @type {number}
     * @memberof ConditionalRuleInfoConditionsInner
     */
    position?: number;
}


/**
* @export
* @enum {string}
*/
export enum ConditionalRuleInfoConditionsInnerConditionTypeEnum {
    AnyOf = 'any_of',
    AllOf = 'all_of',
    NoneOf = 'none_of',
    NotAllOf = 'not_all_of',
    UnknownDefaultOpenApi = '11184809'
}
/**
* @export
* @enum {string}
*/
export enum ConditionalRuleInfoConditionsInnerStatusEnum {
    Completed = 'completed',
    NotCompleted = 'not_completed',
    UnknownDefaultOpenApi = '11184809'
}
/**
* @export
* @enum {string}
*/
export enum ConditionalRuleInfoConditionsInnerJoinOperatorEnum {
    AndOperator = 'and_operator',
    OrOperator = 'or_operator',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * A conditional logic rule. Create requires target_id, action_type, action_field_ids and conditions; id and deleted are ignored on create. On an update (template update or document update-and-send) the rules are an incremental upsert keyed by id: send id + the fields to change to modify a rule, id + deleted: true to remove it, or omit id to add a new rule.
 * @export
 * @interface ConditionalRuleRequest
 */
export interface ConditionalRuleRequest {
    /**
     * The rule's persistent ID. Ignored on create (every rule is new). On an update (template update or document update-and-send) include it to modify an existing rule, or pair it with `deleted: true` to remove the rule; omit it to add a new rule.
     * @type {string}
     * @memberof ConditionalRuleRequest
     */
    id?: string;
    /**
     * Only meaningful on an update (template update or document update-and-send): set to true together with the rule's `id` to remove that rule. Ignored on create — there is no existing rule to delete.
     * @type {boolean}
     * @memberof ConditionalRuleRequest
     */
    deleted?: boolean;
    /**
     * api_id of the field that owns the rule, or the external_id of a checkbox group when the rule is owned by a group (groups have no api_id). Cannot also appear in action_field_ids (self-reference is forbidden).
     * @type {string}
     * @memberof ConditionalRuleRequest
     */
    target_id?: string;
    /**
     * Action applied to action_field_ids when the conditions are met: `show`, `hide`, or `require`.
     * @type {string}
     * @memberof ConditionalRuleRequest
     */
    action_type?: ConditionalRuleRequestActionTypeEnum;
    /**
     * api_ids of the fields the action applies to. List a checkbox group's member api_ids to target the whole group.
     * @type {Array<string>}
     * @memberof ConditionalRuleRequest
     */
    action_field_ids?: Array<string>;
    /**
     * The conditions that trigger the rule. At least 1, at most 5.
     * @type {Array<ConditionalRuleRequestConditionsInner>}
     * @memberof ConditionalRuleRequest
     */
    conditions?: Array<ConditionalRuleRequestConditionsInner>;
}


/**
* @export
* @enum {string}
*/
export enum ConditionalRuleRequestActionTypeEnum {
    Show = 'show',
    Hide = 'hide',
    Require = 'require',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface ConditionalRuleRequestConditionsInner
 */
export interface ConditionalRuleRequestConditionsInner {
    /**
     * How the field_api_ids combine within a condition: `any_of`, `all_of`, `none_of`, or `not_all_of`.
     * @type {string}
     * @memberof ConditionalRuleRequestConditionsInner
     */
    condition_type: ConditionalRuleRequestConditionsInnerConditionTypeEnum;
    /**
     * The field state the condition tests for: `completed` or `not_completed`.
     * @type {string}
     * @memberof ConditionalRuleRequestConditionsInner
     */
    status: ConditionalRuleRequestConditionsInnerStatusEnum;
    /**
     * How this condition joins the next one in the rule: `and_operator` or `or_operator`. The first condition's value is ignored.
     * @type {string}
     * @memberof ConditionalRuleRequestConditionsInner
     */
    join_operator?: ConditionalRuleRequestConditionsInnerJoinOperatorEnum;
    /**
     * api_ids of the trigger fields the condition watches.
     * @type {Array<string>}
     * @memberof ConditionalRuleRequestConditionsInner
     */
    field_api_ids: Array<string>;
    /**
     * 1-indexed order of the condition within the rule.
     * @type {number}
     * @memberof ConditionalRuleRequestConditionsInner
     */
    position?: number;
}


/**
* @export
* @enum {string}
*/
export enum ConditionalRuleRequestConditionsInnerConditionTypeEnum {
    AnyOf = 'any_of',
    AllOf = 'all_of',
    NoneOf = 'none_of',
    NotAllOf = 'not_all_of',
    UnknownDefaultOpenApi = '11184809'
}
/**
* @export
* @enum {string}
*/
export enum ConditionalRuleRequestConditionsInnerStatusEnum {
    Completed = 'completed',
    NotCompleted = 'not_completed',
    UnknownDefaultOpenApi = '11184809'
}
/**
* @export
* @enum {string}
*/
export enum ConditionalRuleRequestConditionsInnerJoinOperatorEnum {
    AndOperator = 'and_operator',
    OrOperator = 'or_operator',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Copied contact information
 * @export
 * @interface CopiedContactInfo
 */
export interface CopiedContactInfo {
    /**
     * Contact ID
     * @type {string}
     * @memberof CopiedContactInfo
     */
    id?: string;
    /**
     * Contact name
     * @type {string}
     * @memberof CopiedContactInfo
     */
    name?: string;
    /**
     * Contact email
     * @type {string}
     * @memberof CopiedContactInfo
     */
    email: string;
}

/**
 * 
 * @export
 * @interface CopiedContactsInner
 */
export interface CopiedContactsInner {
    /**
     * Name of the copied contact.
     * @type {string}
     * @memberof CopiedContactsInner
     */
    name?: string;
    /**
     * Email for the copied contact.
     * @type {string}
     * @memberof CopiedContactsInner
     */
    email: string;
}

/**
 * 
 * @export
 * @interface CopiedPlaceholdersInner
 */
export interface CopiedPlaceholdersInner {
    /**
     * Name of the placeholder.
     * @type {string}
     * @memberof CopiedPlaceholdersInner
     */
    name: string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the name. Every recipient on a 21 CFR Part 11 document needs a name, so leaving it unset means the name has to be supplied when the document is created.
     * @type {string}
     * @memberof CopiedPlaceholdersInner
     */
    preassigned_recipient_name?: string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the email.
     * @type {string}
     * @memberof CopiedPlaceholdersInner
     */
    preassigned_recipient_email?: string;
}

/**
 * 
 * @export
 * @interface CreateBulkSendRequest
 */
export interface CreateBulkSendRequest {
    /**
     * Unique identifiers for a list of templates. A template that carries a pre-applied signature or initials field cannot be used while 21 CFR Part 11 is enabled, which requires every signature to be signed by the recipient: it returns a 422.
     * @type {Array<string>}
     * @memberof CreateBulkSendRequest
     */
    template_ids: Array<string>;
    /**
     * A RFC 4648 base64 string of the template CSV file to be validated. While 21 CFR Part 11 is enabled, every recipient needs a name: the CSV must carry a name column next to each placeholder email column (for example `signer_name` alongside `signer_email`), and each row must fill that name in wherever it carries the matching email, otherwise it returns a 422. A row that leaves both the email and the name blank sends nothing to that placeholder, so no name is needed there.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    bulk_send_csv: string;
    /**
     * Whether to skip errors in the rows. Defaults to `false`.
     * @type {boolean}
     * @memberof CreateBulkSendRequest
     */
    skip_row_errors?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    api_application_id?: string;
    /**
     * The name of the Bulk Send. Will be used as the document name for each of the documents.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    message?: string;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof CreateBulkSendRequest
     */
    apply_signing_order?: boolean;
    /**
     * Sets the custom requester name for the document. When set, this is the name used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    custom_requester_name?: string;
    /**
     * Sets the custom requester email for the document. When set, this is the email used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof CreateBulkSendRequest
     */
    custom_requester_email?: string;
}

/**
 * 
 * @export
 * @interface CreateWebhookRequest
 */
export interface CreateWebhookRequest {
    /**
     * URL that we will post document events to.
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    callback_url: string;
    /**
     * Unique identifier for the API Application.
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    api_application_id?: string;
}

/**
 * Date format for date fields. Valid values: MM/DD/YYYY, DD/MM/YYYY, YYYY/MM/DD, Month DD, YYYY, MM/DD/YYYY hh:mm:ss a. Default: MM/DD/YYYY
 * @export
 * @enum {string}
 */
export enum DateFormat {
    MmDdYyyy = 'MM/DD/YYYY',
    DdMmYyyy = 'DD/MM/YYYY',
    YyyyMmDd = 'YYYY/MM/DD',
    MonthDdYyyy = 'Month DD, YYYY',
    MmDdYyyyHhMmSsA = 'MM/DD/YYYY hh:mm:ss a',
    UnknownDefaultOpenApi = '11184809'
}
/**
 * Detailed option object
 * @export
 * @interface DetailedOption
 */
export interface DetailedOption {
    /**
     * Option display name
     * @type {string}
     * @memberof DetailedOption
     */
    name: string;
    /**
     * Unique identifier for the option
     * @type {string}
     * @memberof DetailedOption
     */
    api_id?: string;
    /**
     * Whether this is the special "Other" option
     * @type {boolean}
     * @memberof DetailedOption
     */
    is_other?: boolean;
}

/**
 * 
 * @export
 * @interface DocumentFromTemplateRequest
 */
export interface DocumentFromTemplateRequestBase {
    /**
     * Set to `true` to enable Test Mode. Documents created with Test Mode do not count towards API billing and are not legally binding. Defaults to `false`
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    test_mode?: boolean;
    /**
     * Only applies when `test_mode` is `true`. When `true`, and the document has an SMS-only recipient, sends the document owner a test-mode preview email (with a masked phone number) instead of the regular SMS sender-copy email. No SMS is sent and no credits are used, in test mode or otherwise. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    send_sms_test_preview_email?: boolean;
    /**
     * Use when you have to create a document from a single template. Either :template_id or :template_ids must be present in the request, not both.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    template_id?: string;
    /**
     * Use when you have to create a document from multiple templates. Either :template_id or :template_ids must be present in the request, not both.
     * @type {Array<string>}
     * @memberof DocumentFromTemplateRequest
     */
    template_ids?: Array<string>;
    /**
     * The name of the document.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    message?: string;
    /**
     * Document recipients are people that must complete and/or sign a document. Recipients of the document must be assigned to a placeholder of the template. Recipients will inherit all placeholder fields and settings.
     * @type {Array<TemplateRecipientsInner>}
     * @memberof DocumentFromTemplateRequest
     */
    recipients: Array<TemplateRecipientsInner>;
    /**
     * Exclude one or more template placeholders when creating a document from a template. Any excluded placeholders (and their associated recipients and fields) will not be included on the created document. Values must match placeholder names on the template. You can't exclude all placeholders (at least one recipient must remain).
     * @type {Array<string>}
     * @memberof DocumentFromTemplateRequest
     */
    exclude_placeholders?: Array<string>;
    /**
     * Whether the document can still be updated before sending a signature request. If set to `false` the document is sent for signing as part of this request. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    draft?: boolean;
    /**
     * When set to `true` the document will have a signature page added to the end, and all signers will be required to add their signature on that page.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    with_signature_page?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentFromTemplateRequest
     */
    expires_in?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    reminders?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    apply_signing_order?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    api_application_id?: string;
    /**
     * When set to `true` it enables embedded signing in your website/web application. Embedded functionality works with an iFrame and email authentication is disabled. :embedded_signinig defaults to `false`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    embedded_signing?: boolean;
    /**
     * On embedding signing, document owners (and CC'd contacts) do not get a notification email when documents have been completed. Setting this param to `true` will send out those final completed notifications. Default is `false`
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    embedded_signing_notifications?: boolean;
    /**
     * 
     * @type {EmbeddedRequest}
     * @memberof DocumentFromTemplateRequest
     */
    embedded?: EmbeddedRequest;
    /**
     * An alternative way (if you can’t use the recommended way) of placing fields in specific locations of your document by using special text tags. Useful when changing the content of your files changes the location of fields. See API documentation for “Text Tags” for details. Defaults to false.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    text_tags?: boolean;
    /**
     * Sets the custom requester name for the document. When set, this is the name used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    custom_requester_name?: string;
    /**
     * Sets the custom requester email for the document. When set, this is the email used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    custom_requester_email?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    redirect_url?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    allow_decline?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else. Unavailable on 21 CFR Part 11 documents: omit it and reassignment stays off, while sending `true` returns a 422.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    allow_reassign?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    decline_redirect_url?: string;
    /**
     * Sets the language for all recipients on the document and updates all recipient side interactions including the document email and the document itself. Accepted languages: English, Français, Español, Deutsch, Polski, Português, Dansk, Nederlands, Italiano, Русский, Svenska, العربية, Ελληνικά, Türkçe, Slovenčina. Defaults to English. Language should be sent in ISO 639-1 format: en, fr, es, de, pl, pt, da, nl, it, ru, sv, ar, el, tr, sk.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    language?: string;
    /**
     * Conditional logic rules that show, hide, or require fields based on what a signer does to other fields. Every identifier is a field api_id. At most 10 rules per document or template.
     * @type {Array<ConditionalRuleRequest>}
     * @memberof DocumentFromTemplateRequest
     */
    conditional_rules?: Array<ConditionalRuleRequest>;
    /**
     * When creating a document from a template, controls how the conditional_rules in the request reconcile with the template's inherited rules: `replace` (drop inherited, use the body's rules), `append` (keep inherited, add the body's rules), or `none` (clear all rules). Required when sending conditional_rules that should not simply inherit.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    conditional_rules_mode?: DocumentFromTemplateRequestConditionalRulesModeEnum;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentFromTemplateRequest
     */
    metadata?: { [key: string]: string | undefined; };
    /**
     * Fields of your template(s) that you can prepopulate with values. Signature and Initials fields cannot be signed through the API.
     * @type {Array<TemplateFieldValuesInner>}
     * @memberof DocumentFromTemplateRequest
     */
    template_fields?: Array<TemplateFieldValuesInner>;
    /**
     * 
     * @type {Array<AdditionalFilesInner>}
     * @memberof DocumentFromTemplateRequest
     */
    files?: Array<AdditionalFilesInner>;
    /**
     * Fields to be added to any appended files (not existing files). Document fields placed on a document for collecting data or signatures from recipients. Field data should be sent as a 2-dimensional JSON array. One array of fields is needed for each file in the files array. An array of fields can be empty if you have a file that does not contain any fields.
     * @type {Array<Array<AdditionalFieldsInnerInner>>}
     * @memberof DocumentFromTemplateRequest
     */
    fields?: Array<Array<AdditionalFieldsInnerInner>>;
    /**
     * Attachments that a recipient must upload to complete the signing process. Attachment requests are shown after all document fields have been completed.
     * @type {Array<AttachmentRequestsInner>}
     * @memberof DocumentFromTemplateRequest
     */
    attachment_requests?: Array<AttachmentRequestsInner>;
    /**
     * Copied contacts are emailed the final document once it has been completed by all recipients.
     * @type {Array<CopiedContactsInner>}
     * @memberof DocumentFromTemplateRequest
     */
    copied_contacts?: Array<CopiedContactsInner>;
    /**
     * Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell. A document can have multiple labels. Updating labels on a document will replace any existing labels for that document.
     * @type {Array<LabelRequest>}
     * @memberof DocumentFromTemplateRequest
     */
    labels?: Array<LabelRequest>;
    /**
     * Checkbox fields that are placed on a document can be grouped with selection requirements. At least 2 checkbox fields in an array of fields must be assigned to the same recipient.
     * @type {Array<CheckboxGroupsInner>}
     * @memberof DocumentFromTemplateRequest
     */
    checkbox_groups?: Array<CheckboxGroupsInner>;
}

export type DocumentFromTemplateRequest = Omit<DocumentFromTemplateRequestBase, 'template_id' | 'template_ids'> & ({ template_id: string; template_ids?: never } | { template_ids: Array<string>; template_id?: never });


/**
* @export
* @enum {string}
*/
export enum DocumentFromTemplateRequestConditionalRulesModeEnum {
    Replace = 'replace',
    Append = 'append',
    None = 'none',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface DocumentFromTemplateResponse
 */
export interface DocumentFromTemplateResponse {
    /**
     * Whether 21 CFR Part 11 controls apply to this document. Read-only: the value is taken from the workspace setting when the document is created and never changes afterwards.
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    cfr_part11?: boolean;
    /**
     * The signing mode of a 21 CFR Part 11 document: streamlined (one final authentication) or per_signature (authentication at every signature and initials field). Null when Part 11 does not apply.
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    cfr_part11_signing_mode?: DocumentFromTemplateResponseCfrPart11SigningModeEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    test_mode: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    template_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentFromTemplateResponse
     */
    template_ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    requester_email_address?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    custom_requester_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    custom_requester_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentFromTemplateResponse
     */
    metadata?: { [key: string]: string | undefined; } | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    updated_at?: string;
    /**
     * 
     * @type {Array<DocumentFromTemplateResponseRecipientsInner>}
     * @memberof DocumentFromTemplateResponse
     */
    recipients?: Array<DocumentFromTemplateResponseRecipientsInner>;
    /**
     * Possible values: Draft, Created, Sending, Sent, Pending, Viewed, Completed, Manually completed, Declined, Canceled, Bounced, Blocked, Error, Expired
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    reminders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    archived?: boolean;
    /**
     * 
     * @type {EmbeddedBranding}
     * @memberof DocumentFromTemplateResponse
     */
    embedded?: EmbeddedBranding | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    embedded_signing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    embedded_edit_url?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    embedded_preview_url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    apply_signing_order?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    decline_redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    language?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponse
     */
    expires_in?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    decline_message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponse
     */
    error_message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    embedded_signing_notifications?: boolean;
    /**
     * 
     * @type {Array<DocumentResponseAttachmentRequestsInner>}
     * @memberof DocumentFromTemplateResponse
     */
    attachment_requests?: Array<DocumentResponseAttachmentRequestsInner>;
    /**
     * 
     * @type {Array<FileInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    files?: Array<FileInfo>;
    /**
     * 
     * @type {Array<CopiedContactInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    copied_contacts?: Array<CopiedContactInfo>;
    /**
     * 
     * @type {Array<Array<DocumentFromTemplateResponseFieldsInnerInner>>}
     * @memberof DocumentFromTemplateResponse
     */
    fields?: Array<Array<DocumentFromTemplateResponseFieldsInnerInner>>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    allow_decline?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponse
     */
    allow_reassign?: boolean | null;
    /**
     * 
     * @type {Array<LabelInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    labels?: Array<LabelInfo>;
    /**
     * 
     * @type {Array<CheckboxGroupInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    checkbox_groups?: Array<CheckboxGroupInfo>;
    /**
     * 
     * @type {Array<ConditionalRuleInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    conditional_rules?: Array<ConditionalRuleInfo>;
    /**
     * 
     * @type {Array<ConditionalLogicDecisionInfo>}
     * @memberof DocumentFromTemplateResponse
     */
    conditional_logic_decisions?: Array<ConditionalLogicDecisionInfo>;
}


/**
* @export
* @enum {string}
*/
export enum DocumentFromTemplateResponseCfrPart11SigningModeEnum {
    Streamlined = 'streamlined',
    PerSignature = 'per_signature',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface DocumentFromTemplateResponseFieldsInnerInner
 */
export interface DocumentFromTemplateResponseFieldsInnerInner {
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    y: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    page: number;
    /**
     * 
     * @type {DocumentFromTemplateResponseFieldsInnerInnerRecipient}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    recipient?: DocumentFromTemplateResponseFieldsInnerInnerRecipient;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    api_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    name?: string | null;
    /**
     * 
     * @type {DateFormat}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    date_format?: DateFormat;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    fixed_width?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    formula?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    lock_sign_date?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    required?: boolean;
    /**
     * 
     * @type {FieldType}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    type?: FieldType;
    /**
     * 
     * @type {TextValidation}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    validation?: TextValidation;
    /**
     * Text fields with custom validation only: the regex pattern used to validate field values. Required when validation is set to custom.
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    validation_regex?: string;
    /**
     * Text fields with custom validation only: the error message shown to the recipient when their input doesn't match the regex pattern. Required when validation is set to custom.
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    validation_regex_error_message?: string;
    /**
     * 
     * @type {DocumentResponseFieldsInnerInnerValue}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    value?: DocumentResponseFieldsInnerInnerValue | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    height?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    width?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    recipient_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    signing_elements_group_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    placeholder_name?: string;
    /**
     * Dropdown options (for dropdown/select fields)
     * @type {Array<DocumentResponseFieldsInnerInnerOptionsInner>}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    options?: Array<DocumentResponseFieldsInnerInnerOptionsInner>;
    /**
     * Default selected option
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    default_option?: string;
    /**
     * Whether "Other" option is allowed
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseFieldsInnerInner
     */
    allow_other?: boolean;
}



/**
 * 
 * @export
 * @interface DocumentFromTemplateResponseFieldsInnerInnerRecipient
 */
export interface DocumentFromTemplateResponseFieldsInnerInnerRecipient {
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInnerRecipient
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInnerRecipient
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseFieldsInnerInnerRecipient
     */
    role?: string;
}

/**
 * 
 * @export
 * @interface DocumentFromTemplateResponseRecipientsInner
 */
export interface DocumentFromTemplateResponseRecipientsInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    subject?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    send_email?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    send_email_delay?: number | null;
    /**
     * How the recipient is notified: email (default), sms, or email_and_sms.
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    delivery_method?: DocumentFromTemplateResponseRecipientsInnerDeliveryMethodEnum;
    /**
     * 
     * @type {DocumentResponseRecipientsInnerSms}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    sms?: DocumentResponseRecipientsInnerSms;
    /**
     * 
     * @type {number}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    signing_order?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    signing_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    embedded_signing_url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    bounced?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    bounced_details?: string | null;
    /**
     * 
     * @type {Array<AttachmentRequestInfo>}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    attachment_requests?: Array<AttachmentRequestInfo>;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    passcode?: string | null;
    /**
     * 
     * @type {DocumentResponseRecipientsInnerPasscodeDelivery}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    passcode_delivery?: DocumentResponseRecipientsInnerPasscodeDelivery;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFromTemplateResponseRecipientsInner
     */
    placeholder_name?: string;
}


/**
* @export
* @enum {string}
*/
export enum DocumentFromTemplateResponseRecipientsInnerDeliveryMethodEnum {
    Email = 'email',
    Sms = 'sms',
    EmailAndSms = 'email_and_sms',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * List of documents with pagination
 * @export
 * @interface DocumentListResponse
 */
export interface DocumentListResponse {
    /**
     * 
     * @type {Array<DocumentResponse>}
     * @memberof DocumentListResponse
     */
    documents: Array<DocumentResponse>;
    /**
     * 
     * @type {number}
     * @memberof DocumentListResponse
     */
    current_page: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListResponse
     */
    next_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentListResponse
     */
    previous_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentListResponse
     */
    total_count: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentListResponse
     */
    total_pages: number;
}

/**
 * 
 * @export
 * @interface DocumentRequest
 */
export interface DocumentRequest {
    /**
     * Set to `true` to enable Test Mode. Documents created with Test Mode do not count towards API billing and are not legally binding. Defaults to `false`
     * @type {boolean}
     * @memberof DocumentRequest
     */
    test_mode?: boolean;
    /**
     * Only applies when `test_mode` is `true`. When `true`, and the document has an SMS-only recipient, sends the document owner a test-mode preview email (with a masked phone number) instead of the regular SMS sender-copy email. No SMS is sent and no credits are used, in test mode or otherwise. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    send_sms_test_preview_email?: boolean;
    /**
     * Document files can be uploaded by specifying a file URL or base64 string. Either `file_url` or `file_base64` must be present (not both). Valid file types are: .pdf, .doc, .docx, .pages, .ppt, .pptx, .key, .xls, .xlsx, .numbers, .jpg, .jpeg, .png, .tiff, .tif, .webp, .html, and .htm
     * @type {Array<FilesInner>}
     * @memberof DocumentRequest
     */
    files: Array<FilesInner>;
    /**
     * The name of the document.
     * @type {string}
     * @memberof DocumentRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentRequest
     */
    message?: string;
    /**
     * Document recipients are people that must complete and/or sign a document.
     * @type {Array<RecipientsInner>}
     * @memberof DocumentRequest
     */
    recipients: Array<RecipientsInner>;
    /**
     * Whether the document can still be updated before sending a signature request. If set to `false` the document is sent for signing as part of this request. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    draft?: boolean;
    /**
     * When set to true the document will enter self-sign mode, which allows the document creator to sign and complete a document without any field setup. Must use the embedded_edit_url in the response and (if embedding) the embedded requesting workflow. Unavailable on 21 CFR Part 11 documents, which require every signature to come from an authenticated signer: sending `true` returns a 422.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    self_sign?: boolean;
    /**
     * When set to `true` the document will have a signature page added to the end, and all signers will be required to add their signature on that page.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    with_signature_page?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentRequest
     */
    expires_in?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    reminders?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    apply_signing_order?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentRequest
     */
    api_application_id?: string;
    /**
     * When set to `true` it enables embedded signing in your website/web application. Embedded functionality works with an iFrame and email authentication is disabled. :embedded_signinig defaults to `false`.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    embedded_signing?: boolean;
    /**
     * On embedding signing, document owners (and CC'd contacts) do not get a notification email when documents have been completed. Setting this param to `true` will send out those final completed notifications. Default is `false`
     * @type {boolean}
     * @memberof DocumentRequest
     */
    embedded_signing_notifications?: boolean;
    /**
     * 
     * @type {EmbeddedRequest}
     * @memberof DocumentRequest
     */
    embedded?: EmbeddedRequest;
    /**
     * An alternative way (if you can’t use the recommended way) of placing fields in specific locations of your document by using special text tags. Useful when changing the content of your files changes the location of fields. See API documentation for “Text Tags” for details. Defaults to false.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    text_tags?: boolean;
    /**
     * Sets the custom requester name for the document. When set, this is the name used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentRequest
     */
    custom_requester_name?: string;
    /**
     * Sets the custom requester email for the document. When set, this is the email used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentRequest
     */
    custom_requester_email?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentRequest
     */
    redirect_url?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    allow_decline?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else. Unavailable on 21 CFR Part 11 documents: omit it and reassignment stays off, while sending `true` returns a 422.
     * @type {boolean}
     * @memberof DocumentRequest
     */
    allow_reassign?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentRequest
     */
    decline_redirect_url?: string;
    /**
     * Sets the language for all recipients on the document and updates all recipient side interactions including the document email and the document itself. Accepted languages: English, Français, Español, Deutsch, Polski, Português, Dansk, Nederlands, Italiano, Русский, Svenska, العربية, Ελληνικά, Türkçe, Slovenčina. Defaults to English. Language should be sent in ISO 639-1 format: en, fr, es, de, pl, pt, da, nl, it, ru, sv, ar, el, tr, sk.
     * @type {string}
     * @memberof DocumentRequest
     */
    language?: string;
    /**
     * Conditional logic rules that show, hide, or require fields based on what a signer does to other fields. Every identifier is a field api_id. At most 10 rules per document or template.
     * @type {Array<ConditionalRuleRequest>}
     * @memberof DocumentRequest
     */
    conditional_rules?: Array<ConditionalRuleRequest>;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentRequest
     */
    metadata?: { [key: string]: string | undefined; };
    /**
     * Document fields placed on a document for collecting data or signatures from recipients. At least one field must be present in the Create Document request if `draft` is `false` (unless adding a signature page by using `with_signature_page`). Field data should be sent as a 2-dimensional JSON array. One array of fields is needed for each file in the files array. An array of fields can be empty if you have a file that does not contain any fields.
     * @type {Array<Array<FieldsInnerInner>>}
     * @memberof DocumentRequest
     */
    fields?: Array<Array<FieldsInnerInner>>;
    /**
     * Attachments that a recipient must upload to complete the signing process. Attachment requests are shown after all document fields have been completed.
     * @type {Array<AttachmentRequestsInner>}
     * @memberof DocumentRequest
     */
    attachment_requests?: Array<AttachmentRequestsInner>;
    /**
     * Copied contacts are emailed the final document once it has been completed by all recipients.
     * @type {Array<CopiedContactsInner>}
     * @memberof DocumentRequest
     */
    copied_contacts?: Array<CopiedContactsInner>;
    /**
     * Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell. A document can have multiple labels.
     * @type {Array<LabelRequest>}
     * @memberof DocumentRequest
     */
    labels?: Array<LabelRequest>;
    /**
     * Checkbox fields that are placed on a document can be grouped with selection requirements. At least 2 checkbox fields in an array of fields must be assigned to the same recipient.
     * @type {Array<CheckboxGroupsInner>}
     * @memberof DocumentRequest
     */
    checkbox_groups?: Array<CheckboxGroupsInner>;
}

/**
 * 
 * @export
 * @interface DocumentResponse
 */
export interface DocumentResponse {
    /**
     * Whether 21 CFR Part 11 controls apply to this document. Read-only: the value is taken from the workspace setting when the document is created and never changes afterwards.
     * @type {boolean}
     * @memberof DocumentResponse
     */
    cfr_part11?: boolean;
    /**
     * The signing mode of a 21 CFR Part 11 document: streamlined (one final authentication) or per_signature (authentication at every signature and initials field). Null when Part 11 does not apply.
     * @type {string}
     * @memberof DocumentResponse
     */
    cfr_part11_signing_mode?: DocumentResponseCfrPart11SigningModeEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    test_mode: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    requester_email_address?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    custom_requester_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    custom_requester_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentResponse
     */
    metadata?: { [key: string]: string | undefined; } | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    updated_at?: string;
    /**
     * 
     * @type {Array<DocumentResponseRecipientsInner>}
     * @memberof DocumentResponse
     */
    recipients?: Array<DocumentResponseRecipientsInner>;
    /**
     * Possible values: Draft, Created, Sending, Sent, Pending, Viewed, Completed, Manually completed, Declined, Canceled, Bounced, Blocked, Error, Expired
     * @type {string}
     * @memberof DocumentResponse
     */
    status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    reminders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    archived?: boolean;
    /**
     * 
     * @type {EmbeddedBranding}
     * @memberof DocumentResponse
     */
    embedded?: EmbeddedBranding | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    embedded_signing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    embedded_edit_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    embedded_preview_url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    apply_signing_order?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    decline_redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    language?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponse
     */
    expires_in?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    decline_message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    error_message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponse
     */
    template_id?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentResponse
     */
    template_ids?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    embedded_signing_notifications?: boolean;
    /**
     * 
     * @type {Array<DocumentResponseAttachmentRequestsInner>}
     * @memberof DocumentResponse
     */
    attachment_requests?: Array<DocumentResponseAttachmentRequestsInner>;
    /**
     * 
     * @type {Array<FileInfo>}
     * @memberof DocumentResponse
     */
    files?: Array<FileInfo>;
    /**
     * 
     * @type {Array<CopiedContactInfo>}
     * @memberof DocumentResponse
     */
    copied_contacts?: Array<CopiedContactInfo>;
    /**
     * 
     * @type {Array<Array<DocumentResponseFieldsInnerInner>>}
     * @memberof DocumentResponse
     */
    fields?: Array<Array<DocumentResponseFieldsInnerInner>>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    allow_decline?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponse
     */
    allow_reassign?: boolean | null;
    /**
     * 
     * @type {Array<LabelInfo>}
     * @memberof DocumentResponse
     */
    labels?: Array<LabelInfo>;
    /**
     * 
     * @type {Array<CheckboxGroupInfo>}
     * @memberof DocumentResponse
     */
    checkbox_groups?: Array<CheckboxGroupInfo>;
    /**
     * 
     * @type {Array<ConditionalRuleInfo>}
     * @memberof DocumentResponse
     */
    conditional_rules?: Array<ConditionalRuleInfo>;
    /**
     * 
     * @type {Array<ConditionalLogicDecisionInfo>}
     * @memberof DocumentResponse
     */
    conditional_logic_decisions?: Array<ConditionalLogicDecisionInfo>;
}


/**
* @export
* @enum {string}
*/
export enum DocumentResponseCfrPart11SigningModeEnum {
    Streamlined = 'streamlined',
    PerSignature = 'per_signature',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface DocumentResponseAttachmentRequestsInner
 */
export interface DocumentResponseAttachmentRequestsInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseAttachmentRequestsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseAttachmentRequestsInner
     */
    recipient_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseAttachmentRequestsInner
     */
    required?: boolean;
}

/**
 * 
 * @export
 * @interface DocumentResponseFieldsInnerInner
 */
export interface DocumentResponseFieldsInnerInner {
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseFieldsInnerInner
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseFieldsInnerInner
     */
    y: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseFieldsInnerInner
     */
    page: number;
    /**
     * 
     * @type {DocumentResponseFieldsInnerInnerRecipient}
     * @memberof DocumentResponseFieldsInnerInner
     */
    recipient?: DocumentResponseFieldsInnerInnerRecipient;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    api_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    name?: string | null;
    /**
     * 
     * @type {DateFormat}
     * @memberof DocumentResponseFieldsInnerInner
     */
    date_format?: DateFormat;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseFieldsInnerInner
     */
    fixed_width?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    formula?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseFieldsInnerInner
     */
    lock_sign_date?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseFieldsInnerInner
     */
    required?: boolean;
    /**
     * 
     * @type {FieldType}
     * @memberof DocumentResponseFieldsInnerInner
     */
    type?: FieldType;
    /**
     * 
     * @type {TextValidation}
     * @memberof DocumentResponseFieldsInnerInner
     */
    validation?: TextValidation;
    /**
     * Text fields with custom validation only: the regex pattern used to validate field values. Required when validation is set to custom.
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    validation_regex?: string;
    /**
     * Text fields with custom validation only: the error message shown to the recipient when their input doesn't match the regex pattern. Required when validation is set to custom.
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    validation_regex_error_message?: string;
    /**
     * 
     * @type {DocumentResponseFieldsInnerInnerValue}
     * @memberof DocumentResponseFieldsInnerInner
     */
    value?: DocumentResponseFieldsInnerInnerValue | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    height?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    width?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    recipient_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    signing_elements_group_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    placeholder_name?: string;
    /**
     * Dropdown options (for dropdown/select fields)
     * @type {Array<DocumentResponseFieldsInnerInnerOptionsInner>}
     * @memberof DocumentResponseFieldsInnerInner
     */
    options?: Array<DocumentResponseFieldsInnerInnerOptionsInner>;
    /**
     * Default selected option
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInner
     */
    default_option?: string;
    /**
     * Whether "Other" option is allowed
     * @type {boolean}
     * @memberof DocumentResponseFieldsInnerInner
     */
    allow_other?: boolean;
}



/**
 * 
 * @export
 * @interface DocumentResponseFieldsInnerInnerOptionsInner
 */
export interface DocumentResponseFieldsInnerInnerOptionsInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInnerOptionsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInnerOptionsInner
     */
    api_id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseFieldsInnerInnerOptionsInner
     */
    is_other?: boolean;
}

/**
 * 
 * @export
 * @interface DocumentResponseFieldsInnerInnerRecipient
 */
export interface DocumentResponseFieldsInnerInnerRecipient {
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInnerRecipient
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseFieldsInnerInnerRecipient
     */
    name: string;
}

/**
 * @type DocumentResponseFieldsInnerInnerValue
 * 
 * @export
 */
export type DocumentResponseFieldsInnerInnerValue = boolean | number | string;/**
 * 
 * @export
 * @interface DocumentResponseRecipientsInner
 */
export interface DocumentResponseRecipientsInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    subject?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInner
     */
    send_email?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseRecipientsInner
     */
    send_email_delay?: number | null;
    /**
     * How the recipient is notified: email (default), sms, or email_and_sms.
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    delivery_method?: DocumentResponseRecipientsInnerDeliveryMethodEnum;
    /**
     * 
     * @type {DocumentResponseRecipientsInnerSms}
     * @memberof DocumentResponseRecipientsInner
     */
    sms?: DocumentResponseRecipientsInnerSms;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseRecipientsInner
     */
    signing_order?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    signing_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    embedded_signing_url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInner
     */
    bounced?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    bounced_details?: string | null;
    /**
     * 
     * @type {Array<AttachmentRequestInfo>}
     * @memberof DocumentResponseRecipientsInner
     */
    attachment_requests?: Array<AttachmentRequestInfo>;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    passcode?: string | null;
    /**
     * 
     * @type {DocumentResponseRecipientsInnerPasscodeDelivery}
     * @memberof DocumentResponseRecipientsInner
     */
    passcode_delivery?: DocumentResponseRecipientsInnerPasscodeDelivery;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInner
     */
    status?: string | null;
}


/**
* @export
* @enum {string}
*/
export enum DocumentResponseRecipientsInnerDeliveryMethodEnum {
    Email = 'email',
    Sms = 'sms',
    EmailAndSms = 'email_and_sms',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface DocumentResponseRecipientsInnerPasscodeDelivery
 */
export interface DocumentResponseRecipientsInnerPasscodeDelivery {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInnerPasscodeDelivery
     */
    enabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentResponseRecipientsInnerPasscodeDelivery
     */
    methods?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInnerPasscodeDelivery
     */
    expire_after_access?: boolean;
}

/**
 * SMS delivery metadata. Only present when delivery_method includes SMS.
 * @export
 * @interface DocumentResponseRecipientsInnerSms
 */
export interface DocumentResponseRecipientsInnerSms {
    /**
     * Masked phone number; the full number never leaves the API.
     * @type {string}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    phone_number_masked?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    send_sms?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    send_sms_delay?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    delivery_status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    message_type?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    failed?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentResponseRecipientsInnerSms
     */
    failed_details?: string | null;
}

/**
 * List of templates with pagination
 * @export
 * @interface DocumentTemplateListResponse
 */
export interface DocumentTemplateListResponse {
    /**
     * 
     * @type {Array<DocumentTemplateResponse>}
     * @memberof DocumentTemplateListResponse
     */
    templates: Array<DocumentTemplateResponse>;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateListResponse
     */
    current_page: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateListResponse
     */
    next_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateListResponse
     */
    previous_page?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateListResponse
     */
    total_count: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateListResponse
     */
    total_pages: number;
}

/**
 * 
 * @export
 * @interface DocumentTemplateRequest
 */
export interface DocumentTemplateRequest {
    /**
     * Document files can be uploaded by specifying a file URL or base64 string. Either `file_url` or `file_base64` must be present (not both). Valid file types are: .pdf, .doc, .docx, .pages, .ppt, .pptx, .key, .xls, .xlsx, .numbers, .jpg, .jpeg, .png, .tiff, .tif, .webp, .html, and .htm
     * @type {Array<FilesInner>}
     * @memberof DocumentTemplateRequest
     */
    files: Array<FilesInner>;
    /**
     * The name of the template.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    message?: string;
    /**
     * Placeholders are generally job roles that must complete and/or sign the document. For example, a placeholder might be “Client” or “Legal Department”. When a document is created from the template, you assign a person to each placeholder.
     * @type {Array<PlaceholdersInner>}
     * @memberof DocumentTemplateRequest
     */
    placeholders: Array<PlaceholdersInner>;
    /**
     * Copied placeholders are emailed the final document once it has been completed by all recipients.
     * @type {Array<CopiedPlaceholdersInner>}
     * @memberof DocumentTemplateRequest
     */
    copied_placeholders?: Array<CopiedPlaceholdersInner>;
    /**
     * Whether the template can still be updated before it is ready for usage. If set to `false` the template is marked as `Available` and it will be ready for use. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    draft?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentTemplateRequest
     */
    expires_in?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    reminders?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    apply_signing_order?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    api_application_id?: string;
    /**
     * An alternative way (if you can’t use the recommended way) of placing fields in specific locations of your document by using special text tags. Useful when changing the content of your files changes the location of fields. See API documentation for “Text Tags” for details. Defaults to false.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    text_tags?: boolean;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    redirect_url?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    allow_decline?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else. Unavailable on 21 CFR Part 11 documents: omit it and reassignment stays off, while sending `true` returns a 422.
     * @type {boolean}
     * @memberof DocumentTemplateRequest
     */
    allow_reassign?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    decline_redirect_url?: string;
    /**
     * Sets the language for the template and documents created from the template for all recipient side interactions including the document email and the document itself. Accepted languages: English, Français, Español, Deutsch, Polski, Português, Dansk, Nederlands, Italiano, Русский, Svenska, العربية, Ελληνικά, Türkçe, Slovenčina. Language should be sent in ISO 639-1 format: en, fr, es, de, pl, pt, da, nl, it, ru, sv, ar, el, tr, sk.
     * @type {string}
     * @memberof DocumentTemplateRequest
     */
    language?: string;
    /**
     * Conditional logic rules that show, hide, or require fields based on what a signer does to other fields. Every identifier is a field api_id. At most 10 rules per document or template.
     * @type {Array<ConditionalRuleRequest>}
     * @memberof DocumentTemplateRequest
     */
    conditional_rules?: Array<ConditionalRuleRequest>;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentTemplateRequest
     */
    metadata?: { [key: string]: string | undefined; };
    /**
     * Document fields placed on a document for collecting data or signatures from recipients. At least one field must be present in the Create Document request if `draft` is `false` (unless adding a signature page by using `with_signature_page`). Field data should be sent as a 2-dimensional JSON array. One array of fields is needed for each file in the files array. An array of fields can be empty if you have a file that does not contain any fields.
     * @type {Array<Array<TemplateFieldsInnerInner>>}
     * @memberof DocumentTemplateRequest
     */
    fields?: Array<Array<TemplateFieldsInnerInner>>;
    /**
     * Attachments that a recipient must upload to complete the signing process. Attachment requests are shown after all document fields have been completed.
     * @type {Array<TemplateAttachmentRequestsInner>}
     * @memberof DocumentTemplateRequest
     */
    attachment_requests?: Array<TemplateAttachmentRequestsInner>;
    /**
     * Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell. A document can have multiple labels.
     * @type {Array<LabelRequest>}
     * @memberof DocumentTemplateRequest
     */
    labels?: Array<LabelRequest>;
    /**
     * Checkbox fields that are placed on a document can be grouped with selection requirements. At least 2 checkbox fields in an array of fields must be assigned to the same recipient.
     * @type {Array<TemplateCheckboxGroupsInner>}
     * @memberof DocumentTemplateRequest
     */
    checkbox_groups?: Array<TemplateCheckboxGroupsInner>;
}

/**
 * 
 * @export
 * @interface DocumentTemplateResponse
 */
export interface DocumentTemplateResponse {
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    api_application_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    requester_email_address?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    custom_requester_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    custom_requester_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentTemplateResponse
     */
    metadata?: { [key: string]: string | undefined; } | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    updated_at?: string;
    /**
     * 
     * @type {Array<DocumentTemplateResponsePlaceholdersInner>}
     * @memberof DocumentTemplateResponse
     */
    placeholders?: Array<DocumentTemplateResponsePlaceholdersInner>;
    /**
     * 
     * @type {Array<DocumentTemplateResponseCopiedPlaceholdersInner>}
     * @memberof DocumentTemplateResponse
     */
    copied_placeholders?: Array<DocumentTemplateResponseCopiedPlaceholdersInner>;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentTemplateResponse
     */
    reminders?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentTemplateResponse
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    embedded_edit_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    template_link?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    template_id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentTemplateResponse
     */
    apply_signing_order?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    decline_redirect_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponse
     */
    language?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateResponse
     */
    expires_in?: number | null;
    /**
     * 
     * @type {Array<FileInfo>}
     * @memberof DocumentTemplateResponse
     */
    files?: Array<FileInfo>;
    /**
     * 
     * @type {Array<Array<DocumentResponseFieldsInnerInner>>}
     * @memberof DocumentTemplateResponse
     */
    fields?: Array<Array<DocumentResponseFieldsInnerInner>>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentTemplateResponse
     */
    allow_decline?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentTemplateResponse
     */
    allow_reassign?: boolean | null;
    /**
     * 
     * @type {Array<LabelInfo>}
     * @memberof DocumentTemplateResponse
     */
    labels?: Array<LabelInfo>;
    /**
     * 
     * @type {Array<CheckboxGroupInfo>}
     * @memberof DocumentTemplateResponse
     */
    checkbox_groups?: Array<CheckboxGroupInfo>;
    /**
     * 
     * @type {Array<ConditionalRuleInfo>}
     * @memberof DocumentTemplateResponse
     */
    conditional_rules?: Array<ConditionalRuleInfo>;
}

/**
 * 
 * @export
 * @interface DocumentTemplateResponseCopiedPlaceholdersInner
 */
export interface DocumentTemplateResponseCopiedPlaceholdersInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    placeholder_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    preassigned_recipient_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponseCopiedPlaceholdersInner
     */
    preassigned_recipient_email?: string;
}

/**
 * 
 * @export
 * @interface DocumentTemplateResponsePlaceholdersInner
 */
export interface DocumentTemplateResponsePlaceholdersInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    preassigned_recipient_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    preassigned_recipient_email?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    signing_order?: number;
    /**
     * 
     * @type {Array<AttachmentRequestInfo>}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    attachment_requests?: Array<AttachmentRequestInfo>;
    /**
     * 
     * @type {DocumentResponseRecipientsInnerPasscodeDelivery}
     * @memberof DocumentTemplateResponsePlaceholdersInner
     */
    passcode_delivery?: DocumentResponseRecipientsInnerPasscodeDelivery;
}

/**
 * 
 * @export
 * @interface DocumentTemplateUpdateRequest
 */
export interface DocumentTemplateUpdateRequest {
    /**
     * The name of the template.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    message?: string;
    /**
     * Whether the template can still be updated before it is ready for usage. If set to `false` the template is marked as `Available` and it will be ready for use. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    draft?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentTemplateUpdateRequest
     */
    expires_in?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    reminders?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    apply_signing_order?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    api_application_id?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    redirect_url?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    allow_decline?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else. Unavailable on 21 CFR Part 11 documents: omit it and reassignment stays off, while sending `true` returns a 422.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    allow_reassign?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    decline_redirect_url?: string;
    /**
     * Conditional logic rules that show, hide, or require fields based on what a signer does to other fields. Every identifier is a field api_id. At most 10 rules per document or template.
     * @type {Array<ConditionalRuleRequest>}
     * @memberof DocumentTemplateUpdateRequest
     */
    conditional_rules?: Array<ConditionalRuleRequest>;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DocumentTemplateUpdateRequest
     */
    metadata?: { [key: string]: string | undefined; };
    /**
     * Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell. A document can have multiple labels. Updating labels on a document will replace any existing labels for that document.
     * @type {Array<LabelRequest>}
     * @memberof DocumentTemplateUpdateRequest
     */
    labels?: Array<LabelRequest>;
    /**
     * Checkbox fields that are placed on a document can be grouped with selection requirements. At least 2 checkbox fields in an array of fields must be assigned to the same recipient.
     * @type {Array<TemplateCheckboxGroupsInner>}
     * @memberof DocumentTemplateUpdateRequest
     */
    checkbox_groups?: Array<TemplateCheckboxGroupsInner>;
}

/**
 * @type DropdownOption
 * A dropdown option - either a simple string or a detailed object with name and optional api_id
 * @export
 */
export type DropdownOption = DetailedOption | string;/**
 * The branding the caller set on THIS document, echoed back. Null when the caller set none: the document then renders with the API Application, workspace or system branding, and that resolved branding is deliberately not reported here.
 * @export
 * @interface EmbeddedBranding
 */
export interface EmbeddedBranding {
    /**
     * 
     * @type {EmbeddedBrandingBranding}
     * @memberof EmbeddedBranding
     */
    branding: EmbeddedBrandingBranding;
}

/**
 * Only the properties actually set on the document. Every one is optional: an unset property is absent rather than null, because null is how a request clears one.
 * @export
 * @interface EmbeddedBrandingBranding
 */
export interface EmbeddedBrandingBranding {
    /**
     * Write-only. Reports only that a logo was set, never its URL or Base64 payload.
     * @type {string}
     * @memberof EmbeddedBrandingBranding
     */
    company_logo?: EmbeddedBrandingBrandingCompanyLogoEnum;
    /**
     * Hex, as #RRGGBB.
     * @type {string}
     * @memberof EmbeddedBrandingBranding
     */
    accent_color?: string;
    /**
     * Hex, as #RRGGBB.
     * @type {string}
     * @memberof EmbeddedBrandingBranding
     */
    button_label_color?: string;
    /**
     * Hex, as #RRGGBB.
     * @type {string}
     * @memberof EmbeddedBrandingBranding
     */
    link_color?: string;
    /**
     * Pixels, 0 to 25.
     * @type {number}
     * @memberof EmbeddedBrandingBranding
     */
    button_border_radius?: number;
}


/**
* @export
* @enum {string}
*/
export enum EmbeddedBrandingBrandingCompanyLogoEnum {
    Provided = 'provided',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Branding for this document's embedded requesting and signing experiences. Every property is optional and independent. A property you supply overrides the selected API Application; one you omit inherits from it, then from the SignWell default. `company_logo` has one extra step between those two: the account's Settings > Branding logo, which applies on paid plans only. The colors and the border radius have no account step — omitting one falls straight through to the SignWell default. On Update and Send Document the object is a patch: only the properties you send change, and a property sent as `null` clears your override so the value inherits again. Sending `branding` itself as `null` clears every property.
 * @export
 * @interface EmbeddedBrandingRequest
 */
export interface EmbeddedBrandingRequest {
    /**
     * 
     * @type {EmbeddedBrandingRequestCompanyLogo}
     * @memberof EmbeddedBrandingRequest
     */
    company_logo?: EmbeddedBrandingRequestCompanyLogo | null;
    /**
     * Accent color for this document's embedded pages, as a 6-digit HEX value. Returned normalized to `#RRGGBB`.
     * @type {string}
     * @memberof EmbeddedBrandingRequest
     */
    accent_color?: string | null;
    /**
     * Button label color for this document's embedded pages, as a 6-digit HEX value. Returned normalized to `#RRGGBB`.
     * @type {string}
     * @memberof EmbeddedBrandingRequest
     */
    button_label_color?: string | null;
    /**
     * Link color for this document's embedded pages, as a 6-digit HEX value. Returned normalized to `#RRGGBB`.
     * @type {string}
     * @memberof EmbeddedBrandingRequest
     */
    link_color?: string | null;
    /**
     * Corner radius of buttons on this document's embedded pages, in pixels. Must be between 0 and 25.
     * @type {number}
     * @memberof EmbeddedBrandingRequest
     */
    button_border_radius?: number | null;
}

/**
 * Logo shown on this document's embedded pages. Supply either `file_url` or `file_base64`, never both — sending both returns a `422`. Sending `company_logo` replaces the logo outright, so whichever source you omit is cleared; sending it as `null` removes the logo. Recommended size is 300 x 60 px with a transparent background; these are recommendations, not validated. In responses this property is `"provided"` — the URL and the Base64 payload are never returned.
 * @export
 * @interface EmbeddedBrandingRequestCompanyLogo
 */
export interface EmbeddedBrandingRequestCompanyLogo {
    /**
     * Public `http` or `https` URL of the logo image. The value has to parse as one — anything else returns a `422`. SignWell never requests the URL when the document is created, so it is not checked for reachability or for what it points at. If the URL turns out to be unreachable, slow, or not a usable image when the page loads, the page falls back to the no-logo experience rather than erroring.
     * @type {string}
     * @memberof EmbeddedBrandingRequestCompanyLogo
     */
    file_url?: string;
    /**
     * RFC 4648 Base64 string of the logo image. The 300 KB limit applies to the decoded image, not to the string you send, so a valid string runs about a third larger. The decoded image must be one of image/jpeg, image/png, image/gif, image/tiff, image/webp, image/svg+xml, image/heic, image/heif, image/avif. A payload that cannot be decoded, is not one of those formats, or is over the size limit returns a `422`. A payload that is accepted here but still fails to render when the page loads falls back to the no-logo experience.
     * @type {string}
     * @memberof EmbeddedBrandingRequestCompanyLogo
     */
    file_base64?: string;
}

/**
 * Optional container for embedded settings. Purely additive: requests that omit it behave exactly as before, and the existing top-level `api_application_id`, `embedded_signing` and `embedded_signing_notifications` parameters are unchanged. Not supported on template endpoints, which return a `422` if it is present.
 * @export
 * @interface EmbeddedRequest
 */
export interface EmbeddedRequest {
    /**
     * 
     * @type {EmbeddedBrandingRequest}
     * @memberof EmbeddedRequest
     */
    branding?: EmbeddedBrandingRequest | null;
}

/**
 * Standard error response
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Human-readable error message
     * @type {string}
     * @memberof ErrorResponse
     */
    message?: string;
    /**
     * 
     * @type {ErrorResponseMeta}
     * @memberof ErrorResponse
     */
    meta?: ErrorResponseMeta;
}

/**
 * 
 * @export
 * @interface ErrorResponseMeta
 */
export interface ErrorResponseMeta {
    /**
     * Error code identifier
     * @type {string}
     * @memberof ErrorResponseMeta
     */
    error: string;
    /**
     * Detailed error message
     * @type {string}
     * @memberof ErrorResponseMeta
     */
    message: string;
    /**
     * List of error messages
     * @type {Array<string>}
     * @memberof ErrorResponseMeta
     */
    messages?: Array<string>;
}

/**
 * Type of signing field
 * @export
 * @enum {string}
 */
export enum FieldType {
    Initials = 'initials',
    Signature = 'signature',
    Checkbox = 'checkbox',
    Date = 'date',
    Select = 'select',
    Text = 'text',
    Dropdown = 'dropdown',
    AutofillCompany = 'autofill_company',
    AutofillEmail = 'autofill_email',
    AutofillFirstName = 'autofill_first_name',
    AutofillLastName = 'autofill_last_name',
    AutofillName = 'autofill_name',
    AutofillPhone = 'autofill_phone',
    AutofillTitle = 'autofill_title',
    AutofillDateSigned = 'autofill_date_signed',
    UnknownDefaultOpenApi = '11184809'
}
/**
 * 
 * @export
 * @interface FieldsInnerInner
 */
export interface FieldsInnerInner {
    /**
     * Horizontal value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof FieldsInnerInner
     */
    x: number;
    /**
     * Vertical value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof FieldsInnerInner
     */
    y: number;
    /**
     * The page number within the file. If the page does not exist within the file then the field won't be created.
     * @type {number}
     * @memberof FieldsInnerInner
     */
    page: number;
    /**
     * Unique identifier of the recipient assigned to the field. Recipients assigned to fields will be the only ones that will see and be able to complete those fields.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    recipient_id: string;
    /**
     * 
     * @type {FieldType}
     * @memberof FieldsInnerInner
     */
    type: FieldType;
    /**
     * Whether the field must be completed by the recipient. Defaults to `true` except for checkbox type fields.
     * @type {boolean}
     * @memberof FieldsInnerInner
     */
    required?: boolean;
    /**
     * Text and Date fields only: label that is displayed when the field is empty.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    label?: string;
    /**
     * 
     * @type {AdditionalFieldsInnerInnerValue}
     * @memberof FieldsInnerInner
     */
    value?: AdditionalFieldsInnerInnerValue;
    /**
     * Unique identifier of the field. Useful when needing to reference specific field values or update a document and its fields.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    api_id?: string;
    /**
     * Checkbox fields only. At least 2 checkbox fields in an array of fields must be assigned to the same recipient and grouped with selection requirements.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    name?: string;
    /**
     * 
     * @type {TextValidation}
     * @memberof FieldsInnerInner
     */
    validation?: TextValidation;
    /**
     * Text fields with custom validation only: the regex pattern used to validate field values. Required when validation is set to custom.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    validation_regex?: string;
    /**
     * Text fields with custom validation only: the error message shown to the recipient when their input doesn't match the regex pattern. Required when validation is set to custom.
     * @type {string}
     * @memberof FieldsInnerInner
     */
    validation_regex_error_message?: string;
    /**
     * Text fields only: whether the field width will stay fixed and text will display in multiple lines, rather than one long line. If set to `false` the field width will automatically grow horizontally to fit text on one line. Defaults to `false`.
     * @type {boolean}
     * @memberof FieldsInnerInner
     */
    fixed_width?: boolean;
    /**
     * Date fields only: makes fields readonly and automatically populates with the date the recipient signed. Defaults to `false`.
     * @type {boolean}
     * @memberof FieldsInnerInner
     */
    lock_sign_date?: boolean;
    /**
     * 
     * @type {DateFormat}
     * @memberof FieldsInnerInner
     */
    date_format?: DateFormat;
    /**
     * Height of the field (in pixels). Maximum height varies by field type: Signature/Initials (200px), others (74px). When using text tags if the height is greater than the maximum height, the height will be set to the maximum height.
     * @type {number}
     * @memberof FieldsInnerInner
     */
    height?: number;
    /**
     * Width of the field (in pixels). For text fields, width will auto-grow unless `fixed_width` is true.
     * @type {number}
     * @memberof FieldsInnerInner
     */
    width?: number;
    /**
     * Array of dropdown options (for dropdown/select fields only)
     * @type {Array<DropdownOption>}
     * @memberof FieldsInnerInner
     */
    options?: Array<DropdownOption>;
    /**
     * Default selected option (for dropdown/select fields only)
     * @type {string}
     * @memberof FieldsInnerInner
     */
    default_option?: string;
    /**
     * Whether to allow "Other" option with text input (for dropdown/select fields only)
     * @type {boolean}
     * @memberof FieldsInnerInner
     */
    allow_other?: boolean;
}



/**
 * Format of the file to be downloaded. Supported formats are 'pdf' and 'zip'. `zip` is unavailable on a 21 CFR Part 11 document, whose completed PDF, E-Signature page and audit page stay together as one record.
 * @export
 * @enum {string}
 */
export enum FileFormat {
    Pdf = 'pdf',
    Zip = 'zip',
    UnknownDefaultOpenApi = '11184809'
}
/**
 * File information
 * @export
 * @interface FileInfo
 */
export interface FileInfo {
    /**
     * File name
     * @type {string}
     * @memberof FileInfo
     */
    name?: string | null;
    /**
     * Number of pages in the file
     * @type {number}
     * @memberof FileInfo
     */
    pages_number: number;
}

/**
 * 
 * @export
 */
export type FilesInner = { name: string; file_url: string; file_base64?: never } | { name: string; file_base64: string; file_url?: never };

/**
 * Label information
 * @export
 * @interface LabelInfo
 */
export interface LabelInfo {
    /**
     * Label ID
     * @type {string}
     * @memberof LabelInfo
     */
    id?: string;
    /**
     * Label name
     * @type {string}
     * @memberof LabelInfo
     */
    name?: string;
}

/**
 * Labels can be used to organize documents and templates in a way that can make it easy to find using the document search/template search in SignWell. Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell.
 * @export
 * @interface LabelRequest
 */
export interface LabelRequest {
    /**
     * 
     * @type {string}
     * @memberof LabelRequest
     */
    name: string;
}

/**
 * Labels can be used to organize documents and templates in a way that can make it easy to find using the document search/template search in SignWell. Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell.
 * @export
 * @interface LabelResponse
 */
export interface LabelResponse {
    /**
     * 
     * @type {string}
     * @memberof LabelResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LabelResponse
     */
    name: string;
}

/**
 * Account information associated with the API key
 * @export
 * @interface MeResponse
 */
export interface MeResponse {
    /**
     * Membership ID
     * @type {string}
     * @memberof MeResponse
     */
    id: string;
    /**
     * Role within the account (e.g. owner, admin, member)
     * @type {string}
     * @memberof MeResponse
     */
    role: string;
    /**
     * 
     * @type {boolean}
     * @memberof MeResponse
     */
    archived?: boolean;
    /**
     * 
     * @type {MeResponseUser}
     * @memberof MeResponse
     */
    user: MeResponseUser;
    /**
     * 
     * @type {AccountInfoResponse}
     * @memberof MeResponse
     */
    account: AccountInfoResponse;
    /**
     * 
     * @type {AccountInfoResponse}
     * @memberof MeResponse
     */
    workspace: AccountInfoResponse;
    /**
     * 
     * @type {MeResponseContact}
     * @memberof MeResponse
     */
    contact: MeResponseContact;
}

/**
 * The contact record for the authenticated user
 * @export
 * @interface MeResponseContact
 */
export interface MeResponseContact {
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    company_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    phone_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    alt_phone_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    website?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeResponseContact
     */
    initials?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MeResponseContact
     */
    archived?: boolean;
}

/**
 * The authenticated user
 * @export
 * @interface MeResponseUser
 */
export interface MeResponseUser {
    /**
     * 
     * @type {string}
     * @memberof MeResponseUser
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MeResponseUser
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MeResponseUser
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof MeResponseUser
     */
    has_google_registration?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MeResponseUser
     */
    first_name?: string;
    /**
     * 
     * @type {MeResponseUserPreferences}
     * @memberof MeResponseUser
     */
    preferences?: MeResponseUserPreferences;
}

/**
 * 
 * @export
 * @interface MeResponseUserPreferences
 */
export interface MeResponseUserPreferences {
    /**
     * 
     * @type {boolean}
     * @memberof MeResponseUserPreferences
     */
    sales_document?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MeResponseUserPreferences
     */
    time_zone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MeResponseUserPreferences
     */
    smart_fields?: boolean;
}

/**
 * NOM-151 certificate data returned when object_only=true
 * @export
 * @interface Nom151CertificateResponse
 */
export interface Nom151CertificateResponse {
    /**
     * 
     * @type {Nom151CertificateResponseNom151}
     * @memberof Nom151CertificateResponse
     */
    nom151: Nom151CertificateResponseNom151;
}

/**
 * 
 * @export
 * @interface Nom151CertificateResponseNom151
 */
export interface Nom151CertificateResponseNom151 {
    /**
     * Certificate status (pending, issued, failed)
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    status: string;
    /**
     * RSA signature / Transaction ID
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    transactionId: string;
    /**
     * Document digest (SHA-256 hash)
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    hash: string;
    /**
     * Certificate number / Folio
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    folio: string;
    /**
     * Certificate issuance timestamp
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    issuedAt: string;
    /**
     * Certificate provider (e.g., SeguriData)
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    provider: string;
    /**
     * URL to validate the certificate
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    validationUrl: string;
    /**
     * Base64-encoded certificate file
     * @type {string}
     * @memberof Nom151CertificateResponseNom151
     */
    constancia: string;
}

/**
 * NOM-151 download URL returned when url_only=true
 * @export
 * @interface Nom151UrlResponse
 */
export interface Nom151UrlResponse {
    /**
     * Public URL to download the certificate ZIP file
     * @type {string}
     * @memberof Nom151UrlResponse
     */
    file_url: string;
}

/**
 * Pagination metadata for list responses
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * Current page number
     * @type {number}
     * @memberof PaginationMeta
     */
    current_page: number;
    /**
     * Next page number, null if on last page
     * @type {number}
     * @memberof PaginationMeta
     */
    next_page?: number | null;
    /**
     * Previous page number, null if on first page
     * @type {number}
     * @memberof PaginationMeta
     */
    previous_page?: number | null;
    /**
     * Total number of records
     * @type {number}
     * @memberof PaginationMeta
     */
    total_count: number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof PaginationMeta
     */
    total_pages: number;
}

/**
 * 
 * @export
 * @interface PlaceholdersInner
 */
export interface PlaceholdersInner {
    /**
     * A unique identifier that you will give to each placeholder. We recommend numbering sequentially from 1 to X. IDs are required for associating recipients to fields and more.
     * @type {string}
     * @memberof PlaceholdersInner
     */
    id: string;
    /**
     * Name of the placeholder.
     * @type {string}
     * @memberof PlaceholdersInner
     */
    name: string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the name. Every recipient on a 21 CFR Part 11 document needs a name, so leaving it unset means the name has to be supplied when the document is created.
     * @type {string}
     * @memberof PlaceholdersInner
     */
    preassigned_recipient_name?: string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the email.
     * @type {string}
     * @memberof PlaceholdersInner
     */
    preassigned_recipient_email?: string;
    /**
     * 
     * @type {PlaceholdersInnerPasscodeDelivery}
     * @memberof PlaceholdersInner
     */
    passcode_delivery?: PlaceholdersInnerPasscodeDelivery;
}

/**
 * Passcode delivery (OTP) settings for this placeholder. When enabled, documents created from this template inherit these settings for the corresponding recipient. While 21 CFR Part 11 is enabled for the workspace, a placeholder cannot disable passcode delivery: it returns a 422.
 * @export
 * @interface PlaceholdersInnerPasscodeDelivery
 */
export interface PlaceholdersInnerPasscodeDelivery {
    /**
     * Enable passcode delivery for this recipient. Cannot be set to `false` on a 21 CFR Part 11 document: it returns a 422.
     * @type {boolean}
     * @memberof PlaceholdersInnerPasscodeDelivery
     */
    enabled?: boolean;
    /**
     * Delivery methods for the passcode. Currently supports: email. Defaults to ["email"] when omitted.
     * @type {Array<string>}
     * @memberof PlaceholdersInnerPasscodeDelivery
     */
    methods?: Array<PlaceholdersInnerPasscodeDeliveryMethodsEnum>;
    /**
     * Whether the passcode expires after the recipient accesses the document. Inherited by documents created from this template.
     * @type {boolean}
     * @memberof PlaceholdersInnerPasscodeDelivery
     */
    expire_after_access?: boolean;
}


/**
* @export
* @enum {string}
*/
export enum PlaceholdersInnerPasscodeDeliveryMethodsEnum {
    Email = 'email',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Rate limit exceeded error response (HTTP 429)
 * @export
 * @interface RateLimitErrorResponse
 */
export interface RateLimitErrorResponse {
    /**
     * Rate limit error message indicating the limit and reset time
     * @type {string}
     * @memberof RateLimitErrorResponse
     */
    error: string;
}

/**
 * 
 * @export
 * @interface RecipientsInner
 */
export interface RecipientsInner {
    /**
     * A unique identifier that you will give to each recipient. We recommend numbering sequentially from 1 to X. IDs are required for associating recipients to fields and more.
     * @type {string}
     * @memberof RecipientsInner
     */
    id: string;
    /**
     * Name of the recipient. Required on 21 CFR Part 11 documents: a recipient without a name returns a 422.
     * @type {string}
     * @memberof RecipientsInner
     */
    name?: string;
    /**
     * Email address for the recipient. Required unless the recipient's `delivery_method` is `sms`.
     * @type {string}
     * @memberof RecipientsInner
     */
    email?: string;
    /**
     * If set, signers assigned with a passcode will be required to enter the passcode before they’re able to view and complete the document. On a 21 CFR Part 11 document SignWell generates the passcode, so a sender-defined passcode returns a 422.
     * @type {string}
     * @memberof RecipientsInner
     */
    passcode?: string;
    /**
     * 
     * @type {RecipientsInnerPasscodeDelivery}
     * @memberof RecipientsInner
     */
    passcode_delivery?: RecipientsInnerPasscodeDelivery;
    /**
     * Email subject for the signature request that the recipient will see. Overrides the general subject for the document.
     * @type {string}
     * @memberof RecipientsInner
     */
    subject?: string;
    /**
     * Email message for the signature request that the recipient will see. Overrides the general message for the document.
     * @type {string}
     * @memberof RecipientsInner
     */
    message?: string;
    /**
     * Applies on when `embedded_signing` is `true`. By default, recipients are not notified through email to sign when doing embedded signing. Setting this to `true`  will send a notification email to the recipient. Default is `false`.
     * @type {boolean}
     * @memberof RecipientsInner
     */
    send_email?: boolean;
    /**
     * If `send_email` is `true` recipients will receive a new document notification immediately. In the case of embedded signing, you can delay this notification to only send if the document is not completed within a few minutes. The email notification will not go out if the document is completed before the delay time is over. Valid values are in minutes ranging from `0` to `60`. Defaults to `0`.
     * @type {number}
     * @memberof RecipientsInner
     */
    send_email_delay?: number;
    /**
     * How the recipient is notified and receives the signing link: `email` (default), `sms`, or `email_and_sms`. SMS delivery is available only to workspaces that are eligible for SMS and have it enabled. `email` requires `email`, `sms` requires `phone_number`, and `email_and_sms` requires both. SMS content always uses fixed system templates; `subject` and `message` apply to email notifications only. A 21 CFR Part 11 document records one verified channel per recipient: `email` and `sms` are both accepted, while `email_and_sms` returns a 422.
     * @type {string}
     * @memberof RecipientsInner
     */
    delivery_method?: RecipientsInnerDeliveryMethodEnum;
    /**
     * Recipient phone number in E.164 format (for example `+14155551234`). Required when `delivery_method` is `sms` or `email_and_sms`. Only phone numbers from the country codes currently enabled for SMS are accepted.
     * @type {string}
     * @memberof RecipientsInner
     */
    phone_number?: string;
    /**
     * Applies only when `embedded_signing` is `true` and the recipient's `delivery_method` includes SMS. By default, recipients are not notified through SMS when doing embedded signing. Setting this to `true` will send the SMS notification to the recipient. Default is `false`.
     * @type {boolean}
     * @memberof RecipientsInner
     */
    send_sms?: boolean;
    /**
     * If `send_sms` is `true` the recipient will receive the SMS notification immediately. In the case of embedded signing, you can delay this notification to only send if the document is not completed within a few minutes. The SMS will not go out if the document is completed before the delay time is over. Valid values are in minutes ranging from `0` to `60`. Defaults to `0`.
     * @type {number}
     * @memberof RecipientsInner
     */
    send_sms_delay?: number;
}


/**
* @export
* @enum {string}
*/
export enum RecipientsInnerDeliveryMethodEnum {
    Email = 'email',
    Sms = 'sms',
    EmailAndSms = 'email_and_sms',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Passcode delivery settings. When enabled, the system delivers the passcode to the signer via email. Always on for 21 CFR Part 11 documents and cannot be disabled.
 * @export
 * @interface RecipientsInnerPasscodeDelivery
 */
export interface RecipientsInnerPasscodeDelivery {
    /**
     * Enable passcode delivery for this recipient. Cannot be set to `false` on a 21 CFR Part 11 document: it returns a 422.
     * @type {boolean}
     * @memberof RecipientsInnerPasscodeDelivery
     */
    enabled?: boolean;
    /**
     * Delivery methods for the passcode. Currently supports: email. Defaults to ["email"] when omitted.
     * @type {Array<string>}
     * @memberof RecipientsInnerPasscodeDelivery
     */
    methods?: Array<RecipientsInnerPasscodeDeliveryMethodsEnum>;
    /**
     * When enabled, the passcode is cleared after successful authentication. If passcode_delivery is also enabled, a new passcode is auto-generated on the next send request. Otherwise the recipient will no longer need a passcode.
     * @type {boolean}
     * @memberof RecipientsInnerPasscodeDelivery
     */
    expire_after_access?: boolean;
}


/**
* @export
* @enum {string}
*/
export enum RecipientsInnerPasscodeDeliveryMethodsEnum {
    Email = 'email',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface ReminderRecipientsInner
 */
export interface ReminderRecipientsInner {
    /**
     * Recipient's name (required if multiple recipients share the same email).
     * @type {string}
     * @memberof ReminderRecipientsInner
     */
    name?: string;
    /**
     * Recipient's email address. Used to match the recipient to remind; not required for SMS-only recipients, who can be identified by name instead.
     * @type {string}
     * @memberof ReminderRecipientsInner
     */
    email?: string;
}

/**
 * 
 * @export
 * @interface SendReminderRequest
 */
export interface SendReminderRequest {
    /**
     * Optional list of recipients within the document to remind. If none are specified, all recipients that have not signed yet are reminded. Each recipient is reminded through their own delivery method: email-only recipients get a reminder email, SMS-only recipients get a reminder text, and email_and_sms recipients get both. If the workspace has insufficient SMS credit, only the SMS reminder is skipped and the sender is notified once; the email reminder (if applicable) still goes out.
     * @type {Array<ReminderRecipientsInner>}
     * @memberof SendReminderRequest
     */
    recipients?: Array<ReminderRecipientsInner>;
}

/**
 * 
 * @export
 * @interface TemplateAttachmentRequestsInner
 */
export interface TemplateAttachmentRequestsInner {
    /**
     * Name of the requested attachment.
     * @type {string}
     * @memberof TemplateAttachmentRequestsInner
     */
    name: string;
    /**
     * Unique identifier of the recipient that will view the attachment request.
     * @type {string}
     * @memberof TemplateAttachmentRequestsInner
     */
    placeholder_id: string;
    /**
     * Whether the recipient will need to upload the attachment to successfully complete/sign the document. Defaults to `true`.
     * @type {boolean}
     * @memberof TemplateAttachmentRequestsInner
     */
    required?: boolean;
}

/**
 * 
 * @export
 * @interface TemplateCheckboxGroupsInner
 */
export interface TemplateCheckboxGroupsInner {
    /**
     * A unique identifier for the checkbox group.
     * @type {string}
     * @memberof TemplateCheckboxGroupsInner
     */
    group_name: string;
    /**
     * The recipient ID associated with the checkbox group.
     * @type {string}
     * @memberof TemplateCheckboxGroupsInner
     */
    placeholder_id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TemplateCheckboxGroupsInner
     */
    checkbox_ids: Array<string>;
    /**
     * 
     * @type {CheckboxValidation}
     * @memberof TemplateCheckboxGroupsInner
     */
    validation?: CheckboxValidation;
    /**
     * Whether the group must be completed by the recipient. Defaults to false.
     * @type {boolean}
     * @memberof TemplateCheckboxGroupsInner
     */
    required?: boolean;
    /**
     * The minimum number of checkboxes that must be checked in the group. (Only for validation: minimum and range)
     * @type {number}
     * @memberof TemplateCheckboxGroupsInner
     */
    min_value?: number;
    /**
     * The maximum number of checkboxes that can be checked in the group. (Only for validation: maximum and range)
     * @type {number}
     * @memberof TemplateCheckboxGroupsInner
     */
    max_value?: number;
    /**
     * The exact number of checkboxes that must be checked in the group. (Only for validation: exact)
     * @type {number}
     * @memberof TemplateCheckboxGroupsInner
     */
    exact_value?: number;
}



/**
 * 
 * @export
 * @interface TemplateFieldValuesInner
 */
export interface TemplateFieldValuesInner {
    /**
     * The API ID of the field in your template. This field is case sensitive.
     * @type {string}
     * @memberof TemplateFieldValuesInner
     */
    api_id: string;
    /**
     * 
     * @type {TemplateFieldValuesInnerValue}
     * @memberof TemplateFieldValuesInner
     */
    value: TemplateFieldValuesInnerValue;
}

/**
 * @type TemplateFieldValuesInnerValue
 * TextField value must be a string or a number.
 * @export
 */
export type TemplateFieldValuesInnerValue = boolean | number | string;/**
 * 
 * @export
 * @interface TemplateFieldsInnerInner
 */
export interface TemplateFieldsInnerInner {
    /**
     * Horizontal value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof TemplateFieldsInnerInner
     */
    x: number;
    /**
     * Vertical value in the coordinates of the field (in pixels). Coordinates are specific to the page where fields are located.
     * @type {number}
     * @memberof TemplateFieldsInnerInner
     */
    y: number;
    /**
     * The page number within the file. If the page does not exist within the file then the field won't be created.
     * @type {number}
     * @memberof TemplateFieldsInnerInner
     */
    page: number;
    /**
     * Unique identifier of the placeholder assigned to the field.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    placeholder_id: string;
    /**
     * 
     * @type {FieldType}
     * @memberof TemplateFieldsInnerInner
     */
    type: FieldType;
    /**
     * Whether the field must be completed by the recipient. Defaults to `true` except for checkbox type fields.
     * @type {boolean}
     * @memberof TemplateFieldsInnerInner
     */
    required?: boolean;
    /**
     * Text and Date fields only: label that is displayed when the field is empty.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    label?: string;
    /**
     * 
     * @type {AdditionalFieldsInnerInnerValue}
     * @memberof TemplateFieldsInnerInner
     */
    value?: AdditionalFieldsInnerInnerValue;
    /**
     * Unique identifier of the field. Useful when needing to reference specific field values or update a document and its fields.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    api_id?: string;
    /**
     * Checkbox fields only. At least 2 checkbox fields in an array of fields must be assigned to the same recipient and grouped with selection requirements.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    name?: string;
    /**
     * 
     * @type {TextValidation}
     * @memberof TemplateFieldsInnerInner
     */
    validation?: TextValidation;
    /**
     * Text fields with custom validation only: the regex pattern used to validate field values. Required when validation is set to custom.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    validation_regex?: string;
    /**
     * Text fields with custom validation only: the error message shown to the recipient when their input doesn't match the regex pattern. Required when validation is set to custom.
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    validation_regex_error_message?: string;
    /**
     * Text fields only: whether the field width will stay fixed and text will display in multiple lines, rather than one long line. If set to `false` the field width will automatically grow horizontally to fit text on one line. Defaults to `false`.
     * @type {boolean}
     * @memberof TemplateFieldsInnerInner
     */
    fixed_width?: boolean;
    /**
     * Date fields only: makes fields readonly and automatically populates with the date the recipient signed. Defaults to `false`.
     * @type {boolean}
     * @memberof TemplateFieldsInnerInner
     */
    lock_sign_date?: boolean;
    /**
     * 
     * @type {DateFormat}
     * @memberof TemplateFieldsInnerInner
     */
    date_format?: DateFormat;
    /**
     * Height of the field (in pixels). Maximum height varies by field type: Signature/Initials (200px), others (74px). When using text tags if the height is greater than the maximum height, the height will be set to the maximum height.
     * @type {number}
     * @memberof TemplateFieldsInnerInner
     */
    height?: number;
    /**
     * Width of the field (in pixels). For text fields, width will auto-grow unless `fixed_width` is true.
     * @type {number}
     * @memberof TemplateFieldsInnerInner
     */
    width?: number;
    /**
     * Array of dropdown options (for dropdown/select fields only)
     * @type {Array<DropdownOption>}
     * @memberof TemplateFieldsInnerInner
     */
    options?: Array<DropdownOption>;
    /**
     * Default selected option (for dropdown/select fields only)
     * @type {string}
     * @memberof TemplateFieldsInnerInner
     */
    default_option?: string;
    /**
     * Whether to allow "Other" option with text input (for dropdown/select fields only)
     * @type {boolean}
     * @memberof TemplateFieldsInnerInner
     */
    allow_other?: boolean;
}



/**
 * 
 * @export
 * @interface TemplateRecipientsInner
 */
export interface TemplateRecipientsInner {
    /**
     * A unique identifier that you will give to each recipient. We recommend numbering sequentially from 1 to X. IDs are required for associating recipients to fields and more.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    id: string;
    /**
     * Name of the recipient. Required on 21 CFR Part 11 documents: a recipient without a name returns a 422.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    name?: string;
    /**
     * Email address for the recipient. Required unless `delivery_method` is `sms`.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    email?: string;
    /**
     * The name of the placeholder you want this recipient assigned to.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    placeholder_name?: string;
    /**
     * If set, signers assigned with a passcode will be required to enter the passcode before they’re able to view and complete the document. On a 21 CFR Part 11 document SignWell generates the passcode, so a sender-defined passcode returns a 422.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    passcode?: string;
    /**
     * 
     * @type {RecipientsInnerPasscodeDelivery}
     * @memberof TemplateRecipientsInner
     */
    passcode_delivery?: RecipientsInnerPasscodeDelivery;
    /**
     * Email subject for the signature request that the recipient will see. Overrides the general subject for the template.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    subject?: string;
    /**
     * Email message for the signature request that the recipient will see. Overrides the general message for the template.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    message?: string;
    /**
     * Applies on when `embedded_signing` is `true`. By default, recipients are not notified through email to sign when doing embedded signing. Setting this to `true`  will send a notification email to the recipient. Default is `false`.
     * @type {boolean}
     * @memberof TemplateRecipientsInner
     */
    send_email?: boolean;
    /**
     * If `send_email` is `true` recipients will receive a new document notification immediately. In the case of embedded signing, you can delay this notification to only send if the document is not completed within a few minutes. The email notification will not go out if the document is completed before the delay time is over. Valid values are in minutes ranging from `0` to `60`. Defaults to `0`.
     * @type {number}
     * @memberof TemplateRecipientsInner
     */
    send_email_delay?: number;
    /**
     * How the recipient is notified and receives the signing link: `email` (default), `sms`, or `email_and_sms`. SMS delivery is available only to workspaces that are eligible for SMS and have it enabled. `email` requires `email`, `sms` requires `phone_number`, and `email_and_sms` requires both. SMS content always uses fixed system templates; `subject` and `message` apply to email notifications only. A 21 CFR Part 11 document records one verified channel per recipient: `email` and `sms` are both accepted, while `email_and_sms` returns a 422.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    delivery_method?: TemplateRecipientsInnerDeliveryMethodEnum;
    /**
     * Recipient phone number in E.164 format (for example `+14155551234`). Required when `delivery_method` is `sms` or `email_and_sms`. Only phone numbers from the country codes currently enabled for SMS are accepted.
     * @type {string}
     * @memberof TemplateRecipientsInner
     */
    phone_number?: string;
    /**
     * Applies only when `embedded_signing` is `true` and the recipient's `delivery_method` includes SMS. By default, recipients are not notified through SMS when doing embedded signing. Setting this to `true` will send the SMS notification to the recipient. Default is `false`.
     * @type {boolean}
     * @memberof TemplateRecipientsInner
     */
    send_sms?: boolean;
    /**
     * If `send_sms` is `true` the recipient will receive the SMS notification immediately. In the case of embedded signing, you can delay this notification to only send if the document is not completed within a few minutes. The SMS will not go out if the document is completed before the delay time is over. Valid values are in minutes ranging from `0` to `60`. Defaults to `0`.
     * @type {number}
     * @memberof TemplateRecipientsInner
     */
    send_sms_delay?: number;
}


/**
* @export
* @enum {string}
*/
export enum TemplateRecipientsInnerDeliveryMethodEnum {
    Email = 'email',
    Sms = 'sms',
    EmailAndSms = 'email_and_sms',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * Validation rule for text fields
 * @export
 * @enum {string}
 */
export enum TextValidation {
    NoTextValidation = 'no_text_validation',
    Numbers = 'numbers',
    Letters = 'letters',
    EmailAddress = 'email_address',
    UsPhoneNumber = 'us_phone_number',
    UsZipCode = 'us_zip_code',
    UsSsn = 'us_ssn',
    UsAge = 'us_age',
    Alphanumeric = 'alphanumeric',
    UsBankRoutingNumber = 'us_bank_routing_number',
    UsBankAccountNumber = 'us_bank_account_number',
    Custom = 'custom',
    UnknownDefaultOpenApi = '11184809'
}
/**
 * 
 * @export
 * @interface UpdateAuthenticationRequest
 */
export interface UpdateAuthenticationRequest {
    /**
     * Recipients whose authentication settings should be updated.
     * @type {Array<UpdateAuthenticationRequestRecipientsInner>}
     * @memberof UpdateAuthenticationRequest
     */
    recipients: Array<UpdateAuthenticationRequestRecipientsInner>;
}

/**
 * 
 * @export
 * @interface UpdateAuthenticationRequestRecipientsInner
 */
export interface UpdateAuthenticationRequestRecipientsInner {
    /**
     * A unique identifier that you will give to each recipient. We recommend numbering sequentially from 1 to X. IDs are required for associating recipients to fields and more.
     * @type {string}
     * @memberof UpdateAuthenticationRequestRecipientsInner
     */
    id: string;
    /**
     * Updated passcode for the recipient. If set, the signer will be required to enter the passcode before viewing and completing the document. On a 21 CFR Part 11 document SignWell generates the passcode, so a sender-defined passcode returns a 422.
     * @type {string}
     * @memberof UpdateAuthenticationRequestRecipientsInner
     */
    passcode?: string;
    /**
     * 
     * @type {UpdateRecipientsMapInnerPasscodeDelivery}
     * @memberof UpdateAuthenticationRequestRecipientsInner
     */
    passcode_delivery?: UpdateRecipientsMapInnerPasscodeDelivery;
}

/**
 * 
 * @export
 * @interface UpdateDocumentAndSendRequest
 */
export interface UpdateDocumentAndSendRequest {
    /**
     * Set to `true` to enable Test Mode. Documents created with Test Mode do not count towards API billing and are not legally binding. Defaults to `false`
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    test_mode?: boolean;
    /**
     * Only applies when `test_mode` is `true`. When `true`, and the document has an SMS-only recipient, sends the document owner a test-mode preview email (with a masked phone number) instead of the regular SMS sender-copy email. No SMS is sent and no credits are used, in test mode or otherwise. Defaults to `false`.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    send_sms_test_preview_email?: boolean;
    /**
     * The name of the document.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    name?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    subject?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template). Applies to email notifications only; SMS notifications always use fixed system templates.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    message?: string;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof UpdateDocumentAndSendRequest
     */
    expires_in?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    reminders?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    apply_signing_order?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    api_application_id?: string;
    /**
     * When set to `true` it enables embedded signing in your website/web application. Embedded functionality works with an iFrame and email authentication is disabled. :embedded_signinig defaults to `false`.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    embedded_signing?: boolean;
    /**
     * On embedding signing, document owners (and CC'd contacts) do not get a notification email when documents have been completed. Setting this param to `true` will send out those final completed notifications. Default is `false`
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    embedded_signing_notifications?: boolean;
    /**
     * 
     * @type {EmbeddedRequest}
     * @memberof UpdateDocumentAndSendRequest
     */
    embedded?: EmbeddedRequest;
    /**
     * Sets the custom requester name for the document. When set, this is the name used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    custom_requester_name?: string;
    /**
     * Sets the custom requester email for the document. When set, this is the email used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    custom_requester_email?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    redirect_url?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    allow_decline?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else. Unavailable on 21 CFR Part 11 documents: omit it and reassignment stays off, while sending `true` returns a 422.
     * @type {boolean}
     * @memberof UpdateDocumentAndSendRequest
     */
    allow_reassign?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof UpdateDocumentAndSendRequest
     */
    decline_redirect_url?: string;
    /**
     * Conditional logic rules that show, hide, or require fields based on what a signer does to other fields. Every identifier is a field api_id. At most 10 rules per document or template.
     * @type {Array<ConditionalRuleRequest>}
     * @memberof UpdateDocumentAndSendRequest
     */
    conditional_rules?: Array<ConditionalRuleRequest>;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof UpdateDocumentAndSendRequest
     */
    metadata?: { [key: string]: string | undefined; };
    /**
     * Labels can be used to organize documents in a way that can make it easy to find using the document search in SignWell. A document can have multiple labels. Updating labels on a document will replace any existing labels for that document.
     * @type {Array<LabelRequest>}
     * @memberof UpdateDocumentAndSendRequest
     */
    labels?: Array<LabelRequest>;
    /**
     * Checkbox fields that are placed on a document can be grouped with selection requirements. At least 2 checkbox fields in an array of fields must be assigned to the same recipient.
     * @type {Array<CheckboxGroupsInner>}
     * @memberof UpdateDocumentAndSendRequest
     */
    checkbox_groups?: Array<CheckboxGroupsInner>;
}

/**
 * 
 * @export
 * @interface UpdateRecipientsMapInner
 */
export interface UpdateRecipientsMapInner {
    /**
     * The recipient's unique identifier from the Get Document response.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    id: string;
    /**
     * Updated name for the recipient.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    name: string;
    /**
     * Updated email address for the recipient.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    email: string;
    /**
     * Updated email subject for the signature request that this recipient will see.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    subject?: string;
    /**
     * Updated email message for the signature request that this recipient will see.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    message?: string;
    /**
     * Updated passcode for the recipient. If set, the signer will be required to enter the passcode before viewing and completing the document. On a 21 CFR Part 11 document SignWell generates the passcode, so a sender-defined passcode returns a 422.
     * @type {string}
     * @memberof UpdateRecipientsMapInner
     */
    passcode?: string;
    /**
     * 
     * @type {UpdateRecipientsMapInnerPasscodeDelivery}
     * @memberof UpdateRecipientsMapInner
     */
    passcode_delivery?: UpdateRecipientsMapInnerPasscodeDelivery;
}

/**
 * Passcode delivery settings. Always on for 21 CFR Part 11 documents and cannot be disabled.
 * @export
 * @interface UpdateRecipientsMapInnerPasscodeDelivery
 */
export interface UpdateRecipientsMapInnerPasscodeDelivery {
    /**
     * Enable or disable passcode delivery. Cannot be set to `false` on a 21 CFR Part 11 document: it returns a 422.
     * @type {boolean}
     * @memberof UpdateRecipientsMapInnerPasscodeDelivery
     */
    enabled?: boolean;
    /**
     * Delivery methods. Defaults to ["email"].
     * @type {Array<string>}
     * @memberof UpdateRecipientsMapInnerPasscodeDelivery
     */
    methods?: Array<UpdateRecipientsMapInnerPasscodeDeliveryMethodsEnum>;
    /**
     * Clear passcode after successful authentication. If passcode_delivery is also enabled, a new passcode is auto-generated on the next send request. Otherwise the recipient will no longer need a passcode.
     * @type {boolean}
     * @memberof UpdateRecipientsMapInnerPasscodeDelivery
     */
    expire_after_access?: boolean;
}


/**
* @export
* @enum {string}
*/
export enum UpdateRecipientsMapInnerPasscodeDeliveryMethodsEnum {
    Email = 'email',
    UnknownDefaultOpenApi = '11184809'
}

/**
 * 
 * @export
 * @interface UpdateRecipientsRequest
 */
export interface UpdateRecipientsRequest {
    /**
     * List of recipients to update on the document.
     * @type {Array<UpdateRecipientsMapInner>}
     * @memberof UpdateRecipientsRequest
     */
    recipients: Array<UpdateRecipientsMapInner>;
}

/**
 * Validation error response. The errors object contains field-specific error details with dynamic keys.
 * @export
 * @interface ValidationErrorResponse
 */
export interface ValidationErrorResponse {
    /**
     * Field-specific validation errors. Keys are field names (e.g., recipients, fields, files). Values can be strings, arrays of strings, or nested objects with further field-specific errors.
     * @type {{ [key: string]: ValidationErrorValue | undefined; }}
     * @memberof ValidationErrorResponse
     */
    errors: { [key: string]: ValidationErrorValue | undefined; };
}

/**
 * @type ValidationErrorValue
 * Validation error detail. Can be a string, a list of strings, or nested field errors.
 * @export
 */
export type ValidationErrorValue = Array<string> | string | { [key: string]: ValidationErrorValue | undefined; };/**
 * Webhook subscription
 * @export
 * @interface WebhookResponse
 */
export interface WebhookResponse {
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    callback_url: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    api_application_id?: string | null;
}


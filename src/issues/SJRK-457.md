---json
{
  "title": "SJRK-457",
  "summary": "Update Login & Signup validation to use built-in i18n",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2021-02-26T17:45:29.366-0500",
  "updated": "2021-02-26T17:56:53.406-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Update the Login and Signup form validation to use the built-in i18n code provided by [fluid-json-schema](https://github.com/fluid-project/fluid-json-schema/blob/main/docs/validator.md#error-message-internationalisationlocalisation). Currently, the setup involves some customized error messages in the tool-wide l10n message bundles, though their keying system is a little backwards. There are certain validation errors that would be better to share a single message, and the structure that maps these messages to validation errors has the same keys, where these should instead have been the values and the keys would be the validation error paths, similar to how it's set up in fluid-json-schema.

The localized messages:\
<https://github.com/fluid-project/sjrk-story-telling/blob/869b48acbe2b8ee735809bfd93a8a0df3da1416f/themes/base/messages/storyMessages_en.json#L87-L96>

```javascript
"authenticationValidationErrors": {
        "error_email_blank": "The email address is required.",
        "error_email_format": "The email address format is incorrect.",
        "error_email_length": "The email address is too short, it must be at least 3 characters long.",
        "error_password_blank": "The password is required.",
        "error_password_length": "The password is too short, it must be at least 8 characters long.",
        "error_password_confirmation_blank": "The password confirmation is required.",
        "error_password_confirmation_length": "The password confirmation is too short, it must be at least 8 characters long.",
        "error_password_confirmation_mismatch": "The password and password confirmation do not match"
    },
```

The current mapping:\
<https://github.com/fluid-project/sjrk-story-telling/blob/869b48acbe2b8ee735809bfd93a8a0df3da1416f/src/ui/base-page-authentication.js#L187-L200>

```javascript
validationErrorMapping: {
            /*
             * this collection is meant to map the localized error message keys
             * to their corresponding validationResults error paths
             * the format is:
             *
             * localized_error_message_name: "error.schema.path"
             */
            error_email_blank: "properties.email.required",
            error_email_format: "properties.email.format",
            error_email_length: "properties.email.minLength",
            error_password_blank: "properties.password.required",
            error_password_length: "properties.password.minLength"
        },
```

        
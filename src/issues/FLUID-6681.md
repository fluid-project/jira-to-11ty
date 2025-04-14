---json
{
  "title": "FLUID-6681",
  "summary": "Error thrown when opening the CKEditor Rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-08-25T11:36:25.151-0400",
  "updated": "2022-02-09T09:52:48.743-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:52:45.061-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
Opening a CKEditor based rich text inline edit throws "editor.trigger is not a function" error from [line 296 of InlineEditIntegrations.js](https://github.com/fluid-project/infusion/blob/b298ba9060027c8f0eaa22e1db8e3c72855bad2c/src/components/inlineEdit/js/InlineEditIntegrations.js#L296).

 

Steps to reproduce:

1. Open the [rich text inline edit manual test](https://build-infusion.fluidproject.org/tests/manual-tests/components/inlineedit/rich/)
2. Click edit in the last inline edit field, "Rich Text Inline Edit with CKEditor 3".
3. In the console of the developer tools you'll see the "editor.trigger is not a function" error.

        
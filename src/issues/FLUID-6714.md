---json
{
  "title": "FLUID-6714",
  "summary": "InlineEditIntegrations attempts to modify an option programmatically",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-02-03T08:15:02.160-0500",
  "updated": "2022-02-09T09:52:03.487-0500",
  "versions": [],
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
      "date": "2022-02-09T09:52:03.486-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
[InlineEditIntegrations.js](https://github.com/fluid-project/infusion/blob/0b24a595780b19f7367eb42e254964e77555e1a0/src/components/inlineEdit/js/InlineEditIntegrations.js#L199) attempts to modify a component option after init. 

Steps to reproduce:

* Open the [Rich Text Inline Edit](https://build-infusion.fluidproject.org/tests/manual-tests/components/inlineedit/rich/) manual test
* Attempt to edit either of the TinyMCE examples (first two paragraphs)
* Notice this don't open
* In the console the following error is returned:

```java
Uncaught TypeError: can't define property "elements": Object is not extensible
    editModeRenderer https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEditIntegrations.js:199
    renderEditContainer https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:339
    initializeEditView https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:114
    edit https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:130
    editHandler https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:221
    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2782
    makeEditTriggerGuard https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:564
    bindMouseHandlers https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:522
    jQuery 2
InlineEditIntegrations.js:199:34
    editModeRenderer https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEditIntegrations.js:199
    renderEditContainer https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:339
    initializeEditView https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:114
    edit https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:130
    editHandler https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:221
    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2782
    makeEditTriggerGuard https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:564
    bindMouseHandlers https://build-infusion.fluidproject.org/src/components/inlineEdit/js/InlineEdit.js:522
    jQuery 2
```

        
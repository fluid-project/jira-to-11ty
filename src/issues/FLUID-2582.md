---json
{
  "title": "FLUID-2582",
  "summary": "Uploader is dependent on ProgressiveEnhancement.js, which is not included in InfusionAll.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2009-04-09T19:38:05.000-0400",
  "updated": "2010-03-30T14:19:03.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Tech. Documentation",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-06-01T09:28:52.000-0400",
      "body": "I have added mention of this file as a separate dependency in the Uploader API documentation.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:18:29.000-0400",
      "body": "This is by design: we don't know which pages will require progressive enhancement, so automatically including ProgressiveEnhancement.js in a custom build will be problematic in some cases.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:19:03.000-0400",
      "body": "Anastasia updated the documentation to alert users to the need for ProgressiveEnhancement.js.\n"
    }
  ]
}
---
ProgressiveEnhancement.js is not included in InfusionAll.js because it is executed upon being parsed. Implementations that use components that rely on progressive enhancement, such as Uploader, must manually include this file in addition to InfusionAll.js.

This issue should either be changed, or at least documented.

        
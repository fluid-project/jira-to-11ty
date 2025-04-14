---json
{
  "title": "FLUID-3885",
  "summary": "Implement backwards compatibility of Uploader's options from version 1.2 to 1.3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-09T10:27:28.724-0500",
  "updated": "2010-12-22T15:37:35.895-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3885/FLUID-3885-a.patch",
      "filename": "FLUID-3885-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3885/FLUID-3885-b.patch",
      "filename": "FLUID-3885-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-09T10:44:13.236-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-11T16:59:09.382-0500",
      "body": "This is a patch of the model transformation functionality, which should suffice for providing backwards compatibility of options in Uploader.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-12T22:57:49.492-0500",
      "body": "Here's a second version of the model transformation code, this time with full passing tests for the case of Uploader backwards compatibility.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T15:37:35.892-0500",
      "body": "This issue was implemented for Infusion 1.3 using the ModelTransformations.js and Uploader's Infusion 1.2 compatibility file.\n"
    }
  ]
}
---
The hefty refactoring that the Uploader has received in order to support HTML 5 has caused its options to change substantially. We should provide a means for ensuring that user options from Infusion 1.2 will continue to work with Uploader 1.3.

This can likely be achieved by using the Engage model transformation functions.

        
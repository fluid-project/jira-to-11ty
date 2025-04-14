---json
{
  "title": "FLUID-1946",
  "summary": "SWFUpload 2.20b3 doesn't work properly with Flash 9 and plain DHTML buttons.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-12-08T18:33:54.000-0500",
  "updated": "2008-12-18T11:39:26.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:39:26.000-0500",
      "body": "The patched file now allows browsers to work using flash 9, except in the case of IE which is now filed in <https://fluidproject.atlassian.net/browse/FLUID-1983#icft=FLUID-1983>\n"
    }
  ]
}
---
When you use SWFUpload 2.20b3 with Flash 9 and plain old DHTML buttons, an error is thrown in SWFUpload.callFlash(). This is somehow related to SWFUpload 2.2's use of the CallFunction method.

We'll need to patch SWFUpload 2.2 in cases where Flash 9 is present on the client's machine.

        
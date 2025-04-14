---json
{
  "title": "FLUID-612",
  "summary": "The single file upload in the Reference Ap (http upload) is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-19T18:20:09.000-0400",
  "updated": "2008-05-19T18:48:23.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-19T18:48:23.000-0400",
      "body": "False alarm. \\\nWhat is actually happening is that the reference app, while handling files with the same name, does not handle files with the same binary, and so throws a 500 error.\n\nWhich is good, because now we can begin to test our error handling code.&#x20;\n"
    }
  ]
}
---
Currently there is an Add Files and an Add File link in the Fluid Uploader JAVA reference application. Only the Add Files link currently works. The Add File link returns an error when you try to upload.&#x20;

        
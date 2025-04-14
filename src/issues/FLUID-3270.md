---json
{
  "title": "FLUID-3270",
  "summary": "[Uploader] Upload a Large File: no error message (Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Tona Monjo",
  "date": "2009-10-09T07:53:43.000-0400",
  "updated": "2011-01-05T15:25:35.222-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Flash 10 - FF3 - Mac OSX 10.5\\\nFlash 10 - FF3.5 - Mac OSX 10.5\\\nFlash 10 - Safari 4 - Mac OSX 10.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:25:35.220-0500",
      "body": "The SWF Uploader has been limited to a maximum size of 20MB.  Anything file size larger than the default file size limit will not be added to the file queue.\n"
    }
  ]
}
---
Test-to-fail\
Test 1: Upload a Large File\
The file doesn't upload, and no error message is displayed.&#x20;

        
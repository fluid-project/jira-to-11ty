---json
{
  "title": "FLUID-4439",
  "summary": "Remove button not disabled during upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-09-12T13:24:46.620-0400",
  "updated": "2015-06-10T10:07:12.548-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
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
      "date": "2015-06-10T10:07:12.546-0400",
      "body": "The remove button has the disabled property set.\n"
    }
  ]
}
---
From test plan: While a file is uploading, the 'x' (remove), 'Upload', and 'Add More' buttons should be disabled

Right now the 'x' is not disabled while uploading.

        
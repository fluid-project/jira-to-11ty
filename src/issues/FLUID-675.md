---json
{
  "title": "FLUID-675",
  "summary": "File Upload: Progress flashes when a file has an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-29T19:22:22.000-0400",
  "updated": "2008-12-03T11:42:00.000-0500",
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
      "date": "2008-05-30T18:48:26.000-0400",
      "body": "File upload errors now block the Upload complete so the Progress is not dismissed until the very end.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:42:00.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
On all browsers, if a file hits an error, the progress overlay briefly disappears.&#x20;

Seems that the complete code is getting called.&#x20;

        
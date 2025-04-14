---json
{
  "title": "FLUID-1978",
  "summary": "Can't remove files on the demo version (Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-15T16:05:11.000-0500",
  "updated": "2008-12-18T11:10:10.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3, IE6, Opera 9.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-15T16:05:51.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:10:10.000-0500",
      "body": "Still can't remove files via keyboard in FF3 but that is due to <https://fluidproject.atlassian.net/browse/FLUID-2021#icft=FLUID-2021>\n\nVerified Fix Using:\n\nFF3, IE7, Opera 9.5 (Win XP) with Flash 10\n"
    }
  ]
}
---
Can't remove files on the demo version (Flash 10)&#x20;

Neither the keyboard nor the mouse can be used to remove files from the file queue.

A "Call to cancelUpload failed" exception is thrown

        
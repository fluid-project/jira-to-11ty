---json
{
  "title": "FLUID-5353",
  "summary": "Uploader not responsive in IE8 (Flash 12)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2014-04-30T15:57:25.542-0400",
  "updated": "2014-05-22T14:21:25.586-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8 with Flash 12\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5354/",
      "key": "FLUID-5354"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:21:25.584-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
The Uploader demo is unresponsive in IE8: Clicking the 'Browse files' button does nothing. No errors appear on the console.

This occurs with version 12 of Flash installed.

        
---json
{
  "title": "FLOE-50",
  "summary": "Javascript error at OER Commons page load with IE8",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2012-07-30T11:14:33.928-0400",
  "updated": "2012-08-16T14:15:07.354-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "IE8 on WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2012-08-01T09:04:50.281-0400",
      "body": "Cannot reproduce. Might be caused by uncompressed css.\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T14:15:07.352-0400",
      "body": "Cannot reproduce\n"
    }
  ]
}
---
Every page load throws javascript error:

line 1, character 4583, rounded-coners-min.js, invalid argument.

        
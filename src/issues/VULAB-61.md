---json
{
  "title": "VULAB-61",
  "summary": "Fixing intermittent hang issues with uploading",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-10-27T14:14:03.000-0400",
  "updated": "2014-03-04T09:03:55.063-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-11-09T18:49:16.000-0500",
      "body": "FTP is streaming properly along with data now.  Significant code fixes were required.  Would like to refactor this eventually\n"
    }
  ]
}
---
Randomly the ftp uploading is hanging on longer uploads.  Tracking down this issue

VULAB5

        
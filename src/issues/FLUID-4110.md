---json
{
  "title": "FLUID-4110",
  "summary": "Uploader's overall progress bar inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2011-02-23T16:34:48.745-0500",
  "updated": "2015-06-09T10:53:35.851-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Mac 10.6, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:53:35.850-0400",
      "body": "The total progress bar no longer changes colour.\n"
    }
  ]
}
---
Load a bunch of files into uploader, upload/stop periodically. Sometimes the progress bar is green, sometimes the bar disappears and it is grey.

        
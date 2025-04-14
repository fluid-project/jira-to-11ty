---json
{
  "title": "FLUID-1730",
  "summary": "Uploader 2: Won't upload files below the spot where one was removed from the file queue",
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
  "date": "2008-10-29T14:01:37.000-0400",
  "updated": "2008-10-29T15:49:49.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-29T15:49:49.000-0400",
      "body": "appears to have been fixed with r5898\n"
    }
  ]
}
---
Won't upload files after below the spot where one was removed from the file queue

Steps to reproduce:

1\) Add some files to the file queue

2\) remove one of the files

3\) Upload the files.

Notice that the files that were below the one that was removed, aren't uploaded.

        
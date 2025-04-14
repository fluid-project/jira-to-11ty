---json
{
  "title": "FLUID-2212",
  "summary": "Stop Upload not working with Gears version of uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-02-09T16:08:37.000-0500",
  "updated": "2010-09-20T18:33:51.249-0400",
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
      "author": "Colin Clark",
      "date": "2010-09-20T18:33:51.238-0400",
      "body": "The Gears version of the Uploader, like Gears itself, is deprecated in favour of HTML 5.\n"
    }
  ]
}
---
Stop Upload not working with Gears version of uploader

Steps to reproduce:

1\) Open up the uploader using the gears upload manager

2\) Add several files to the upload queue

3\) Start the upload

4\) Click "Stop Upload"

Notice that the upload doesn't stop until there is only one file left in the file queue. If you add more files after, and restart the upload, it will skip the one it had stopped.

        
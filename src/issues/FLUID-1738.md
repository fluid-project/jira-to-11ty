---json
{
  "title": "FLUID-1738",
  "summary": "File indexes aren't updated in the total file progress bar when working with the server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-29T20:17:43.000-0400",
  "updated": "2011-02-22T16:27:55.402-0500",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-29T21:05:45.000-0400",
      "body": "This was fixed by simply incrementing currentBatch.fileIdx instead of trying to correspond it to SWFUpload's flaky event data structures.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.400-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
When running against the server, the Uploader doesn't correctly update the total file progress bar. Even after a successful upload, it still says "Uploading: 0 of 8 files (1.5 MB of 1.5 MB)." There's something up with currentBatch.fileIdx.

        
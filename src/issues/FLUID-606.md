---json
{
  "title": "FLUID-606",
  "summary": "As files are uploaded, total file upload size does not decrease",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T15:25:40.000-0400",
  "updated": "2008-07-11T17:42:41.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:52:39.000-0400",
      "body": "With the various changes to the way that the progress is tracked and displayed this bug is no longer relavent.&#x20;\n"
    }
  ]
}
---
While files are being uploaded, the total number of files to upload is decreased, but the total file size to upload remains the same. The total file size should also decrease with each file.

        
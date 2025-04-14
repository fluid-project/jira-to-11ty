---json
{
  "title": "FLUID-1709",
  "summary": "Refactor numReadyFiles(), sizeOfUploadedFiles(), and sizeOfReadyFiles() so that they aren't dependent on SWFUpload. Move them into FileQueue.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-25T15:04:16.000-0400",
  "updated": "2011-01-20T09:50:57.376-0500",
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
      "date": "2008-10-28T16:16:50.000-0400",
      "body": "This code has been refactored and included as part of the FileQueue object.\n"
    }
  ]
}
---

        
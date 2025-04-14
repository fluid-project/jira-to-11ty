---json
{
  "title": "FLUID-1739",
  "summary": "File sizes don't increment in the total progress bar if the uploaded files are very small",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-29T21:06:17.000-0400",
  "updated": "2008-12-03T11:55:00.000-0500",
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
      "date": "2008-10-29T21:11:13.000-0400",
      "body": "This was resolved by keeping track of the bytesUploaded for each file in SWFUploadManager. onFileSuccess, we check if that value is 0 and simply set it to the total size of the file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:55:00.000-0500",
      "body": "appears to be fixed\n"
    }
  ]
}
---
When files are too small to provoke an onFileProgress event from SWFUpload, the currentBatch.bytesUploaded is never updated. As a result, the total file progress reports that 0 KB was uploaded even when a successful batch was actually uploaded.

        
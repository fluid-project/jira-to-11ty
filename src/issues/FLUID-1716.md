---json
{
  "title": "FLUID-1716",
  "summary": "Uploader 2: Add the ability to actually upload the files to the server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-28T16:17:27.000-0400",
  "updated": "2011-02-22T16:27:49.402-0500",
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
      "date": "2008-10-28T16:19:08.000-0400",
      "body": "This has been added to SWFUploadManager and tested against the Image Gallery 2 server.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.400-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
We need to wire up the SWFUploadManager to SWFUpload's upload methods, ensuring that data is correctly passed to the server.

        
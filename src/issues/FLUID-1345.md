---json
{
  "title": "FLUID-1345",
  "summary": "Uploader 2: Add the ability for users to add files to the queue.",
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
  "date": "2008-08-28T23:41:23.000-0400",
  "updated": "2011-02-22T16:27:47.002-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
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
      "date": "2008-08-29T00:00:31.000-0400",
      "body": "Still need to get scrollability working in the queue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-09T20:36:17.000-0400",
      "body": "I've filed the problem of scrollability not working as a separate issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.001-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Users should be able to browse for files on their desktop and add files to the queue with the new Uploader 2. This requires partial implementation of:

1\. ServerUploadManager for handling the relationship with SWFUpload\
2\. FileQueue for displaying the selected files to the user in a table

dev-iteration42

        
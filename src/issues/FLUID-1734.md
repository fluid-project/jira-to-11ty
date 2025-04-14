---json
{
  "title": "FLUID-1734",
  "summary": "Uploader 2: Upload button is still clickable and functioning when file queue is empty",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-10-29T15:03:12.000-0400",
  "updated": "2008-11-17T08:53:44.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
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
      "date": "2008-10-30T19:20:16.000-0400",
      "body": "This was resolved by Eli when he added support for additional states to Uploader.js.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T10:34:20.000-0500",
      "body": "When the uploader file queue is empty you are still able to click it once, before it becomes truly disabled.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-14T16:24:34.000-0500",
      "body": "Fixed so that the initial state of the Upload button is disabled until files are added to the queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-17T08:53:44.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
Upload button is still clickable and functioning when file queue is empty

This is true when no files have been added to the file queue, after all the files have been removed from the queue, and after all files have been uploaded.

        
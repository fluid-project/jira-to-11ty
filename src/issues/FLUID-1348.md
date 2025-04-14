---json
{
  "title": "FLUID-1348",
  "summary": "Uploader 2: Provide a simulated upload, including progress indicators",
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
  "date": "2008-08-28T23:51:16.000-0400",
  "updated": "2008-10-21T23:05:51.000-0400",
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
      "date": "2008-10-21T23:05:51.000-0400",
      "body": "The DemoUploadManager has been built and fires all the necessary callbacks to enable a fully working demo. We still need to implement the progress bars in FileQueueView and Uploader, but these tasks are filed under separate JIRA issues.\n"
    }
  ]
}
---
This will involve wiring up the DemoUploadManager to a range of callbacks for the file queue and progress bars.

        
---json
{
  "title": "FLUID-1246",
  "summary": "Implement the DemoUploadManager to simulate the upload process using all of the normal SWFUpload callbacks.",
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
  "date": "2008-08-19T18:43:54.000-0400",
  "updated": "2011-02-22T16:27:51.286-0500",
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
      "date": "2008-08-19T18:44:31.000-0400",
      "body": "dev-iteration41\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-08-28T23:46:07.000-0400",
      "body": "An early version of the DemoUploadManager has been implemented and tested.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.285-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Implement the DemoUploadManager so that it resembles a typical ServerUploadManager, but simulates the upload process. This should be done transparently to the rest of the component code by simply triggering the standard SWFUpload lifecycle callbacks in the right sequence and with a realistic amount of elapsed time.

        
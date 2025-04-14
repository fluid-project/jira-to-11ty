---json
{
  "title": "FLUID-1737",
  "summary": "DemoUploadManagerTests fail when run together, but pass in isolation.",
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
  "date": "2008-10-29T19:43:15.000-0400",
  "updated": "2011-02-22T16:27:51.756-0500",
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
      "date": "2008-10-29T21:04:57.000-0400",
      "body": "This was fixed by resetting the event firers after each test.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.755-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The DemoUploadManager tests when they are run together, but in isolation they pass. There's some state that must not be getting cleaned up between test runs.

        
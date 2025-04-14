---json
{
  "title": "FLUID-1003",
  "summary": "In dialog mode, the Uploader dialog should not display until after the OS File dialog has been dismissed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-07-23T21:03:59.000-0400",
  "updated": "2008-12-03T11:48:59.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-31T16:15:29.000-0400",
      "body": "this is now the default way that the Uploader works\n"
    }
  ]
}
---
In the dialog scenario, the first time the Uploader is called, the Uploader dialog should not be displayed until after File OS dialog is dismissed and there are files to queue

        
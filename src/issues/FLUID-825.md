---json
{
  "title": "FLUID-825",
  "summary": "Set up Uploader reference server-side app on the build server so that we can test with it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-26T15:11:34.000-0400",
  "updated": "2011-01-20T15:09:50.452-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-02-09T12:40:21.000-0500",
      "body": "This was resolved back in Infusion 0.5.\n"
    }
  ]
}
---
The server-side application that was created to allow the Uploader to be tested doing **real** uploads should be set up on the build server so that we can test with it easily.

        
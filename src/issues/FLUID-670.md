---json
{
  "title": "FLUID-670",
  "summary": "File Uploader: Wire up all errors to user feedback error system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-29T11:29:59.000-0400",
  "updated": "2011-02-22T16:28:01.931-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2355/",
      "key": "FLUID-2355"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-06T13:52:00.000-0400",
      "body": "Note to myself:  we need to surface the queue errors as well as the upload errors.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-14T15:02:00.000-0400",
      "body": "New error handling features were added to Infusion 0.8 and 1.0 to support these cases.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:01.930-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Once the basic mechanism is in place for displaying errors, hook up all the other errors to use this system

        
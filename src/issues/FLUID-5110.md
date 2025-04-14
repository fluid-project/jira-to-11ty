---json
{
  "title": "FLUID-5110",
  "summary": "Table of Contents has no refresh method",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-08-08T13:09:05.327-0400",
  "updated": "2014-03-03T11:29:47.472-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-09T12:32:37.184-0400",
      "body": "Pull request submitted\\\n<https://github.com/fluid-project/infusion/pull/386>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-13T16:03:56.526-0400",
      "body": "Merged into project repo at aac67d35668680b447e00f080837b0e4035861b6\n"
    }
  ]
}
---
Currently Table of Contents has no built in method for refreshing itself. This means that if new headers are added/removed dynamically or the page is somehow reset, the table of contents is not easily updated.&#x20;

The table of contents should implement a refreshView method similar to the one used by rendererComponents.

        
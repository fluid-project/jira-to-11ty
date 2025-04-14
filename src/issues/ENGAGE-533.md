---json
{
  "title": "ENGAGE-533",
  "summary": "Refactor the startOpen and openByDefault into a single option",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-03-25T10:45:24.000-0400",
  "updated": "2014-03-03T13:44:03.629-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-25T14:05:42.000-0400",
      "body": "Remove the startOpen option. Cabinet now only uses the openByDefault selector when determining the initial state of the drawers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-25T14:05:56.000-0400",
      "body": "Assigning to Antranig for review\n"
    }
  ]
}
---
Refactor the startOpen and openByDefault into a single option

At them moment it is confusing to know which one to use and how to use them.

        
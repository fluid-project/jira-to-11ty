---json
{
  "title": "FLUID-2878",
  "summary": "Release 1.1: Before the trunk is reopened, clean DOS line ending from files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-06-01T13:16:32.000-0400",
  "updated": "2011-02-28T16:45:17.819-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2874/",
      "key": "FLUID-2874",
      "summary": "Release 1.1: Tag, package and post the release"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2727/",
      "key": "FLUID-2727",
      "summary": "screen source files for DOS line ending"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-06-02T17:22:17.000-0400",
      "body": "Ran the change line endings command from Aptana against the trunk\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.816-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Before the trunk is reopened, clean DOS line ending from files.

Note: that this should have been done during development but wasn't. So we're making sure that we start clean for 1.2

1.1-release-process

        
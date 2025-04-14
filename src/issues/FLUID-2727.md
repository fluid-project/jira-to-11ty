---json
{
  "title": "FLUID-2727",
  "summary": "screen source files for DOS line ending",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-05-14T10:25:12.000-0400",
  "updated": "2011-01-13T16:54:18.862-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2878/",
      "key": "FLUID-2878"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:25:23.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-06-01T13:55:12.000-0400",
      "body": "1.1-release-process\n\nWe're going to do this before reopening the Trunk for 1.2, so technically this becomes a 1.2 task\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-06-02T17:22:40.000-0400",
      "body": "done\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:09.925-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Run source tree through an utility like dos2unix to normalize line endings for Unix.&#x20;

        
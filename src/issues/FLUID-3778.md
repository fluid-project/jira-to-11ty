---json
{
  "title": "FLUID-3778",
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
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-10-04T15:50:09.852-0400",
  "updated": "2011-01-14T13:27:47.688-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3778/FLUID-3778-2.patch",
      "filename": "FLUID-3778-2.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:50:36.811-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-13T16:01:06.843-0500",
      "body": "Patch with DOS line endings removed.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T10:41:37.231-0500",
      "body": "I reviewed Antranig's commit for DOS line endings, ran all the unit tests, and it looks good. +1 for inclusion in 1.3.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T13:23:44.177-0500",
      "body": "Reopening these issues to add the releasecomponent.&#x20;\n"
    }
  ]
}
---
Run source tree through an utility like dos2unix to normalize line endings for Unix.&#x20;

        
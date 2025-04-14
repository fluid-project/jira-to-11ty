---json
{
  "title": "FLUID-2640",
  "summary": "Update externals in various project to reflect new SVN structure",
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
  "date": "2009-05-01T17:08:20.000-0400",
  "updated": "2011-01-20T15:24:10.241-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jorge Silva",
      "date": "2009-05-05T09:09:44.000-0400",
      "body": "Specific output is:\n\nFetching external item into 'fluid/infrastructure/gallery-build/fluid-components'\\\nsvn: URL '<https://source.fluidproject.org/svn/fluid/components/trunk>' doesn't exist\n\ndidn't see any other warnings.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-06T10:43:20.000-0400",
      "body": "I've updated all of the externals references to reflect the new SVN structure.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-06T15:46:28.000-0400",
      "body": "There may be examples in the sandbox that need to have their externals fixed.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:03:29.000-0400",
      "body": "The specific areas mentioned by Anastasia have been fixed, and any new broken externals should be filed as a specific issue. Fixed!\n"
    }
  ]
}
---
At least one of the other projects in SVN that have an external dependency on infusion has not been updated to the new SVN structure:\
infrastructure/gallery-build/\
There are probably others

        
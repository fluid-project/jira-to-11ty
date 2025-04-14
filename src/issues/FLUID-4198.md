---json
{
  "title": "FLUID-4198",
  "summary": "Remove unnecessary files migrated from svn",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-05-03T10:01:04.139-0400",
  "updated": "2011-05-04T17:10:43.613-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-04T17:10:43.611-0400",
      "body": "removed the .externals and the deployInfusionBuilder.sh at c203c34702bc6e921bbcbc216a822c3fa3a3d3d4\n"
    }
  ]
}
---
During the migration from svn to git, a couple of files were moved over that are not needed.

The .externals file is for svn only and should be removed.\
The deployInfusionBuilder.sh is an old shell script that shouldn't have been moved over as it is no longer being used.

        
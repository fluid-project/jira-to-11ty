---json
{
  "title": "FLUID-4387",
  "summary": "The build script README file instructs users to remove the default copy of Rhino from ANT_HOME instead of using the one bundled with Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-08-04T18:43:47.316-0400",
  "updated": "2011-08-05T08:35:30.281-0400",
  "versions": [
    "1.4"
  ],
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
      "date": "2011-08-05T08:34:10.754-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-05T08:35:13.550-0400",
      "body": "Merged the pull request git://github.com/colinbdclark/infusion.git into the project repo at fdddc40faa60e89b54a753fe7ba3d89c8d7acc2e\n"
    }
  ]
}
---
Currently, the build-README.txt file instructs users to remove the older copy of Rhino installed by Ant. This is something a user may choose to do, replacing it with a newer copy. But since Rhino 1.7R3 is distributed directly in the Infusion source code tree, users can equally well just use the -lib flag to specify an alternative location for Rhino.

We should update the read me file and build script wiki page to correct this.

        
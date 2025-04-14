---json
{
  "title": "ENGAGE-167",
  "summary": "Engage's version number wasn't  updated from 0.1-SNAPSHOT to 0.1 before cutting the Engage 0.1 tag",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-10-22T18:41:13.000-0400",
  "updated": "2009-11-03T10:56:42.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-22T18:41:22.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T10:56:42.000-0500",
      "body": "This has been completed at r8467\n"
    }
  ]
}
---
In Engage server's pom.xml file, we forgot to update the artifact version number from 0.1-SNAPSHOT to 0.1. This also needs to be updated in the Ant build's build.xml file. This is a blocker for Engage 0.1's release.

        
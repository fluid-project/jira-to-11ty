---json
{
  "title": "ENGAGE-133",
  "summary": "The default image should live within the browse directory.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-20T15:28:10.000-0400",
  "updated": "2009-11-24T14:50:28.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View",
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-24T14:50:28.000-0500",
      "body": "Moved the default image to the Browse component's images directory.\n"
    }
  ]
}
---
The default image (no\_image\_64x64.png) should live within the browse directory

Currently it is stored within the artifactView directory, but isn't used by that component

        
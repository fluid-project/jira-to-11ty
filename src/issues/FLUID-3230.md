---json
{
  "title": "FLUID-3230",
  "summary": "remove setTimeout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-06T09:22:42.000-0400",
  "updated": "2009-11-02T15:36:22.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Remove the window\.setTimeout from CustomBuild.html. We can't remember why this is in there!

        
---json
{
  "title": "FLUID-5094",
  "summary": "Dynamic grade merging takes the undefined source that is passed in by IoCSS into account rather than ignoring it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-07-18T14:59:07.377-0400",
  "updated": "2013-07-31T10:33:00.262-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-07-31T10:32:56.599-0400",
      "body": "Merged into the master @ 81831f9fdf80cff097896a30fcb9dc0461a46abb\n"
    }
  ]
}
---
In the case that IoCSS passes a source that is resolved as "undefined" into a subcomponent, meanwhile this subcomponent has a dynamic grade with a components block that needs to be merged. The undefined IoCSS source is taken into account at the components merging rather than being ignored.

The test case is created at: <https://github.com/fluid-project/infusion/pull/365>

        
---json
{
  "title": "FLUID-4906",
  "summary": "Redefine UIO store as a more common data source",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2013-01-18T14:49:08.392-0500",
  "updated": "2013-10-04T09:18:48.857-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-06-12T11:20:52.865-0400",
      "body": "Fixed as part of work for <https://fluidproject.atlassian.net/browse/FLUID-4686#icft=FLUID-4686>.\n"
    }
  ]
}
---
All implementations of the UIO store should share a common implementation of a data source. Currently some of the implementation (e.g. AFA store) are also responsible for settings transformation between the UIO and other formats.

        
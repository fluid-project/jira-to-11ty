---json
{
  "title": "FLUID-4710",
  "summary": "Fixing UIO Panel to be more accessible by the screenreaders",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Alexey Novak",
  "date": "2012-05-18T13:10:04.063-0400",
  "updated": "2013-10-04T09:21:06.811-0400",
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
      "author": "Justin Obara",
      "date": "2013-10-04T09:21:06.801-0400",
      "body": "Should have been resolved with <http://issues.fluidproject.org/browse/FLUID-4718>\n"
    }
  ]
}
---
UIO - text style and colour contrast have no labels because their labels' "for" attributes are linked with the dropdown "name" attributes rather than "id".

        
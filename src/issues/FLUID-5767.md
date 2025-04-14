---json
{
  "title": "FLUID-5767",
  "summary": "Tables don't scale nicely on mobile layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2015-09-15T14:03:43.419-0400",
  "updated": "2024-07-31T14:18:25.460-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:18:20.014-0400",
      "body": "I believe this was related to our old docs platform which was redesigned after moving to 11ty.\n"
    }
  ]
}
---
Tables in the docs platform do not scale nicely on mobile layouts. They end up bleeding over the edge and require sideways scrolling to see all the content.

For example: the page StandardizedTestTools on the ILDH has a table which does this.

        
---json
{
  "title": "FLUID-4003",
  "summary": "Table of Contents includes headers from UIOptions panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-21T16:05:25.500-0500",
  "updated": "2011-10-14T16:09:51.785-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4001/",
      "key": "FLUID-4001",
      "summary": "Table of Contents shows hidden items"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4001/",
      "key": "FLUID-4001",
      "summary": "Table of Contents shows hidden items"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:44:46.212-0400",
      "body": "Bug Parade Infusion\n"
    }
  ]
}
---
When UI Options is used to turn "table of contents" on, the resulting table of contents includes the headers from the now-hidden UI Options panel itself, i.e. "Easier to See", "Easier to Find"

        
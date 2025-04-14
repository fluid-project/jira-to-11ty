---json
{
  "title": "FLUID-4172",
  "summary": "fl-list-menu causes scrollbars on items when theme applied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "heidi valles",
  "date": "2011-04-04T10:18:26.108-0400",
  "updated": "2011-04-14T11:27:09.938-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": "FF3.6 mac, FF3.6 win xp\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-04-12T10:05:15.374-0400",
      "body": "Branch up at <https://github.com/heidiv/infusion/tree/FLUID-4172>  - removes over:flow auto from fl-list-menu li and a in fss-layout.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T10:06:45.431-0400",
      "body": "Can you review Justin? Thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-14T11:27:09.937-0400",
      "body": "Merged into the project repo at 7470a4b2af03b478a4377b6bdb44bb5308ee323f\n"
    }
  ]
}
---
When adding fl-theme-mist to my page, a fl-list-menu item gets scrollbars when clicked on or tabbed-to.&#x20;

Do we need overflow:auto on list items and links?

        
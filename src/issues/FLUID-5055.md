---json
{
  "title": "FLUID-5055",
  "summary": "can't reorder elements with the arrow keys when NVDA is on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-06-14T12:17:33.734-0400",
  "updated": "2017-09-26T12:39:06.817-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "NVDA 2013.1, FF 21\\\nFF 55 (NVDA 2017.3, Win 7)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5056/",
      "key": "FLUID-5056"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5419/",
      "key": "FLUID-5419"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:06:12.493-0400",
      "body": "It's likely that NVDA is capturing ctrl+(arrow) for its own use. We should double-check this, and if so, consider closing this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:32:11.509-0400",
      "body": "I wonder if it may have to do with the screenreader being in the wrong mode, because the ctrl-arrow combination works in the grid reorderer demo. I guess it could also have to do with the markup of the demos and/or of the items being reordered.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the layout reorderer demo with NVDA on\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

2\) Move focus to one of the movable portlets.

3\) Attempt to reorder portlets using ctrl+(arrow).\
Notice that the portlets do not reorder.&#x20;

\*\*They do reorder with the letter keys (i, j, k, m). Also the grid reorderer demo works with letters and arrows. \
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/html/gridReorderer.html>

        
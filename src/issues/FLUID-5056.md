---json
{
  "title": "FLUID-5056",
  "summary": "When NVDA is on, can't move between portlets",
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
  "date": "2013-06-14T12:21:51.881-0400",
  "updated": "2017-09-26T12:38:39.010-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "NVDA 2013.1, FF21\\\nFF 55 (NVDA 2017.3, Win 7)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5055/",
      "key": "FLUID-5055",
      "summary": "can't reorder elements with the arrow keys when NVDA is on"
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
      "author": "Justin Obara",
      "date": "2015-06-15T10:32:46.534-0400",
      "body": "May have to do with the mode the screen reader is in.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the layout reorderer demo with NVDA on\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

2\) Put focus on one of the reorderable portlets

3\) use the arrow or letter (i, j, k, m) keys to attempt to move focus around the portlets\
Notice that the keys either have no affect or perform the incorrect action.

*
  * note you can reorder with ctrl+letter(i,j,k,m) and the grid reorderer demo works correctly.\
    <http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/html/gridReorderer.html>

        
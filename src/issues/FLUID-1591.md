---json
{
  "title": "FLUID-1591",
  "summary": "Springboards: Moving reordereable list elements on a page causes the reorderable grid to display incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-18T17:26:12.000-0400",
  "updated": "2011-01-14T09:53:24.164-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1591/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-18T17:28:03.000-0400",
      "body": "'screenshot-1' shows the incorrect formating of the sortable grid after one of the sortable list examples has been reorderer\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:59:40.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-22T15:17:53.000-0400",
      "body": "Existed due to a bug in IE6 handling of margins as percentages and floating. \\\n(please see: <http://www.positioniseverything.net/explorer/percentages.html>)\n\nFixed by using pixels instead\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T15:29:16.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
Moving  a reordering items in example 1 and 2 will cause the example 3 to display with two columns instead of three.

Steps to reproduce:

1\) Open the Reorderer Springboard from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Reorderer the elements in either example 1 or example 2.

Notice that Example three changes to be a grid with two columns instead of three

Putting focus on a grid cell in example 3 will change it back to a 3 column grid

        
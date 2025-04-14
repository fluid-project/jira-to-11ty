---json
{
  "title": "FLUID-2509",
  "summary": "Individual Tabs should not be in the tab order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-04-03T14:20:17.000-0400",
  "updated": "2011-01-14T09:53:27.897-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-05T14:54:43.000-0500",
      "body": "This example no longer exists\n"
    }
  ]
}
---
Individual Tabs should not be in the tab order

Steps to reproduce:

1\) Open the Reorderer quick start example

2\) Tab around the page, notice that Tabs are in the tab order, when only thier container should be. You should use the arrow or other defined navigation keys to move between the tabs

        
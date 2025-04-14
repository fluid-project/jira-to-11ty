---json
{
  "title": "FLUID-541",
  "summary": "Dragging a portlet to an empty column or below the last element in a column results in the portlet being too wide and lower in the column than it should be.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-04-28T14:23:20.000-0400",
  "updated": "2011-01-30T12:07:20.671-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP), IE7 (WinXP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-541/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-541/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-04-28T14:26:23.000-0400",
      "body": "screeenshot-1 shows a portlet after it has been dropped in an empty column. Note that it fills the entire column, touching the portletson the left. It is also offset from the top of the column.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-28T14:29:14.000-0400",
      "body": "screenshot-2 shows an example of the incorrect drop target at the bottom of a column. Note that it stretches the width of the column and is lower in position than the correct drop target should be.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-29T09:44:13.000-0400",
      "body": "This was a styling issue that is now fixed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-30T22:53:54.000-0400",
      "body": "verified in IE6 (WinXP)\n"
    }
  ]
}
---
Dragging a portlet to an empty column results in the portlet being too wide and lower in the column than it should be. The portlet will be the entire width of the column. When you are dragging an element below the last element in a column, there are two possible drop targets. The correct one, just below the last element, and the incorrect one, which will also cause the above problem, a little further down.

Test Site: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/portal/portal.html>

        
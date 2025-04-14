---json
{
  "title": "FLUID-1555",
  "summary": "Focus styling not applied to movable portlets on mouse click",
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
  "reporter": "Justin Obara",
  "date": "2008-09-15T14:08:01.000-0400",
  "updated": "2008-09-18T09:41:02.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-15T14:08:31.000-0400",
      "body": "In safari 3.1 (Mac OS 10.5) the focus styling isn't applied to the locked portlet either\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T01:55:20.000-0400",
      "body": "Fixed at revision 5577\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:41:02.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n"
    }
  ]
}
---
Focus styling not applied to movable portlets on mouse click

Steps to reproduce:

1\) Open the the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Use the mouse to click on the title bar of any of the movable portlets. Notice that no focus styling is applied&#x20;

Note that if you click on the locked portlet, the focus styling will be applied to it.

        
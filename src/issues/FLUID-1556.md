---json
{
  "title": "FLUID-1556",
  "summary": "Moving keyboard selection in the direction of an empty column causes portlet to lose focus",
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
  "date": "2008-09-15T14:28:09.000-0400",
  "updated": "2008-09-17T10:15:04.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1557/",
      "key": "FLUID-1557"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T01:09:39.000-0400",
      "body": "Actually this really affected all environments - there was a Firebug error on Firefox plaforms. Fixed at revision 5551.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T10:15:04.000-0400",
      "body": "Verified fix using:&#x9;\n\nIE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
Moving keyboard selection in the direction of an empty column causes portlet to lose focus. The focus should remain on the portlet.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Move all of the movable portlets below the locked portlet

3\) With one of the portlets having focus, press the arrow key in the direction of the empy column. Notice that focus is removed from the portlet

        
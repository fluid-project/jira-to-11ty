---json
{
  "title": "FLUID-1535",
  "summary": "Can use the keyboard to move a portlet above a locked portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-10T11:18:35.000-0400",
  "updated": "2008-09-11T09:03:14.000-0400",
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
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1535/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-10T11:21:42.000-0400",
      "body": "'screenshot-1' shows the calendar portlet above the locked portlet\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T14:31:46.000-0400",
      "body": "Fixed at revision 5503\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:03:14.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Can use the keyboard to move a portlet above a locked portlet

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Tap the tab key until one of the portlets has focus

3\) Use the arrow keys to put focus on a moveable portlet

4\) Use ctrl+(arrow key) to move the portlet above the locked portlet. Notice that you are able to place a portlet over the locked portlet.

        
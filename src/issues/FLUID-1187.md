---json
{
  "title": "FLUID-1187",
  "summary": "Pointer doesn't change style immediately when over portlet title bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-08-18T11:15:00.000-0400",
  "updated": "2008-09-23T15:59:45.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1187/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:09:27.000-0400",
      "body": "'screenshot-1' shows the pointer remaining as an arrow over the portlet's title bar.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T11:55:32.000-0400",
      "body": "It appears that the title bar extends too high and this extension is not a draggable region\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:58:57.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-23T15:03:41.000-0400",
      "body": "portlet-top now includes cursor:move&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-23T15:52:11.000-0400",
      "body": "I code reviewed revision 5656 and it looks fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T15:59:45.000-0400",
      "body": "Verified fix using:\n\nIE 6 (Win XP)\n"
    }
  ]
}
---
When you place the pointer over the title bar of a movable portlet, it takes a little bit longer for the cursor to change. This means that if you are attempting to move portlets quickly, you can miss picking it up when you starting DnD.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Place the pointer over the title bar of a movable portlet. Notice there is a brief delay before the cursor changes style.

dev-iteration43

        
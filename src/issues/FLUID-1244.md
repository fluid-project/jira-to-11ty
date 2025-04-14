---json
{
  "title": "FLUID-1244",
  "summary": "Portlet drops to bottom of column when drop target not visible",
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
  "date": "2008-08-19T15:43:42.000-0400",
  "updated": "2008-09-08T09:47:11.000-0400",
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
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1243/",
      "key": "FLUID-1243",
      "summary": "Can't drop portlet in white space between portlets, eventhough drop target present"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1244/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1244/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-19T15:47:17.000-0400",
      "body": "'screenshot-1' shows where to drop the portlet, so that it snaps back to the original location. Note that the pointer is inside the title bar but does not display in the screenshot\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-19T15:48:14.000-0400",
      "body": "'screenshot-2' shows the portlet in the same position as in 'screenshot-1', but this time the drop target does not appear\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-20T14:25:24.000-0400",
      "body": "appears to have been created as part of the work around for Fluid-1140 in r5392\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:26:58.000-0400",
      "body": "Fixed with changes at rev 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:47:11.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) drag the calendar portlet and release it when the pointer is over the white space between the drop target and the portlet above. Notice that it snaps back to the original location.

3\) drag the calendar portlet to the same location. Notice that this time the drop target doesn't appear.&#x20;

4\) drop the portlet at this location. Notice that the portlet is placed at the bottom of the column

dev-iteration42

        
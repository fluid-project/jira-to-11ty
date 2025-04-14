---json
{
  "title": "FLUID-1243",
  "summary": "Can't drop portlet in white space between portlets, eventhough drop target present",
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
  "date": "2008-08-19T15:40:35.000-0400",
  "updated": "2008-09-08T09:42:02.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1244/",
      "key": "FLUID-1244"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1243/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-19T15:46:44.000-0400",
      "body": "'screenshot-1' shows where to drop the portlet, so that it snaps back to the original location. Note that the pointer is inside the title bar but does not display in the screenshot\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-20T14:25:12.000-0400",
      "body": "appears to have been created as part of the work around for Fluid-1140 in r5392\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:16:16.000-0400",
      "body": "Fixed with \"Geometric Manager\" @ rev 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:42:02.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Can't drop portlet in white space between portlets, eventhough drop target present

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) drag the calendar portlet and release it when the pointer is over the white  space between the drop target and the portlet above. Notice that it snaps back to the original location.

dev-iteration42

        
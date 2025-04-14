---json
{
  "title": "FLUID-1597",
  "summary": "Springboards: Avatar for draggable portlets in example 3, is the size of the tallest column",
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
  "date": "2008-09-19T10:42:37.000-0400",
  "updated": "2011-01-14T09:53:24.346-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos"
  ],
  "environment": "Safari 3.1 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1597/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T10:43:41.000-0400",
      "body": "'screenshot-1' shows the avatar displayed with the incorrect size\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-19T15:23:57.000-0400",
      "body": "Various attempts at determining the item height via JQuery all produced the same useless results, this has been resolved via a browser detect for Safari.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T11:02:21.000-0400",
      "body": "Verified fix using:\n\nSafari 3.1 (Mac OS 10.5)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:59:14.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    }
  ]
}
---
Avatar for draggable portlets in example 3, is the size of the tallest column

Steps to reproduce:

1\) Open the layout customizer springboard from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/LayoutCustomizer.html>

2\) Drag a movable portlet in example 3

Notice that it is the same size as the tallest column

        
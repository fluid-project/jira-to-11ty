---json
{
  "title": "FLUID-1247",
  "summary": "Nested reorderer freezes during Drag and drop",
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
  "date": "2008-08-20T09:14:53.000-0400",
  "updated": "2008-09-08T09:39:34.000-0400",
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
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1247/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-20T09:15:56.000-0400",
      "body": "'screenshot-1' shows the lightbox portlet frozen over the drop target\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:14:58.000-0400",
      "body": "Michelle put in an interim fix for this issue for 0.5 beta, but it is gone post \"Geometric Manager\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:39:34.000-0400",
      "body": "verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
When attempting to move a portlet with a nested reorderer, it freezes over the drop target.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag two porlets from the right column over top of the Lightbox portlet

3\) Attempt to drag and drop the lightbox portlet above or between these portlets. Notice that the lightbox portlet freezes over top of the drop target.

dev-iteration42

        
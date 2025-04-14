---json
{
  "title": "FLUID-2517",
  "summary": "Focus styling stays on portlet, when a nested reorderable inside a different portlet is being moved",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-04T10:07:04.000-0400",
  "updated": "2014-06-05T15:22:22.314-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Safari 5 (Mac OS 10.6)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:22:22.312-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Focus styling stays on portlet, when a nested reorderable inside a different portlet is being moved

Steps to reproduce:

1\) Open the uPortal mock-up

2\) Move one of the portlets, other than the one containing the Image Reorderer

3\) Move one of the images in the portlet with the image reorderer

Notice that the focus styling remains on the other portlet and is also displayed on the image that was moved.

        
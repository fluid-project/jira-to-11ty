---json
{
  "title": "FLUID-1479",
  "summary": "Moving an item in the lightbox causes formating issues",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-08T10:44:41.000-0400",
  "updated": "2008-09-09T09:00:33.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Safari 3 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1482/",
      "key": "FLUID-1482"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1483/",
      "key": "FLUID-1483"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1479/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T10:45:51.000-0400",
      "body": "'screenshot-1' shows the formatting issues as a nested reordererable in the uPortal example. Notice the way the Kiwano looks\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:00:33.000-0400",
      "body": "Appears to have been resolved with along with fix for Fluid-1484\n\nVerified resolved with:\n\nSafari 3 (Mac OS 10.5)\n"
    }
  ]
}
---
Moving an item in the lightbox causs formating issues. This happens in both the standalone version and as a nested reorderable in the uPortal example

Steps to reproduce:

1\) Open the lightbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Move one of the images

3\) Notice that the formatting is improper. You may have to move the pointer off of the lightbox to see it.

        
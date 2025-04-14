---json
{
  "title": "FLUID-1539",
  "summary": "Nested reorderer's portlet title is partially hidden after keyboard reorderering, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-10T14:17:36.000-0400",
  "updated": "2014-06-05T15:21:53.286-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
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
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1539/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Simon Simon",
      "date": "2008-09-10T18:51:22.000-0400",
      "body": "I could not even see any of the portlet icons with IE 6. But FF2 is fine.\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-09-10T19:10:17.000-0400",
      "body": "I tried using IE6 to view uPortal 3 page, and all the portlet icons show up correctly. But I could not see if any of the portlet is \"get focus\". While FF2 shows everything correctly. It looks that this could be another styling issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:21:53.272-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Keyboard reordering all portlets to left column causes the "Image Lightbox" portlet's title to be partially hidden below the portlet's icon.

steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html>

2\) Using the keyboard, move all of the portlets from the right side to the left.&#x20;

Notice that the Title for the "Image Lightbox" is partly hidden by the portlet's icon

Note that this doesn't occur when you reorder using the mouse.

        
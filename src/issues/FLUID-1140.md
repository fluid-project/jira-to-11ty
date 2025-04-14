---json
{
  "title": "FLUID-1140",
  "summary": "Portlet avatar freezes when dropped while the pointer is just higher than the drop marker",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-13T13:16:13.000-0400",
  "updated": "2008-08-22T15:30:44.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1137/",
      "key": "FLUID-1137"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1140/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1140/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-13T13:18:17.000-0400",
      "body": "'screenshot-1' shows the avatar frozen over the drop target\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-13T13:19:05.000-0400",
      "body": "'screenshot-2' shows all of the moveable portlets frozen over a drop target\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-22T15:30:44.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
When dragging a portlet's avatar, if you drop it when the pointer is just higher than the top edge of the drop target, the avatar freezes.

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Start dragging a portlet

3\) Attempt to drop when the pointer is just higher than the drop target. That is, the bottom edge of the pointer is resting on the top edge of the drop target. For an arrow, it is the bottom of the lowest point, not the bottom of the tail.

4\) Notice that the avatar is frozen where you released the mouse.

        
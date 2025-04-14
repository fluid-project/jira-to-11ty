---json
{
  "title": "FLUID-895",
  "summary": "Keyboard navigation instructions move to the right edge of the screen, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-11T19:24:34.000-0400",
  "updated": "2009-11-04T11:56:15.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-894/",
      "key": "FLUID-894",
      "summary": "Avatar moves offscreen and away from pointer, at screen edges; using IE"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1287/",
      "key": "FLUID-1287"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-895/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-11T19:26:59.000-0400",
      "body": "'screenshot-1' shows the keyboard navigation instructions snapped to the right edge of the browser\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T11:56:15.000-0500",
      "body": "These instructions no longer appear in the new demo. If they are added again, this issue may reappear. If that is the case, this should be reopened.\n"
    }
  ]
}
---
While dragging the avatar, when you reach the right or bottom edge of the screen, the avatar flies off screen and the scroll bars continue to grow. When you drag away from the edges, the avatar remains far away from the pointer until the pointer is over the lightbox. At this time the keyboard navigation instructions snap to the right edge of the screen, instead of being stationary above the lightbox. It will move back as you scroll back or move the mouse over the lightbox images.

Steps to reproduce:

1\) open the generic lightbox example

2\) drag an element to either the right side of the screen

3\) notice that as the scroll bars increase, the avatar disappears further and further off screen

4\) while still holding down the mouse button attempt to drag the avatar back. Notice that the avatar remains far away from the pointer, until the pointer is over top of the lightbox.

5\) notice now that the keyboard interaction instructions have snapped to the right edge of the browser.

6\) scroll the horizonal scroll bar left, or move the mouse over the images. Notice that the keyboard instructions move back to the correct location

        
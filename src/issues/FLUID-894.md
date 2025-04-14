---json
{
  "title": "FLUID-894",
  "summary": "Avatar moves offscreen and away from pointer, at screen edges; using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-11T19:15:22.000-0400",
  "updated": "2009-02-03T14:25:22.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1755/",
      "key": "FLUID-1755"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1287/",
      "key": "FLUID-1287"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-118/",
      "key": "FLUID-118"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-895/",
      "key": "FLUID-895"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-11T19:59:48.000-0400",
      "body": "Just to clarify point # 4 above, the avatar returns toward the cursor as the scroll bar reduces in size. It isn't actually related to whether or not the pointer is over top of the lighbox, but rather whether or not there is a scroll bar.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-03T14:25:22.000-0500",
      "body": "Appears to have been fixed at r6398 as part of  the jQuery upgrade (<https://fluidproject.atlassian.net/browse/FLUID-2180#icft=FLUID-2180>)\n\nTested using:\\\nIE 6 (Win XP, Win 2000)\\\nIE 7 (Win XP, Win Vista)\n"
    }
  ]
}
---
While dragging the avatar, when you reach the right or bottom edge of the screen, the avatar flies off screen and the scroll bars continue to grow.\
When you drag away from the edges, the avatar remains far away from the pointer until the pointer is over the lightbox.

Steps to reproduce:

1\) open the generic lightbox example

2\) drag an element to either the right side or bottom edge of the screen

3\) notice that as the scroll bars increase, the avatar disappears further and further off screen

4\) while still holding down the mouse button attempt to drag the avatar back. Notice that the avatar remains far away from the pointer, until the pointer is over top of the lightbox.

        
---json
{
  "title": "FLUID-909",
  "summary": "Browser width affects the arrangement of reorderable elements while dragging the avatar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-07-16T13:19:30.000-0400",
  "updated": "2008-10-31T09:11:11.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-909/909-Drag_bug_after.png",
      "filename": "909-Drag_bug_after.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-909/909-Drag_bug_before.png",
      "filename": "909-Drag_bug_before.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-909/FLUID-909-Misplaced_Avatar.jpg",
      "filename": "FLUID-909-Misplaced_Avatar.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-909/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-909/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T13:21:19.000-0400",
      "body": "\"screenshot-1\" shows the additional space at the end of a row\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-16T13:22:24.000-0400",
      "body": "\"screenshot-2\" shows the additional row created when trying to drag to the avatar to the end of a row\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T15:14:17.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-22T15:31:51.000-0400",
      "body": "drop marker was taking up too much space, so its now utilizing the same technique as fluid.states.css drop marker to have no impact on layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T15:39:53.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T08:52:02.000-0400",
      "body": "Needed to add fix version\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T08:52:11.000-0400",
      "body": "Needed to add fix version\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-25T15:38:16.000-0400",
      "body": "This bug is back but not quite the same as before. See the screen shots above. &#x20;\n\n909-Drag\\_bug\\_before.jpg and 909-Drag\\_bug\\_after.jpg\n\nI saw this on FF3 on both Mac and Windows. The window was six across in rows 1 and 2, two across in row 3 with the window width just barely wide enough to accommodate the six images.&#x20;\n\nWhen dragging an image to the bottom of the window below row 3 then the images in rows 1 and 2 will shift down to the next row.\n\nOn Windows there is an additionally oddity, perhaps a different bug but related. When grabbing the image when the window is in this \"tight\" state, the avatar is sometimes offset from the pointer, extremely so for the rightmost images. (I will try to get a screenshot.)\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-25T17:25:01.000-0400",
      "body": "Added a screenshot for the misplaced avatar. Unfortunately the screenshot did not capture the pointer. However from the position of the drop target you can kinda get the idea of just how off it was.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:11:11.000-0400",
      "body": "Appears to have been fixed with one of the updates to the Image Reorderer. May have had something to do with the drop target size.\n"
    }
  ]
}
---
The extra spaces (it looks like invisible elements)  are added at the end of the row while dragging the avatar. It only  seems to be occuring in when the browser width is \***JUST**\* big enough to hold the elements in their arangement.&#x20;

Steps to reproduce:

1\) open the generic light box example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) adjust the browser size so that it is \***JUST**\* wide enough to hold two full rows and a third row with only 2 elements

3\) attempt to drag an element. Notice that the row it is over, has an empty space at the end, which pushes the other elements forward.

4\) attempt to drag an element at the end of the row. Notice that there is now a new row created, which is completely blank except for the last element.

        
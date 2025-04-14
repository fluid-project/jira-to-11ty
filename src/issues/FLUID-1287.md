---json
{
  "title": "FLUID-1287",
  "summary": "Infinite drag of avatar when scrolling on white space.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Joseph Vernuccio",
  "date": "2008-08-21T10:42:26.000-0400",
  "updated": "2017-01-16T09:29:57.138-0500",
  "versions": [
    "0.4",
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
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nSafari 5 (Mac OS 10.6)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2019/",
      "key": "FLUID-2019"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-894/",
      "key": "FLUID-894",
      "summary": "Avatar moves offscreen and away from pointer, at screen edges; using IE"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-895/",
      "key": "FLUID-895",
      "summary": "Keyboard navigation instructions move to the right edge of the screen, using IE6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-08T11:18:49.000-0500",
      "body": "Daniel McCallum on the Infusion-Users list was indicating that they would like to be able to constrain the dragging of the item within a container.\n\n<http://fluidproject.org/pipermail/infusion-users/2009-December/000101.html>\n\nOn line 315 of Reorderer.js we are using jquery's draggable. \\\nWe could add the \"containment\" option.\n\n<http://jqueryui.com/demos/draggable/#constrain-movement>\n\nAllowing the user to specify a container, and possibly defaulting to the components container.\n"
    }
  ]
}
---
When moving an image into to white space, the image will continue to drag into white space infinitely.&#x20;

Steps to reproduce: \
1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>

2\) Using mouse hover over image&#x20;

3\) Using the mouse, press and hold 'left-mouse button' down

4\) Using the mouse, drag an image into white space and to the edge of the browser window, until it begins to scroll down. The image will continue to be dragged into white space (and window will continue to scroll) until 'left mouse button' or 'crtl' button is released.&#x20;

Possible Solutions:&#x20;

* Don't allow for scrolling out of frame.&#x20;

        
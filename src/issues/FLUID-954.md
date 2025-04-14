---json
{
  "title": "FLUID-954",
  "summary": "Page won't scroll during DnD, using Opera",
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
  "date": "2008-07-21T15:11:18.000-0400",
  "updated": "2009-02-03T12:56:49.000-0500",
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
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1757/",
      "key": "FLUID-1757"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-03T12:56:49.000-0500",
      "body": "Appears to have been fixed at r6398 as part of the upgrade to jQuery (<https://fluidproject.atlassian.net/browse/FLUID-2180#icft=FLUID-2180>)\n\nTested with:\\\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
The browser won't autoscroll when dragging avatar. This means you are unable to see drop targets which are scrolled off the screen.

Steps to reproduce:

1\) Open the generic lightbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>

2\) Adjust the browser size so that elments are off the screen

3\) Attempt to drag an element to a drop target that isn't currently visible on the screen. Notice that the browser won't scroll.

On Mac OS 10.5 you are able to get the browser to scroll if you drag the element outside of the screen

Strangely, Opera will scroll the browser, if there were no scroll bars before.

        
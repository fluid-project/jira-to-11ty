---json
{
  "title": "FLUID-460",
  "summary": "Top level reoderable elements move down the page.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-04-07T13:20:41.000-0400",
  "updated": "2008-04-28T14:14:26.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FireFox 2 (Mac OS 10.5, WinXP), IE7 (WinXP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-460/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-460/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-460/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-04-07T13:28:35.000-0400",
      "body": "screenshot-1 shows the starting position of the elements, and the format they should appear in.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-07T13:30:49.000-0400",
      "body": "screenshot-2 shows the error after a few attempts of drag & drop\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-07T13:32:06.000-0400",
      "body": "screenshot-3 shows an example of where to drop the element to cause the issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:14:26.000-0400",
      "body": "This example has been retired. There is an example of nested reorderers in the portlets example.&#x20;\n"
    }
  ]
}
---
Attempting to drag and drop an element over another, the second element moves down in the page, but the dragged element snaps back to it's original location. On all subsequent attempts both elements continue to move down the page.&#x20;

This only seems to be the case for the first level reodreable elements and not their nested elements.

Link: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/RSFStyleScheduler.html>

        
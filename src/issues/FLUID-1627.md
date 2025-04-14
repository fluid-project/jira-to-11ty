---json
{
  "title": "FLUID-1627",
  "summary": "Focus styling border artifacts persists during keyboard drag and drop in a vertical list: using Opera",
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
  "date": "2008-09-26T11:16:00.000-0400",
  "updated": "2014-07-07T15:38:17.806-0400",
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
    "Demos",
    "Reorderer"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1627/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-26T11:16:52.000-0400",
      "body": "'screenshot-1' shows the blue border above and below the list\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:38:17.792-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
Focus styling border artifacts persists during keyboard drag and drop in a vertical list.

Steps to reproduce:

1\) Open the sortable vertical list demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Press the tab key until one of the list items has focus

3\) Using the keyboard move an item through all of the positions in the list and back to it's original spot.

Notice the Blue border above and below the list

        
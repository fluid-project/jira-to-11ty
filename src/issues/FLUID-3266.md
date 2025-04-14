---json
{
  "title": "FLUID-3266",
  "summary": "No focus styling on reorderable elements in the gird reorderer demo: using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2009-10-08T18:47:54.000-0400",
  "updated": "2014-07-14T09:32:32.997-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:55:47.054-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:32:32.995-0400",
      "body": "The issue isn't present in IE 11, and IE 7 is no longer a supported browser.\n"
    }
  ]
}
---
No focus styling on reorderable elements in the gird reorderer demo

Steps to reproduce:

1\) Open the grid reorderer demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/demo.html>

2\) Using the keyboard tab to a reorderable element

Notice that the reorderable elements don't get focus styling, but you can reorderer them with the keyboard.

        
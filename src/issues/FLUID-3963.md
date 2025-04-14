---json
{
  "title": "FLUID-3963",
  "summary": "Can't reorderer with the mouse: IE9",
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
  "date": "2010-12-20T11:42:02.637-0500",
  "updated": "2014-04-02T15:45:17.132-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE9 (Win7)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3983/",
      "key": "FLUID-3983",
      "summary": "Can't drag slider thumb: IE 9"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-20T22:20:43.846-0500",
      "body": "It could be that jQuery's mouse dragging support doesn't work in IE 9\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-02T15:45:17.130-0400",
      "body": "This is no longer an issue.&#x20;\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open any of the reorderer examples\
<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/html/listReorderer.html>

2\) Using the mouse, attempt to reorder the elements\
Notice that you are unable to do this.

Note that reordering is functioning with the keyboard

        
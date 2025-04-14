---json
{
  "title": "FLUID-3607",
  "summary": "Reorderering via mouse is not working: using IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-04-06T11:30:00.000-0400",
  "updated": "2013-04-11T17:34:39.206-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-04-06T11:35:03.000-0400",
      "body": "Fixed at revision 9805 -  Corrected updated event binding strategy required for <https://fluidproject.atlassian.net/browse/FLUID-3527#icft=FLUID-3527> to work on IE6 as well. This apparently does not listen to event handlers bound onto \"window\". Binding explicitly onto \"body\" appears to work in every browser.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-06T12:05:15.000-0400",
      "body": "Did a quick test on this and it appears to be working well now.&#x20;\n"
    }
  ]
}
---
Reorderering via mouse is not working

Steps to reproduce:

1\) Open one of the reorderer demos\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

2\) Using the mouse, attempt to reorderer the elements

Notice that they don't move.

        
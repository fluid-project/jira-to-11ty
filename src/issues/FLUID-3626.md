---json
{
  "title": "FLUID-3626",
  "summary": "Columns in demo portal appear stacked: using IE 6",
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
  "date": "2010-04-12T11:32:59.000-0400",
  "updated": "2014-04-02T16:42:03.741-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T15:48:47.446-0500",
      "body": "Now appears to be an issue with most / all demos? Tested all FSS demos, pager, renderer, layout reorderer, grid reorderer.\n\nInfusion 1.3 Tested with IE6 WinXP.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:42:03.740-0400",
      "body": "We're deprecating FSS, not supporting IE6 and gettting rid of the demo portal.\n"
    }
  ]
}
---
Columns in demo portal appear stacked

Open any of the demos and notice that the html section is below the demo iframe.

You can also see this issue within the Renderer demo and the reset demo.

<http://build.fluidproject.org/infusion/demos/renderer/demo.html>\
<http://build.fluidproject.org/infusion/demos/fss/reset/demo.html>

Strangely, it seems to be working in the fss columns test page. \
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/2.fss.layout.columns.html>

        
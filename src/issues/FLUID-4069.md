---json
{
  "title": "FLUID-4069",
  "summary": "Focus styling on portlet not removed after tabbing away.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2011-02-16T12:26:58.987-0500",
  "updated": "2017-02-16T23:22:36.372-0500",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Chrome 43,\\\nFirefox 38,\\\nInternet Explorer 11\\\nSafari 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This only happens after moving the item.

Steps to reproduce:

1\) Open one of the layout reorderer examples.\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

2\) Move one of the reorderable portlets

3\) Using the keyboard, tap the "tab" key to move focus.\
Notice that the focus styling remains on the portlet.

        
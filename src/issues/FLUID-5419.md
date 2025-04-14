---json
{
  "title": "FLUID-5419",
  "summary": "Have to manually change to focus mode in NVDA for layout reordered demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2014-06-06T12:43:18.099-0400",
  "updated": "2017-09-26T12:36:24.174-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "IE 8 (Win XP)(NVDA 2014.2)\\\nChrome 35, FF 29, IE 9, 10, 11 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5424/",
      "key": "FLUID-5424"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5055/",
      "key": "FLUID-5055",
      "summary": "can't reorder elements with the arrow keys when NVDA is on"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5056/",
      "key": "FLUID-5056",
      "summary": "When NVDA is on, can't move between portlets"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5424/",
      "key": "FLUID-5424"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the layout reordered demo\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>

2\) navigate to the port lets\
Notice that while the portlet gets focus, you can not interact with them via the keyboard. If you switch NVDA's focus mode, you will be able to use it as expected.

        
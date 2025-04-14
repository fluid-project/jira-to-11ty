---json
{
  "title": "FLUID-5424",
  "summary": "Must manually switch to focus mode to interact with the reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T15:12:50.960-0400",
  "updated": "2017-09-26T12:36:19.794-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Chrome 35, FF 29 (NVDA 2014.2)\\\nChrome 61, FF 55 (NVDA 2017.3, Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5419/",
      "key": "FLUID-5419",
      "summary": "Have to manually change to focus mode in NVDA for layout reordered demo"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5419/",
      "key": "FLUID-5419",
      "summary": "Have to manually change to focus mode in NVDA for layout reordered demo"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open a reorderer demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/> (only for Chrome 35)\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>\
<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/> (only for FF 29)

2\) navigate to the reorderable items\
Notice that they cannot be interacted with. If you switch to focus mode (NVDA+space) you can interact with them.

        
---json
{
  "title": "FLUID-4355",
  "summary": "UIO FatPanel slider icon out of place when non-default colour-contrast is selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Harris Wong",
  "date": "2011-07-26T13:15:50.093-0400",
  "updated": "2013-10-04T09:58:57.302-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-07-26T13:18:50.045-0400",
      "body": "Bug Parade Infusion 1.4\n"
    }
  ]
}
---
Steps to reproduce:\
1\. Go to infusion/src/webapp/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html\
2\. click "Show display/preference"\
3\. choose "color & contrast" to "Black and Yellow"\
4\. click "hide"\
5\. click "Show display/preference" again and notice the icons are out of place.

        
---json
{
  "title": "FLUID-6044",
  "summary": "NVDA announces value in textfield ( in textfield slider) as blank",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T12:12:21.956-0500",
  "updated": "2016-11-08T12:12:21.956-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Slider",
    "UI Options"
  ],
  "environment": "Firefox 49.0.2 ( Win 10, NVDA 2016.3 )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Ensure NVDA is enabled\
2\. Open the [UI Options demo](http://build.fluidproject.org/infusion/demos/uiOptions/)\
3\. Open the preference editor\
4\. Using the keyboard navigate to the textfield in either the text size or line space adjuster

Notice that the value of the slider is announced properly, but the value in the textfield is announced as "blank"

        
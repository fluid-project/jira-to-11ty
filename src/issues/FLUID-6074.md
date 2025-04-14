---json
{
  "title": "FLUID-6074",
  "summary": "Magnifier position radio buttons appear to be in the wrong tab order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-15T16:58:16.179-0500",
  "updated": "2016-11-15T16:58:16.179-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Firefox 50 (macOS 10.12)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Open the [conditional adjusters example](http://build.fluidproject.org/infusion/examples/framework/preferences/conditionalAdjusters-singlePanel/nativeHTML.html)\
2\. Open the prefs editor\
3\. Click on the Magnification toggle\
4\. Using the keyboard, tab around the interface

Notice that focus goes to the Magnifier Position radio buttons before the textfield sliders, despite the fact that the radio buttons are to the right of the sliders.&#x20;

        
---json
{
  "title": "FLUID-4505",
  "summary": "Keyboard navigation jumps to the text size text field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-10-04T14:47:32.378-0400",
  "updated": "2013-10-04T09:42:04.572-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Safari 5 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce

1\) Open the Full no preview UIO from the demo page\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Using the keyboard attempt to navigate around the interface

3\) Notice that the when you tab into the page, it skips over the "Return to Site" link and the "Text Size" slider. This is even when using option-tab in safari.\
Note that you can shift-option-tab back to these elements.

        
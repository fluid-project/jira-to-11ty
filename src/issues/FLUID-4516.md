---json
{
  "title": "FLUID-4516",
  "summary": "\"Make Inputs Larger\" stops enlarging buttons at page refresh with full page demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2011-10-11T14:56:12.194-0400",
  "updated": "2013-10-04T09:37:00.407-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE, Firefox, Chrome, Safari @ Mac & Windows\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
1\. Go to <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptionsFullWithoutPreview.html>\
2\. Turn on "Make Inputs Larger" setting, click "SAVE AND APPLY" button, the buttons ("SAVE AND APPLY", "RESET AND APPLY", "CANCEL") are made larger\
3\. Refresh page, the buttons are back to the normal sizes although the "Make Inputs Larger" setting stays on.

The issue occurs with both full page demos (with or without preview).

        
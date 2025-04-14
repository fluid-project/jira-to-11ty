---json
{
  "title": "FLUID-4095",
  "summary": "Tabbing backwards from the rating requires 2 shft-tabs to get back to the pictures",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "John Kremer",
  "date": "2011-02-18T16:13:27.787-0500",
  "updated": "2011-02-24T13:16:09.417-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Win 7 IE9, FF3.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3932/",
      "key": "FLUID-3932",
      "summary": "Keyboard Accessbility Demo - Reverse tabbing the demo is not the same as forward tabbing"
    }
  ],
  "attachments": [],
  "comments": []
}
---
1\. Click on a picture\
2\. Press tab (takes you to the star rating where you can adjust the rating with the arrows).\
3\. Press shift-tab (moving the arrows allows you to change the rating again).\
4\. Press shift-tab again (if you re-adjusted the rating, it will let you re-adjust again, if you didn't and just pressed shift-tab twice in a row, you will be back at the picture scroll bar).

<http://build.fluidproject.org/infusion/demos/keyboard-a11y/demo.html>

        
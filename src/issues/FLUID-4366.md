---json
{
  "title": "FLUID-4366",
  "summary": "The sliders in uio do not have the correct styling when any of the contrast themes are applied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-28T11:06:35.008-0400",
  "updated": "2013-04-11T16:59:25.064-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4366/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T11:11:27.782-0400",
      "body": "ScreenShot.png shows the styling issues (yellow knob, missing slider bar)&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T11:11:51.376-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-03T11:07:13.265-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/127>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-03T14:31:08.075-0400",
      "body": "Pull request merged into project repo at 7176f644776d2b6dd729d14b3a9185443c3916a5\n"
    }
  ]
}
---
The slider thumb doesn't ever change to the contrast specific style, it always stays at the default. The slider bar, becomes invisible when any contrast theme is supplied.

Steps to reproduce

1\) Open any of the UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" option and save the changes.\
Notice that the slider knob is still the yellow circle and the slider bar is no longer visible.

        
---json
{
  "title": "FLUID-4377",
  "summary": "The Tabs and the reset button aren't styled correctly in the various contrast themes",
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
  "date": "2011-07-28T14:46:33.613-0400",
  "updated": "2013-04-11T16:11:20.852-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4377/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:49:50.228-0400",
      "body": "ScreenShot.png shows the issues with the tabs and the reset button. Notice the lack of contrast for the tabs and the reset button not updating its style at all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:50:01.440-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-10T13:41:12.581-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/134>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-18T16:15:57.529-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/134> merged into project repo at fc7ac1db340fc4786b6bcddd4cf818991929cdee\n"
    }
  ]
}
---
The tabs and reset button should have theme appropriate styles in each contrast theme.

Steps to reproduce

1\) Open the Fat Panel UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" option\
Notice that the tabs and reset button are not styled correctly. The tabs are hard to read and the reset button remains as it did in the default style.

        
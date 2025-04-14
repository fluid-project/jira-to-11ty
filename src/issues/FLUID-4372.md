---json
{
  "title": "FLUID-4372",
  "summary": "With the font at the full size, the spacing between the options is inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2011-07-28T13:54:48.275-0400",
  "updated": "2013-09-06T13:32:59.229-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4372/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:01:18.660-0400",
      "body": "ScreenShot.png shows the inconsistent spacing. Notice that the space between Text Size and Text Style is larger than that between Text Style and Line Spacing\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:10:00.380-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "y z",
      "date": "2011-09-06T14:43:56.995-0400",
      "body": "It appears that the dropdown is narrower than the sliders although the columns are of the same width. Possible solutions are, but limited to: making the slider widgets visible wider to correspond the dropdown or the other wat around.\n"
    },
    {
      "author": "y z",
      "date": "2011-09-06T14:44:52.235-0400",
      "body": "Could you comment on that one, please 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:32:59.227-0400",
      "body": "No longer an issue with the redesigned panels.\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the Fat Panel UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the Font Size to the largest setting.\
Notice that the spacing between the options is not consistent

        
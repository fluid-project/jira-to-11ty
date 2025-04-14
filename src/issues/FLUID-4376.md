---json
{
  "title": "FLUID-4376",
  "summary": "The Sliding Panel's hide/show button is not affected by change from UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Justin Obara",
  "date": "2011-07-28T14:23:58.643-0400",
  "updated": "2013-04-11T16:13:56.523-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4376/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:29:41.294-0400",
      "body": "ScreenShot.png shows the sliding panel's \"Show\" button is not updated with changes from UIO\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:30:31.839-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:30:47.295-0400",
      "body": "The Text Style changes do seem to work.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-02T16:13:59.369-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/149> merged into project repo at 0d3d32f72cbaf6fc1680b4e83d62ddb62665a8b8\n"
    }
  ]
}
---
The hide/show button used by the sliding panel should update with the changes made through UIO.

Steps to reproduce

1\) Open the Fat Panel UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Make any changes to UIO.\
Notice that the hide/show button is never updated.

        
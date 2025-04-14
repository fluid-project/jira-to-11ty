---json
{
  "title": "FLUID-4357",
  "summary": "The base font for the fat panel uio is very small",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-07-26T16:34:20.842-0400",
  "updated": "2013-04-11T17:00:28.466-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4357/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-26T16:35:22.596-0400",
      "body": "ScreenShot.png shows the small font size in Fat Panel UIO\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-26T16:35:47.877-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:24:04.797-0400",
      "body": "This might also be causing the various options to appear to close together\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-29T13:06:39.738-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/124>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-29T14:25:38.044-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/124> merged into project repo at 51d221dfc140ad5e97911504526d126047d11c6c\n"
    }
  ]
}
---
The base font of the UIO panel in the iframe is much smaller than that which is on the parent page. The font size should be increased to match what's on the parent page.&#x20;

Steps to Reproduce:

1\) Open the fat panel ui options demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Open the ui options panel

Notice that the font size in the panel is really small

        
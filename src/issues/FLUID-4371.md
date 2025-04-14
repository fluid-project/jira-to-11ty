---json
{
  "title": "FLUID-4371",
  "summary": "The sliding panel should open tall enough that the entire fat panel is displayed without scroll bars",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2011-07-28T13:47:32.607-0400",
  "updated": "2011-08-11T10:15:20.650-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4342/",
      "key": "FLUID-4342",
      "summary": "In fat panel, iframe should resize to fit contents, after font-size is increased"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4371/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:48:42.027-0400",
      "body": "ScreenShot.png shows the fat panel not open wide enough. Notice the clipped options and the scroll bar on the right.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:48:57.040-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:49:22.834-0400",
      "body": "The panel doesn't automatically change it's height because the iframe doesn't scale with it's contents.\n"
    }
  ]
}
---
Currently the sliding panel won't adjust it's height to take into account changes that uio made (i.e. font size, line spacing) and can have the effect of  not opening tall enough to show all of the fat panel.

Steps to Reproduce

1\) Open the Fat Panel UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Perform some changes (e.g. increase the text size)

3\) Close the panel and reopen it.

Notice that the panel isn't large enough to show all of fat panel without any scroll bars

        
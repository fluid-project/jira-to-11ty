---json
{
  "title": "FLUID-4370",
  "summary": "The \".. on Black\" contrasts have dark grey text and icons",
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
  "date": "2011-07-28T13:17:30.935-0400",
  "updated": "2013-04-11T16:35:31.413-0400",
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
      "type": "Dependence",
      "url": "/browse/FLUID-4414/",
      "key": "FLUID-4414"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4370/ScreenShot.png",
      "filename": "ScreenShot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4370/ScreenShot - IE6.png",
      "filename": "ScreenShot - IE6.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4370/ScreenShot - S5.png",
      "filename": "ScreenShot - S5.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:18:55.745-0400",
      "body": "ScreenShot.png shows the dark grey text and icons against the black background\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:19:08.342-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-29T15:04:09.209-0400",
      "body": "\"ScrreenShot - IE6.png\" shows an issue with the current state of the <https://fluidproject.atlassian.net/browse/FLUID-4370#icft=FLUID-4370> branch in IE6 ( <https://github.com/jobara/infusion/commit/d63ab6c0a980eb7e8a10f2ccc8e7f83d2fa6eea7> ) It appears that the last theme being added is overriding other styles that aren't explicitly being set in a theme. This shows up clearly on the black on white theme where large portions of the UI still have black backgrounds instead of white. Also the select drop down is styled all in yellow on black. If I remove the fl-preview-theme class from UI Enhancer, things start to work a bit better.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-29T15:39:17.407-0400",
      "body": "\"ScreenShot - S5.png\" shows how the black on white contrast theme currently looks in Safari 5. Which is pretty much how it should be styled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-30T11:17:42.135-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/143> . The IE6 issue mentioned above was taken care of by changing the order of the class names used in the theme file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-30T11:18:19.989-0400",
      "body": "I didn't have the contrast theme specific versions of the arrows used in the UIO demo, this should be added in another jira.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-02T09:23:06.345-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/146> merged into project repo at e8af4dd1d5003291d5be73eb09014cc38cb794fb\n"
    }
  ]
}
---
The "Yellow on Black" and "White on Black" contrast themes set some of the text and the icons to be dark grey. This provides a very low contrast and makes it hard to view.

Steps to reproduce

1\) Open any of the UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the contrast to either "Yellow on Black" or "White on Black"\
Notice the dark grey text and icons

        
---json
{
  "title": "FLUID-6018",
  "summary": "The native HTML5 slider does not respond to contrast adjustments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-11-01T17:37:58.959-0400",
  "updated": "2016-11-04T13:47:10.199-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "Safari 10 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6017/",
      "key": "FLUID-6017",
      "summary": "The slider knob for native range inputs do not adjust with font size changes"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6018/edge and ie11 native sliders.png",
      "filename": "edge and ie11 native sliders.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6018/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-01T17:39:38.588-0400",
      "body": "screenshot.png shows the slider in the yellow on black contrast but without the contrast theme applied to it. This screenshot was taken with Safari 10 and all that is visible is the white slider knob.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T07:42:09.883-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/775>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T14:01:01.575-0400",
      "body": "Current approach seems to work well on latest Firefox and Chrome. See attached \"edge and IE11 native sliders.png\" for appearance of native slider in the two current MS browsers.\n\nGood: slider responds to contrast adjustments.\n\nBad: In IE11, the track continues to have the blue \"progress\" bar effect.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T16:20:09.481-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/775/commits/8977a645807dbcf1f67008fd5da696d0496c5292> addresses the \"progress bar\" issue.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-04T13:46:48.254-0400",
      "body": "Merged: <https://github.com/fluid-project/infusion/commit/783779e872feb3bfe7110529a189de361de54f8c>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-04T13:47:10.199-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-6017#icft=FLUID-6017>\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open any of the UIO/Prefs Framework Demos (e.g. <http://build.fluidproject.org/infusion/demos/uiOptions/> )\
2\. Open the preferences panel and change the contrast\
3\. Close and re-open the panel so that the preferences are applied to it

Notice that the contrast settings aren't applied to the slider

        
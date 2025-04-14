---json
{
  "title": "FLUID-6017",
  "summary": "The slider knob for native range inputs do not adjust with font size changes",
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
  "date": "2016-11-01T17:16:52.917-0400",
  "updated": "2016-11-04T13:46:39.296-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Textfield Slider"
  ],
  "environment": "Safari 10 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6030/",
      "key": "FLUID-6030",
      "summary": "Native HTML slider thumb is cropped to track width on IE11 / Edge"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6018/",
      "key": "FLUID-6018"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6017/edge and ie11 native sliders.png",
      "filename": "edge and ie11 native sliders.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6017/screenshot-largeText.png",
      "filename": "screenshot-largeText.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6017/screenshot-orignalSize.png",
      "filename": "screenshot-orignalSize.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-01T17:21:21.762-0400",
      "body": "screenshot-originalSize.png shows the default presentation of the textfield slider. screenshot-largeText.png shows the knob at the original size  after the font size has increased.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T07:42:03.283-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/775>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T13:53:04.741-0400",
      "body": "Current approach seems to work well on latest Firefox and Chrome. See attached \"edge and IE11 native sliders.png\" for appearance of native slider in the two current MS browsers.\n\nGood: slider knob now adjusts with font size changes.\n\nBad: in both browsers, slider knob is cropped by width of the track.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-04T10:40:20.466-0400",
      "body": "Linked to separate <https://fluidproject.atlassian.net/browse/FLUID-6030#icft=FLUID-6030> on thumb-cropping issue in MS browsers.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-04T13:46:39.296-0400",
      "body": "Merged: <https://github.com/fluid-project/infusion/commit/783779e872feb3bfe7110529a189de361de54f8c>\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open any of the UIO / Prefs Framework demos/manual-tests ( e.g. <http://build.fluidproject.org/infusion/demos/uiOptions/> )\
2\. Open the preferences panel\
3\. Using the text size adjuster, Increase the text size\
4\. Close and re-open the panel so that the preferences are applied to it.\
Notice that the adjuster increased in size but the slider still has a very small knob for adjusting the value.

        
---json
{
  "title": "FLUID-3983",
  "summary": "Can't drag slider thumb: IE 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-12-20T22:19:49.734-0500",
  "updated": "2013-10-04T11:11:08.200-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 9 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4096/",
      "key": "FLUID-4096"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3963/",
      "key": "FLUID-3963"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T16:28:20.264-0400",
      "body": "Testing for 1.4, this issue seems to be gone. Using the new showcase demo, I can easily use the mouse to drag the sliders in either of the full-page versions and in the fat-panel. Perhaps we should close this one?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:43:01.935-0400",
      "body": "Justin, I'm unable to reproduce problem one in IE9 on version 1.4.  If you concur, could you close this?\n"
    }
  ]
}
---
Can't drag the slider thumb with the mouse.

Steps to reproduce:

1\) Open one of the UI Options demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Using the mouse try to drag one of the sliders to adjust either the text size or the line spacing\
Notice that you can't drag the slider thumb. You can click on the line and have it jump to another position though.

        
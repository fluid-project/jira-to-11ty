---json
{
  "title": "FLUID-4462",
  "summary": "Container resizes as you move focus between the images",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-09-21T14:07:40.759-0400",
  "updated": "2014-07-30T15:41:50.034-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "IE 9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4462/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-21T14:08:16.113-0400",
      "body": "ScreenShot.png shows the expanded container. Notice how it has grown downwards.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:41:50.026-0400",
      "body": "Can't reproduce this in IE11, nor any other supported browsers.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the keyboard a11y demo\
<http://build.fluidproject.org/infusion/demos/keyboard-a11y/html/keyboard.html>

2\) Adjust the window size so that a horizontal scroll bar appears below the set of images

3\) Move focus between the various images.\
Notice that the container of the images grows downward as you move focus between the images

        
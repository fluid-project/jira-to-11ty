---json
{
  "title": "FLUID-5348",
  "summary": "InlineEdit can have two tooltips show up at the same time for the same field",
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
  "date": "2014-04-30T15:12:21.796-0400",
  "updated": "2024-07-22T14:57:01.938-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Tooltip"
  ],
  "environment": "IE 8, IE 11, Firefox\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5312/",
      "key": "FLUID-5312",
      "summary": "Simple Inline Editor demo textfield hover tooltip is inaccurate, appears in duplicate, and blocks the text entry field"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5348/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-30T15:12:53.172-0400",
      "body": "screenshot.png shows the two tooltips for the same inline edit field\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:57:01.938-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the simple inline edit demo\
<http://build.fluidproject.org/infusion/src/demos/inlineEdit/simple/>

2\) Using the mouse hover over the inline edit field (notice the tooltip below).

3\) Click on the field to edit the text

4\) Use the "enter" key to save the text\
Notice that there are now two tooltips.

        
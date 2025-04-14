---json
{
  "title": "FLUID-5347",
  "summary": "Tooltip covers the InlineEdit input",
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
  "date": "2014-04-30T15:07:49.952-0400",
  "updated": "2024-07-22T14:55:19.087-0400",
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
      "type": "Duplicate",
      "url": "/browse/FLUID-5312/",
      "key": "FLUID-5312",
      "summary": "Simple Inline Editor demo textfield hover tooltip is inaccurate, appears in duplicate, and blocks the text entry field"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5347/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-30T15:08:56.197-0400",
      "body": "screenshot.png shows the tooltip covering the text that was added via the InlineEdit field.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:55:19.087-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
Steps to Reproduce:

1\) Open the simple inline edit demo\
<http://build.fluidproject.org/infusion/src/demos/inlineEdit/simple/>

2\) Using the keyboard, place focus on the inline edit field.\
Notice that a tooltip appears over the inlineEdit text.

        
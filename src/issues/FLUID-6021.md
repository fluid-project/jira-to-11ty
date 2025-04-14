---json
{
  "title": "FLUID-6021",
  "summary": "The header \"Some people actually prefer apples\" split across bottom and top of columns when text size set to maximum",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-02T10:39:43.443-0400",
  "updated": "2016-11-02T10:42:04.793-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6021/screenshot-column1.png",
      "filename": "screenshot-column1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6021/screenshot-column2.png",
      "filename": "screenshot-column2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T10:41:21.931-0400",
      "body": "screenshot-column1.png shows the top of the header text at the bottom of column 1. screenshot-column2.png shows the remainder of the header text at the top of column 2.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-02T10:42:04.793-0400",
      "body": "Similar issue occurs when changing line-space.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [UI Options demo](http://build.fluidproject.org/infusion/demos/uiOptions)\
2\. Open the preferences editor\
3\. Set the text size to 2\
Notice that the header in the second content column on the page is clipped at the top, and that the portion missing appears at the bottom of the first column.

        
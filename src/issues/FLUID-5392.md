---json
{
  "title": "FLUID-5392",
  "summary": "Two clicks required to edit an empty inline edit field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-03T11:18:13.448-0400",
  "updated": "2024-07-22T15:04:06.103-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 7 (Mac OS X 10.9)\\\nSafari 10 (macOS 10.12)\\\nSafari 14 (macOS 11.4)\\\nSafari 17.5 (macOS 14.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5392/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-03T11:19:50.588-0400",
      "body": "screenshot.png shows that invitation text that is displayed after clicking on an empty inline edit.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the simple text inline edit field\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/>

2\) Click on the empty inline edit field at the top\
Notice that you are shown the invitation text for the keyboard focus of an empty field "Edit this" (click or press enter)" but pressing enter doesn't work. you have to click a second time to get to edit mode.

        
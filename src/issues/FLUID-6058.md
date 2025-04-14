---json
{
  "title": "FLUID-6058",
  "summary": "Tooltip remains over the drop-down inline edit options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-11T08:31:04.420-0500",
  "updated": "2017-01-11T12:31:19.267-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari (iOS 10.1.1)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6058/IMG_0002.PNG",
      "filename": "IMG_0002.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-11T08:32:04.436-0500",
      "body": "IMG\\_0002.PNG shows the tooltip over the drop-down inline edit options.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [drop-down inline edit manual test](http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/dropdown/)\
2\. Tap on the drop down inline edit

Notice that the tooltip appears over the options.

        
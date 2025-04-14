---json
{
  "title": "FLUID-4411",
  "summary": "The \"Introduction\" header over laps the column to the right when text is full size and set to comic sans",
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
  "date": "2011-08-30T13:17:04.621-0400",
  "updated": "2011-09-26T12:52:20.577-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4411/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-30T13:17:37.446-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-30T13:37:09.492-0400",
      "body": "Screenshot.png shows the \"Introduction\" header over lapping the text in the column to its right. This happens when the text size is maxed out along with the style being set to \"Comic Sans\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-26T12:52:20.528-0400",
      "body": "This may have been resolved with some of the recent work on the UI Enhancer.\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the UI Options demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Using UI Options, adjust the text size to it's maximum and set the text style to "comic sans"

Notice that the "Introduction" header over laps the text from the adjacent column

        
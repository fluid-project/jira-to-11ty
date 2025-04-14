---json
{
  "title": "FLUID-4407",
  "summary": "Remove browser native focus styling from UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2011-08-25T15:53:35.544-0400",
  "updated": "2011-10-05T13:49:18.012-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4407/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-25T15:54:10.828-0400",
      "body": "Screenshot.png shows the browser default focus styling on the slider's knob\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-10-05T13:49:17.972-0400",
      "body": "See 4504 - fl-focus now on UIO\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the UI Options Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Open one of the UI Options interfaces and put focus on one controls.\
Notice the browser focus styling.

        
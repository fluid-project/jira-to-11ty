---json
{
  "title": "FLUID-4406",
  "summary": "The columns should all be aligned together",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2011-08-25T15:39:33.446-0400",
  "updated": "2016-07-08T10:56:31.876-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4406/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-25T15:49:38.150-0400",
      "body": "Screenshot.png shows the columns not properly lining up at the top.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T12:52:47.585-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:55:42.773-0400",
      "body": "Updated the screenshot. It seems that after some changes to the demo, the issue is most visible with the header of the first column. Looks like it has something to do with extra margins on the headings.\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the UI Options Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/>

2\) Notice that the columns that don't have headers start higher up. They should be top aligned with the headers in the other columns.

        
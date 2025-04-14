---json
{
  "title": "FLUID-4767",
  "summary": "Safari: Ctrl + m brings to the Not Found page in ImageReoderer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Alexey Novak",
  "date": "2012-08-15T15:36:27.062-0400",
  "updated": "2015-06-12T11:23:55.783-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3925/",
      "key": "FLUID-3925",
      "summary": "With no wrapping on, the keyboard movement keystrokes are captured by the browser where a wrap would have occurred"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-12T11:23:55.781-0400",
      "body": "Cannot reproduce with Safari 8\n"
    }
  ]
}
---
In Safari:\
Open a demo for ImageReoderer

<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

Key combinations Ctrl + i, Ctrl  + j and Ctrl + k work fine.\
But if you press Ctrl + m browser will try to open <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/undefined>

        
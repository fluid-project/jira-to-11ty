---json
{
  "title": "FLUID-3978",
  "summary": "Manual renderer component test does not give a popup dialog in FF3.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-12-20T16:40:41.728-0500",
  "updated": "2015-06-09T09:25:02.006-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": "FF3.6 in Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:25:01.993-0400",
      "body": "This manual test has been removed\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org/infusion/tests/manual-tests/html/renderer-component-types.html> with FF3.6 in Windows 7\
2\. A popup dialog with the text "Hello, I've been rendered!" should appear, but does not.

        
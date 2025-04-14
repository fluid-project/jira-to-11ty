---json
{
  "title": "FLUID-5769",
  "summary": "At the minimum page width, the current selected item in the navigation menu can wrap to a new line.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2015-09-17T09:21:45.760-0400",
  "updated": "2024-07-31T14:19:00.064-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5769/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-17T09:22:11.456-0400",
      "body": "screenshot.png shows the \"Desert\" link wrapped to a new line.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:18:53.474-0400",
      "body": "I believe this was related to our old docs platform which was redesigned after moving to 11ty.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Decrease the browser window width to the smallest size

2\) Open the navigation menu

Notice that the current page is marked with a bar on the right. If the text is long, it will wrap to a new line.

        
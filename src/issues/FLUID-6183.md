---json
{
  "title": "FLUID-6183",
  "summary": "The separated panel doesn't properly resize and clips the bottom of the adjusters",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-08-10T09:50:17.308-0400",
  "updated": "2017-09-18T12:42:55.834-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "MS Edge (Win 10)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6183/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-08-10T09:50:39.457-0400",
      "body": "screenshot.png shows the clipping at the bottom of the adjusters.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-18T12:40:57.806-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/845>  ) into the project repo at 89c0a0be14973e9fe0e0a25d4f6f0a9a48071f2a\n"
    }
  ]
}
---
Steps to reproduce:

1. In MS Edge, open the [UI Options Demo](http://build.fluidproject.org/infusion/demos/uiOptions/)
2. Open the prefs editor

Notice that the panel doesn't open far enough, so the bottom of the adjusters are all clipped. If you click on "reset" the panel will resize correctly, but will be clipped again after closing and re-opening.

        
---json
{
  "title": "FLUID-5725",
  "summary": "The minimum width for the doc platform may be too small",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2015-07-28T15:35:39.082-0400",
  "updated": "2024-07-31T14:17:08.381-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5725/2015-07-28 19.23.59.png",
      "filename": "2015-07-28 19.23.59.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-07-11T14:54:02.410-0400",
      "body": "@jhung could you please update the screenshot for this. I don't seem to be able to reproduce the issue, but am not sure I'm looking for the right thing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:17:03.426-0400",
      "body": "I believe this was related to our old docs platform which was redesigned after moving to 11ty.\n"
    }
  ]
}
---
The minimum width for the documentation platform may be too wide, thus content is getting cropped at the edge of the screen. Consider using something more fluid rather than define a minimum width.

        
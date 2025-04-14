---json
{
  "title": "SJRK-342",
  "summary": "The AIHEC logo still shows colours when a high contrast theme is selected",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Cindy Li",
  "date": "2020-04-20T20:24:30.556-0400",
  "updated": "2020-05-05T12:54:14.655-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-342/Screen Shot 2020-04-20 at 8.18.46 PM.png",
      "filename": "Screen Shot 2020-04-20 at 8.18.46 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-04-20T21:22:59.370-0400",
      "body": "I attempted to complete this work earlier today, but I ran into trouble since the logo SVG contains raster image data instead of paths, so even if I set a fill colour, it doesn't show. I will need to find another solution, or potentially find another SVG as a basis.\n"
    }
  ]
}
---
Steps to produce the problem:

1\. Set the them to "aihec" in sjrk.storyTelling.server.config.json5;\
2\. Start the SJRK site;\
3\. Open UIO, select a high contrast theme;\
4\. Aihec logos on the header and the home page are still colorful without adapting to the selected high contrast.

See the attached screen shot for the problem.

        
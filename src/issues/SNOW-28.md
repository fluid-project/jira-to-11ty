---json
{
  "title": "SNOW-28",
  "summary": "Sidebar navigation highlights a subpage when landing page is displayed",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2018-07-06T13:01:04.035-0400",
  "updated": "2018-07-06T15:38:44.278-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SNOW/SNOW-28/Screen Shot 2018-07-06 at 1.00.53 PM.png",
      "filename": "Screen Shot 2018-07-06 at 1.00.53 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Caren Watkins",
      "date": "2018-07-06T15:38:44.275-0400",
      "body": "duplicate with [#SNOW-26](#SNOW-26) #1\n"
    }
  ]
}
---
There is a bug where if a landing page is displayed, the first item in that category is highlighted instead in the sidebar.

For example:

1. Go to <https://snow-dev.idrc.ocadu.ca/category/about-us/>

Notice that the content displayed is correct, but the sidebar shows the wrong active item.

        
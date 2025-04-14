---json
{
  "title": "FLOE-313",
  "summary": "Can have multiple tooltips shown at the same time (focus and hover).",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-04-29T11:12:11.813-0400",
  "updated": "2015-11-12T14:44:42.757-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-313/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-04-29T11:13:36.928-0400",
      "body": "screenshot.png shows the multiple tooltips\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-29T11:14:59.796-0400",
      "body": "One solution to fix this would be to have an event at the top of the tree (parent component) that is listened to be all of the tooltips. This event will tell all the tooltips to close, and should be fired before a tooltip opens.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:44:42.754-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1390> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool

2\) Navigate to a panel that contains tooltips (e.g. text size).

3\) Place focus on one of the navigation buttons (e.g. next, back)

4\) Hover over one of the panels buttons (e.g. larger, smaller)

Notice that we can have two tooltips because the tooltips are for the different Infusion components.

        
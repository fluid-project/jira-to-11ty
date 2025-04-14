---json
{
  "title": "FLOE-392",
  "summary": "The voting demo does not have the proper active styling for the panel icons when in high contrast",
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
  "date": "2015-06-05T15:32:17.786-0400",
  "updated": "2015-11-12T14:37:19.853-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-360/",
      "key": "FLOE-360",
      "summary": "When the black-on-white or white-on-black contrast is enabled, the active styling for the current panel's icon is missing."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-392/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-05T15:33:03.181-0400",
      "body": "screenshot.png shows the lack of active styling (other than the arrow) for panel icons in high contrast.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:37:19.851-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1462> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Voting demo\
<http://build.fluidproject.org/first-discovery/demos/voting/index.html>

2\) Go to panel 2 and enable a high contrast mode\
Notice that other than the arrow, there is no active styling for the panel icon

        
---json
{
  "title": "FLOE-382",
  "summary": "The focus styling for the \"turn voice on/off\" button is incorrect",
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
  "date": "2015-06-05T11:53:34.312-0400",
  "updated": "2015-11-12T14:40:32.904-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-382/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-05T11:54:07.451-0400",
      "body": "screenshot.png shows the incorrect focus styling on the \"turn voice on/off\" button\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:40:32.902-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1453> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Tool Demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Using the keyboard, place focus on the "turn voice on/off" button\
Notice the light blue colour. However, it should have remained the same colour but with a yellow outline.

        
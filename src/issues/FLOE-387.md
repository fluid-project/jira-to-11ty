---json
{
  "title": "FLOE-387",
  "summary": "When in a high contrast mode, scrolling the language options reveals a portion of the fourth language",
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
  "date": "2015-06-05T13:42:23.170-0400",
  "updated": "2015-11-12T14:38:52.647-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-379/",
      "key": "FLOE-379",
      "summary": "At maximum text size, the fourth language option is partly visible on the language panel"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-387/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-05T13:43:39.840-0400",
      "body": "screenshot.png shows the fourth language option just starting to peak out above the down arrow, when scrolling with the keyboard in high contrast.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:38:52.645-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1457> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Tool demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Enable one of the contrast themes

3\) Navigate to the language panel

4\) Using the keyboard scroll through the list of language options\
Notice that the fourth language starts to appear just above the down arrow.

        
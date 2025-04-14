---json
{
  "title": "FLOE-259",
  "summary": "The text size indicator expands below the indicator container on Firefox",
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
  "date": "2015-02-05T13:03:17.718-0500",
  "updated": "2015-11-12T14:47:46.750-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-259/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-05T13:04:29.016-0500",
      "body": "screenshot.png shows the fill bar below the indicator container.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2015-08-24T14:37:49.659-0400",
      "body": "Currently the FD tool does not run on Firefox because they don't support the Web Speech API. Once they do, however, this will continue to be a problem.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:47:46.747-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1350> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool

2\) Navigate to the text size panel

3\) increase the text size\
Notice that the indicator bar doesn't fill up, the fill grows below the bar.

        
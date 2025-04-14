---json
{
  "title": "FLOE-385",
  "summary": "Scrolling the language options via keyboard lags when self voicing is enabled",
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
  "date": "2015-06-05T13:31:04.119-0400",
  "updated": "2015-11-12T14:39:27.932-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:39:27.930-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1455> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Tool demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Ensure that the self voicing is enabled

3\) Using the keyboard, scroll through the list of language options\
Notice that the selection change has a slight, but noticeable lag between keypresses

        
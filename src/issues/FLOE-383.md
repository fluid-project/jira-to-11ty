---json
{
  "title": "FLOE-383",
  "summary": "Refreshing the page while the self voicing is speaking can lead to multiple speech output at once.",
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
  "date": "2015-06-05T12:02:58.798-0400",
  "updated": "2015-11-12T14:40:14.114-0500",
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
      "author": "Justin Obara",
      "date": "2015-08-25T10:03:41.792-0400",
      "body": "A possible solution would be to hook into the pages unload event and cancelling the speech utterances.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:40:14.112-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1485> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Tool demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) While the self voicing is speaking, reload the browser\
Notice that two voices are speaking at once.

        
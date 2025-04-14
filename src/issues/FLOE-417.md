---json
{
  "title": "FLOE-417",
  "summary": "The first discovery tool should work in browsers that don't support TTS by not self voicing",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-09-03T07:09:41.620-0400",
  "updated": "2015-11-12T14:35:14.826-0500",
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
      "date": "2015-11-12T14:35:14.823-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1475> and all activities should be carried on there.\n"
    }
  ]
}
---
Currently the first discovery tool is not supported in browsers that do not support the web speech api because of its self voicing feature. However, for browsers that don't support the web speech api, it should disable or remove the self voicing feature and continue to operate. The speak text and speech rate adjusters should still be present as these are for settings on the system that is being configured.

        
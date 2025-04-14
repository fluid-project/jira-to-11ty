---json
{
  "title": "FLOE-388",
  "summary": "On Chrome on Windows, tooltip speech not spoken if triggered while default voice is speaking",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-06-05T13:48:41.348-0400",
  "updated": "2015-11-12T14:38:34.063-0500",
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
      "date": "2015-11-12T14:38:34.061-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1458> and all activities should be carried on there.\n"
    }
  ]
}
---
To reproduce:

1\. Go to the language selection panel\
2\. Tab to the language list\
3\. Move selection within the list using the arrow keys to a language without a specific voice (Nederlands)\
4\. While the tooltip is being spoken, press an arrow key to move to another language (Deutsch)

Expected:

* Tooltip to be spoken for newly selected language (Deutsch)

Actual:

* Tooltip is not spoken

        
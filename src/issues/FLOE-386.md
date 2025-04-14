---json
{
  "title": "FLOE-386",
  "summary": "Chrome on Windows does not have a speech synthesizer for es-MX",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-06-05T13:39:38.383-0400",
  "updated": "2015-11-12T14:39:11.008-0500",
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
      "date": "2015-11-12T14:39:11.005-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1456> and all activities should be carried on there.\n"
    }
  ]
}
---
To reproduce:

1\. Go to the language selection panel on the First Discovery tool and open the tooltip for Spanish (Español)\
2\. The tooltip is spoken with a default synthesizer and not a Spanish specific voice

Chrome on Windows does speak with a Spanish voice for es-ES.

        
---json
{
  "title": "FLOE-427",
  "summary": "Add French and Spanish localizations for prefs integration.",
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
  "date": "2015-10-06T12:21:11.121-0400",
  "updated": "2015-11-12T14:31:59.930-0500",
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
      "date": "2015-10-06T12:49:03.823-0400",
      "body": "congratulationsPrefsServerIntegration\\_en-US.json:\n\n{\\\n\"message\": \"\\<p>You're almost done!\\</p> \\<p>If you are happy with your choices, select the finish button. Select the back button to make changes.\\</p> \\<p>Note: once you select finish, you will not be able to make further changes.\\<p/>\"\\\n}\n\ntoken\\_en-US.son:\n\n{\\\n\"message\": \"To apply your preferences to any device (a computer, a tablet, a mobile phone, etc), record the following token:\",\\\n\"error\": \"Sorry, a token could not be generated at this time.\"\\\n}\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:31:59.928-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1483> and all activities should be carried on there.\n"
    }
  ]
}
---
As part of the preferences framework integration new panels were added (See: <https://fluidproject.atlassian.net/browse/FLOE-422#icft=FLOE-422>, FLOE-424). This involved changing and/or adding new English language strings which need to be localized.

        
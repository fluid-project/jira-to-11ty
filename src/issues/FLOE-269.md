---json
{
  "title": "FLOE-269",
  "summary": "read panel instructions after pressing 'h'",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-12T15:03:23.487-0500",
  "updated": "2015-11-03T11:21:48.418-0500",
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
      "date": "2015-02-13T10:20:07.033-0500",
      "body": "Merged into the master branch @ c9605ec5f0c04a92fd35b99fcb7fa973ca528d4e\n"
    }
  ]
}
---
As a temporary solution, read the active panel's instruction text when the 'h' key is pressed. When the full help widget is implemented, the 'h' key will open that instead and there may be a new keystroke or method for re-reading the instruction text.

        
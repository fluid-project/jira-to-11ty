---json
{
  "title": "FLOE-410",
  "summary": "typo in name \"gpii.firstDiscovery.navButtons.toggleButtonSates\"",
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
  "date": "2015-08-12T14:06:11.363-0400",
  "updated": "2015-11-03T12:55:45.850-0500",
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
      "date": "2015-08-12T14:28:56.998-0400",
      "body": "Fixed as a part of the pull request: <https://github.com/fluid-project/first-discovery/pull/94>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-08-13T13:31:34.772-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/94> ) into the project repo at 785468b063f6044882c2b3c471bbf3226ba039d8\n"
    }
  ]
}
---
In navButton.js gpii.firstDiscovery.navButtons.toggleButtonSates should actually be gpii.firstDiscovery.navButtons.toggleButtonStates

        
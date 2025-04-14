---json
{
  "title": "FLOE-300",
  "summary": "The FD tool \"help\" button is not internationalizable",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-09T12:03:45.528-0400",
  "updated": "2015-11-03T11:30:14.502-0500",
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
      "author": "Simon Bates",
      "date": "2015-04-22T14:30:04.421-0400",
      "body": "Make a component for the help button and use the \"gpii.firstDiscovery.msgLookup\" grade.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-04-30T16:39:44.803-0400",
      "body": "<https://github.com/fluid-project/first-discovery/pull/36>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-01T15:03:22.209-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/36> ) into the project repo at 6369ea7f093756a07d0e67e7503c323f467ee276\n"
    }
  ]
}
---
The text on the help button is only specified in the demo index.html file, which means it will not translate with everything else.

        
---json
{
  "title": "FLOE-340",
  "summary": "Clear the Sticky Keys shift latched state on focus out",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Simon Bates",
  "date": "2015-05-14T17:18:56.044-0400",
  "updated": "2015-11-03T12:10:14.804-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-312/",
      "key": "FLOE-312",
      "summary": "Add TTS support to keyboard assistance screens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-26T15:30:43.648-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/66>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-26T16:10:29.062-0400",
      "body": "Merged @ ea4e655a1ed887676a12a69b746e082f647b6d6e\n"
    }
  ]
}
---
When focus leaves the keyboard input box, clear the shift latched state.

        
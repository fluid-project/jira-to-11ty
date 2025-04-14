---json
{
  "title": "FLOE-363",
  "summary": "Enabling/Disabling sticky keys should be announced by the self voicing",
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
  "reporter": "Justin Obara",
  "date": "2015-05-28T15:47:05.020-0400",
  "updated": "2015-11-03T12:44:14.296-0500",
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
      "date": "2015-06-02T10:34:46.395-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/77>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-03T11:28:52.342-0400",
      "body": "Merged @ 27d6a3ea95fac6757d0fd4ef0da58cef0bf4d0e4\n"
    }
  ]
}
---
Currently only the tooltip on the toggle button is read, and is the only thing that provides a real indication of the state of the sticky keys preference. Like the mute (voice on/off) button, it should be announced by the self voicing when the state is changed ( when self voicing is enabled ).

        
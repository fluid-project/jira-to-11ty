---json
{
  "title": "FLOE-370",
  "summary": "Create a mock TTS component to use for testing purposes",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-06-03T08:26:11.321-0400",
  "updated": "2015-11-03T12:46:44.131-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5675/",
      "key": "FLUID-5675",
      "summary": "Text To Speech enactor should be supplied with a mock implementation to facilitate integration testing"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-03T11:02:16.264-0400",
      "body": "Duplicates FLUID-5675\n"
    }
  ]
}
---
We need to implement a mock version of the fluid.textToSpeech component for integration testing purposes. This will enable us to create a linear log of all the items that were queued for speech, for which we could then issue a jqUnit.assertDeepEq assertion for verification.

See channel discussion: <https://botbot.me/freenode/fluid-work/2015-06-02/?msg=40811279&page=2>

        
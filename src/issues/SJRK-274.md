---json
{
  "title": "SJRK-274",
  "summary": "Story audio preview contains \"by\" and \"keywords\" when fields are empty",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Gregor Moss",
  "date": "2019-09-09T12:44:26.423-0400",
  "updated": "2019-09-11T15:44:34.614-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-283/",
      "key": "SJRK-283"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-09-11T15:44:34.610-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/40) has been merged into the project repo \"stories-floe-dev\" branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/25367c2b0b56261763e854b698ed028e27a16e62).\n"
    }
  ]
}
---
Story Speaker (the audio preview) says things that aren't on the page like "keywords" (this is a known issue and Justin and I have been discussing a solution – potentially using the Orator component instead of a fluid.textToSpeech)

Alternatively, this could be solved by passing parts of the current message string ("message\_readStoryText") in individual calls to queueSpeech.

        
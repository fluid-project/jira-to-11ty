---json
{
  "title": "FLOE-335",
  "summary": "Text-to-speech not using the right language",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-14T16:15:55.386-0400",
  "updated": "2015-11-03T12:08:31.752-0500",
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
      "date": "2015-05-20T11:08:55.958-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/52>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-20T16:16:49.010-0400",
      "body": "The pull request is merged into the master branch @ 8f2a0f2c7c3fd1b1784b317ad68c5d5018e13c09\n"
    }
  ]
}
---
When the tool is translated into a different language, the TTS engine is not being informed of the new language, so it's reading it in English.

Also, note that on the language selection list, each language's text and tooltip is in that language, and so needs to use that TTS language.

        
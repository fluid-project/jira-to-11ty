---json
{
  "title": "SJRK-146",
  "summary": "\"Listen to my story\" can be interrupted in certain languages",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-06T18:10:15.267-0400",
  "updated": "2018-07-17T09:52:43.822-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 Pro\\\nChrome 67\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The speech synthesis produced by the "Listen to my story" button in the edit preview or when viewing a story (sjrk.storyTelling.ui.storyViewer grade) can be stopped by clicking the button again when the story is being read in English. If the language is switched to Spanish, then clicking the button will cause the speaking to restart, not stop.

        
---json
{
  "title": "SJRK-125",
  "summary": "Review the location of \"onNewBlockTemplateRendered\"",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T14:06:27.475-0400",
  "updated": "2018-06-01T14:06:27.475-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Review the location of the event "onNewBlockTemplateRendered", which is used in tests for ui.storyViewer, ui.storyEditor, and page.storyEdit. This might be appropriate to have in the grades themselves (in each blockManager), rather than in testUtils.js

        
---json
{
  "title": "SJRK-124",
  "summary": "Update event sequencing in storyEditor",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T13:58:59.059-0400",
  "updated": "2018-06-11T17:30:16.686-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-11T17:30:16.683-0400",
      "body": "Achieved using compound event\n"
    }
  ]
}
---
Update the event sequencing on the storyEditor so that the onControlsBound event doesn't fire until the blockManager is fully created and ready.\
See line 96 of storyTelling-ui-storyEditorTests.js

        
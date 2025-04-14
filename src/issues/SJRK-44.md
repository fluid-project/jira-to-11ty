---json
{
  "title": "SJRK-44",
  "summary": "Add test for storySpeaker text",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2017-12-08T10:50:51.804-0500",
  "updated": "2017-12-12T10:59:29.159-0500",
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
      "date": "2017-12-12T10:59:29.154-0500",
      "body": "The tests have been added\n"
    }
  ]
}
---
Add a test to verify that the text being fed into sjrk.storyTelling.story.ui.storySpeaker is correct and that the fluid.stringTemplate() substitution for model values and localized strings is happening properly

        
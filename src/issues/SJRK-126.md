---json
{
  "title": "SJRK-126",
  "summary": "Consider having a separate \"blockManager\" grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T14:09:34.815-0400",
  "updated": "2018-06-01T14:09:34.815-0400",
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
The storyEditor and storyViewer both have a blockManager grade which is a dynamicViewComponentManager, and there may be a significant amount of common configuration between them. Consider extracting these into a new grade and having each UI contain one of this new grade instead, with appropriate custom options, but with any shared material in the new grade.

This would also be the appropriate point for the "onNewBlockTemplateRendered" event mentioned in <https://fluidproject.atlassian.net/browse/SJRK-125#icft=SJRK-125>.

        
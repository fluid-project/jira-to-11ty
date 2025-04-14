---json
{
  "title": "FLUID-1532",
  "summary": "Uploader 2: Add keyboard navigation to the file queue.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-09-09T20:36:51.000-0400",
  "updated": "2011-01-14T11:23:13.897-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-09T20:57:43.000-0400",
      "body": "Just need a test to show deletion working with the Del key.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-16T10:02:49.000-0400",
      "body": "Keyboard accessibility was added to the file queue and tests out. I've filed a separate JIRA about the need to write a unit test that shows the activation behaviour, but haven't been able to do this yet due to an apparent bug in the keyboard plugin.\n"
    }
  ]
}
---
The file queue should be selectable with the arrow keys when focussed, and file rows should be deletable with the delete key.

dev-iteration42

        
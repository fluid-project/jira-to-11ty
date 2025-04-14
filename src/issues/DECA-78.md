---json
{
  "title": "DECA-78",
  "summary": "[a11y] Remove the use of modal dialog windows",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-03-29T10:17:42.000-0400",
  "updated": "2010-06-16T11:12:54.305-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/DECA-69/",
      "key": "DECA-69",
      "summary": "When confirmation message appears, scroll bars are visible"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-16T11:12:54.303-0400",
      "body": "Replaced by new designs.\n"
    }
  ]
}
---
Remove the use of modal dialog windows in Decapod.

Instead:

* important dialogs should appear as a separate pages and not as dialogs.
* delete dialog should be removed. Thus when the user pressed "Delete" it automatically deletes without confirmation. Instead, offer an "Undo" mechanism. This will help improve efficiency.

        
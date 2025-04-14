---json
{
  "title": "FLUID-1",
  "summary": "Drag-and-Drop styles not properly updated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2007-06-26T10:32:10.000-0400",
  "updated": "2007-10-22T16:22:43.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T18:12:14.000-0400",
      "body": "The reorderer now removes any identified drag-and-drop related styles from a node as part of the process of reverting the node to its default state (Rev. 12400)\n"
    }
  ]
}
---
The drag-and-drop classes that control the styles are not properly being updated when keystrokes are used to move focus. As a result, styles are not being properly updated, and the most-recently-dragged item remains styled with a grey background even when keystrokes have moved focus to another item.

The keystroke handling code needs to be aware of the drag-and-drop classes, and update them accordingly. This probably involves removing them, but it might require moving them to the newly selected item.

        
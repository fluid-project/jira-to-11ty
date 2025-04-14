---json
{
  "title": "FLUID-3834",
  "summary": "Rich text inline edit - Undo and Redo links appear can appear as visited",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-11-15T11:36:42.269-0500",
  "updated": "2010-12-16T09:43:28.178-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In Rich Text Inline Edit, the Undo and Redo links can appear as visited (i.e. purple link, instead of a default blue unvisited link) if Undo or Redo was previously selected. This can lead to a confusing interaction as Undo and Redo links shouldn't get a visited state since they behave more like buttons. Also in a screen reader, the AT would say "Undo link visited" which can be confusing too.

        
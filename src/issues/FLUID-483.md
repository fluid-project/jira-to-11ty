---json
{
  "title": "FLUID-483",
  "summary": "Drag avatar incorrect for Sortable Tabs demo.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-04-10T14:30:09.000-0400",
  "updated": "2008-04-22T15:28:53.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-22T15:28:53.000-0400",
      "body": "The uPortal sortable tabs demo has been retired.\n"
    }
  ]
}
---
When mouse dragging a tab in the uportal sortable tabs mockup example, the drag avatar is solid white, whereas the placeholder left behind is translucent.

Shouldn't it be the translucent tab being dragged with the mouse pointer and not the opaque white tab?

        
---json
{
  "title": "FLUID-147",
  "summary": "Position of mouse over a drop target during drag-and-drop should be handled by LayoutHandler",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-12-17T11:10:01.000-0500",
  "updated": "2008-08-09T14:26:07.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-100/",
      "key": "FLUID-100",
      "summary": "With mouse-based drag-and-drop, one cannot drop on a position before the first item."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-01-07T16:37:13.000-0500",
      "body": "Joseph was both the reporter and the fixer, so someone else show review and verify this code. I'll do it.\n"
    }
  ]
}
---
Currently, calculating whether the mouse is positioned "before" or "after" the drop target during drag-and-drop is handled by the Reorderer itself – see trackMouseMovement() and beforeOrAfter(). This responsibility should be moved to the layouthandler since it is in a better position to know what "before" or "after" means.

        
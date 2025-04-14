---json
{
  "title": "SJRK-424",
  "summary": "Story tool: Mouse-clicking on add block buttons does not move focus in Firefox",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2020-11-12T17:25:06.409-0500",
  "updated": "2020-11-12T17:27:38.384-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Firefox 82.0.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Mouse-clicking on any of the add block buttons does not move focus to the selected button, such that subsequently selecting the tab key continues the focus order from the last-focused item. This is not the case when mouse-clicking on any item other than the add-block buttons, and does not occur in Safari or Chrome. Note that mouse-clicking on the add block buttons disappears the **visible** focus frame from its current location.

        
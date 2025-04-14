---json
{
  "title": "FLUID-1239",
  "summary": "OSDPL Architecture: Investigate options for OSDPL menus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-08-19T14:52:58.000-0400",
  "updated": "2008-08-21T11:02:24.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1240/",
      "key": "FLUID-1240"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-935/",
      "key": "FLUID-935"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-598/",
      "key": "FLUID-598"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-588/",
      "key": "FLUID-588",
      "summary": "OSDPL Architecture: Figure out how to create a parent-child relationship between patterns & implement solution"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We are curently using Drupal Nice Menus to allow users quick access to content without having to click through a hierarchy of pages. There may be other, better choices but we've explored a few and this seemed to be the best we could find at the time.

However, we want to re-think the menu structure and display on a holistic level, which is connected with the bug for figuring out how best to display parent - child relationships between patterns.

Navigation goals:

* quick access to the patterns
* a clear expression of pattern hierarchy (currently parents and children are at the same level, which is not ideal)
* accessible menus, ideally which can be navigated with the arrow keys

        
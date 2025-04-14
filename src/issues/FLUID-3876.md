---json
{
  "title": "FLUID-3876",
  "summary": "Reordering an item takes two key presses in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2010-12-03T11:08:08.064-0500",
  "updated": "2010-12-03T11:58:47.199-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3288/",
      "key": "FLUID-3288",
      "summary": "Moving an item with the keyboard \"loses\" the \"ctrl-key is down\" status"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When using reorderer in Safari it takes two key presses to move an item. This happens after the item has been moved once before. It seems to take one key press (ctrl+arrow) to make the selection moveable, then another to actually move it.

        
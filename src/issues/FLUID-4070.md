---json
{
  "title": "FLUID-4070",
  "summary": "After undo and redo an edit that deletes all text, edit incorrectly displays the original text.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2011-02-16T12:44:16.902-0500",
  "updated": "2011-02-23T09:48:32.517-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": "IE8 - Windows 7\\\nFF3.6 - Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3611/",
      "key": "FLUID-3611",
      "summary": "Text persists in edit mode when view mode displays default text"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Undoing and then redoing an edit that deletes all text causes rich text inlne edit to display the wrong text in Edit mode.

To reproduce:

* load: <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>
* delete all text in either CK Editor or Tiny MCE (affects both editors)
* undo edit
* redo edit (so it is blank again)
* press Edit
* result: the original default text appears in Edit mode.

        
---json
{
  "title": "FLUID-4470",
  "summary": "Rich text: Editing empty area loads previously deleted content in editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-09-27T10:38:15.842-0400",
  "updated": "2014-04-02T15:55:03.237-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF6 Mac, IE8 Win XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:55:03.225-0400",
      "body": "Can't reproduce anymore.\n"
    }
  ]
}
---
Go to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>

Edit, delete all content, Save\
Click "undo edit" then "redo edit"\
Area should still be empty but when clicking "Edit" the previously deleted content shows in the editor

        
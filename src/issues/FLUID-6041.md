---json
{
  "title": "FLUID-6041",
  "summary": "JAWS announces the undo/redo controls as \"inline edit slash number link graphic\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2016-11-07T15:55:01.147-0500",
  "updated": "2024-07-22T09:18:54.360-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": "IE 11 ( Win 8.1, JAWS 17 )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Ensure JAWS is enabled\
2\. Open the [Inline Edit demo](http://build.fluidproject.org/infusion/demos/inlineEdit/)\
3\. Edit some text in an inline edit field\
4\. Close the inline edit field and move focus to the undo button

Notice that JAWS announces the undo button as "inline edit slash number link graphic". This may be caused by the navigable element being a link, whose ancestor has a role button. Instead of it being the button itself.

        
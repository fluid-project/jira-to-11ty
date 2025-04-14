---json
{
  "title": "FLUID-6671",
  "summary": "With JAWS enabled, using the keyboard to trigger the second inline edit or it's undo/redo button, triggers the undo/redo of the first inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T13:00:04.095-0400",
  "updated": "2021-07-19T13:00:04.095-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Chrome 91 & JAWS 2021 (Win 10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

* Open the Inline Edit demo
* With JAWS enabled, make a change to the first inline edit field 
* Press enter to save the change
* Navigate to the second inline edit field
* Press enter or space to open the field in edit mode
* Notice that it doesn't open, and the undo button for the first inline edit field is triggered.

        
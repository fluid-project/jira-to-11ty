---json
{
  "title": "FLUID-760",
  "summary": "Using arrow keys in inline edit shifts focus to text display (thus ending the edit mode).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-10T17:18:53.000-0400",
  "updated": "2008-06-23T17:34:34.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-11T11:37:22.000-0400",
      "body": "The check for the Enter key was only looking at evt.which - the Arrow keyCode is stored in evt.keyCode and in that case, evt.which is 0, which fails the check, so the arrow was being processed as an Enter.&#x20;\n\nThe fix is to check both keyCode and which.\n"
    }
  ]
}
---
To reproduce:

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

* Enter edit mode (via mouse or keyboard) on any one of the fields
* Press an arrow key

The mode switches from edit to display.

dev-iteration36

        
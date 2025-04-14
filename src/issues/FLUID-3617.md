---json
{
  "title": "FLUID-3617",
  "summary": "Cannot collapse inline edit dropdown menu by clicking original dropdown element or dropdown button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-04-08T10:43:44.000-0400",
  "updated": "2017-03-13T11:08:01.835-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF 3.6, IE 8, Chrome 4 (XP)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T15:53:50.887-0500",
      "body": "Tested with IE8, Chrome 4 and FF3.6 Win7:\n\n* Selecting original item in list will collapse dropdown (using keyboard or mouse)\n* Pressing ESC will collapse the dropdown.\n* Pressing dropdown control will not collapse the dropdown.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/inlineEdit/>\
After the dropdown menu is expanded, user can only collapse it with the mouse by clicking outside the dropdown area or one of the options in the dropdown menu.

Specifically, the user cannot collapse it by clicking on the original dropdown element or on the dropdown button that appears when the dropdown is expanded.

        
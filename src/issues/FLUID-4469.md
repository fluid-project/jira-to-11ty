---json
{
  "title": "FLUID-4469",
  "summary": "Can't access Tiny MCE or CKEditor's buttons with keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2011-09-27T09:39:09.528-0400",
  "updated": "2024-07-22T14:18:00.880-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF6 Mac, FF6 Win XP&#x20;\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3081/",
      "key": "FLUID-3081",
      "summary": "Cannot access CKEditor 3 / FCKEditor toolbar buttons with keyboard"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-09-27T10:43:38.514-0400",
      "body": "If the buttons have keyboard short cuts we should add an accessible link to a list of the short cuts\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:22:15.511-0400",
      "body": "Dropped to minor as these are just manual tests and not intended to be fully functional demos.\n"
    }
  ]
}
---
Load <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>

Open either editor with keyboard - can tab to save/cancel buttons but not to editor buttons.

        
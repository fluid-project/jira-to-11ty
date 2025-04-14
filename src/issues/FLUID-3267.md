---json
{
  "title": "FLUID-3267",
  "summary": "Pressing the \"enter\" key does not save an edit: using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-08T18:52:04.000-0400",
  "updated": "2014-07-14T09:33:27.757-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3263/",
      "key": "FLUID-3263",
      "summary": "Press enter to finish editting"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2436/",
      "key": "FLUID-2436",
      "summary": "Enter doesn't activate save: using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:56:34.815-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:33:27.755-0400",
      "body": "This issue isn't present in IE 11 and IE 7 is no longer a supported browser.\n"
    }
  ]
}
---
Pressing the "enter" key does not save an edit

Steps to reproduce:

1\) Open the simple Inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>

2\) Open one of the inline edit fields into edit mode and make a change

3\) Using the keyboard tap the enter key. Notice that it does not save the change, but remains in edit mode.

        
---json
{
  "title": "FLUID-883",
  "summary": "Last in-line edit field retains focus styling, using FF3 on Mac",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-07-09T20:08:47.000-0400",
  "updated": "2008-07-18T17:23:46.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3 (Mac OS X)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-857/",
      "key": "FLUID-857",
      "summary": "Blur on an Inline Edit while editing leaves a 'focus' style behind"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-18T17:10:37.000-0400",
      "body": "I can't reproduce this after my fix to <https://fluidproject.atlassian.net/browse/FLUID-857#icft=FLUID-857> - could you check that it is still happening?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-18T17:23:46.000-0400",
      "body": "Fixed with fix to Fluid-857\n\nVerified on FF3 (Mac OS 10.5)\n"
    }
  ]
}
---
The last in-line edit field retains focus styling after being in edit mode. This only happens in keyboard interaction and returns to proper styling after tabbing back on and off of it.

Steps to reproduce:

1\)  navigate to either of the in-line edit demo pages\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

2\) using the keyboard, tap the 'tab' key until the last in-line edit field has focus.

3\) enter edit mode by tapping either 'enter' or 'space'

4\) leave edit mode by tapping either 'enter' or 'tab'

5 tap the 'tab' key to move away from the in-line edit field. Notice that the focus styling remains

6\) tap the 'tab' key until focus is back on the last in-line edit field. tap the 'tab' key once more. Notice that the in-line edit field no longer has focus.

        
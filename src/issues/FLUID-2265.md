---json
{
  "title": "FLUID-2265",
  "summary": "Can't tab to the cancel button for FCK Editor: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-02-18T15:49:14.000-0500",
  "updated": "2014-03-03T14:44:13.834-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 7 (Win XP, Win Vista)\\\nIE 6 (Win XP, Win 2000)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-16T15:14:37.000-0400",
      "body": "you can shift-tab to get to the \"cancel\" button\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:16:53.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-07T10:58:25.000-0400",
      "body": "It is unlikely that this issue can be resolved. Tab order is a native browser issue, and also FCKeditor functions by dynamically creating an iframe within the document which will further interfere with attempts to manipulate tab order. If the issue does not appear on IE8 I suggest we mark it as \"Won't (can't) fix\".\n"
    }
  ]
}
---
Can't tab to the cancel button for FCK Editor: using IE

Steps to reproduce:

1\) Open the rich-text inline edit page\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Open one of the FCK rich-text inline edit fields

3\) Attempt to tab to the "Cancel" button

Notice that you are unable to tab to the cancel button. A work around is that if you have focus on the save button, pressing the 'esc' key will cancel the edit.

        
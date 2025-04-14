---json
{
  "title": "FLUID-1661",
  "summary": "undo/redo can become out of sync with text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-10-06T09:12:02.000-0400",
  "updated": "2008-11-10T09:22:36.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T17:18:19.000-0500",
      "body": "Fixed at revision 5965\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:22:36.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
undo/redo can become out of sync with text

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit the text in one of the inline edit fields (e.g. to "change 1")

3\) Click out side of the inline edit field to save the edit

4\) Edit the same inline edit field again (e.g. to "change 2")

5\) Click out side of the inline edit field to save this edit

6\) Click the undo button, the text should now be "Change 1"

7\) Activate the inline edit field again, but click outside to close edit mode without making any changes

8\) Click the redo icon. Notice that it changes to an undo icon without changing the value to "Change 2". Now undo = "Change 2" and redo = "Change 1" when they should be the other way around

        
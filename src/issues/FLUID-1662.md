---json
{
  "title": "FLUID-1662",
  "summary": "Wrong undo value after editing an inline edit field after an undo operation",
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
  "date": "2008-10-06T09:23:04.000-0400",
  "updated": "2008-11-10T09:16:32.000-0500",
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
      "date": "2008-11-07T17:16:22.000-0500",
      "body": "Fixed at revision 5965\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:16:32.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Wrong undo value after editing an inline edit field after an undo operation

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit one of the inline edit fields (e.g. with "Change 1") and save the edit

3\) Edit the same inline edit field (e.g. with "Change 2") and save the edit

4\) Click the undo button so the value of the inline edit field is back to "Change 1"

5\) Edit the inline edit field again (e.g. with "Change 3") and save the edit

6\) Click the undo button, notice that the value is put back to "Change 2" instead of "Change 1"

        
---json
{
  "title": "FLUID-2544",
  "summary": "Typing a space in the slider's text box sets it to the minimum value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Justin Obara",
  "date": "2009-04-06T15:15:37.000-0400",
  "updated": "2009-05-16T13:20:16.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2544/FLUID-2544_patch.txt",
      "filename": "FLUID-2544_patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2009-05-13T14:48:50.000-0400",
      "body": "Patch for the issue.\n"
    },
    {
      "author": "y z",
      "date": "2009-05-13T15:17:32.000-0400",
      "body": "Updated the patch to comply with jslint\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-16T13:11:55.000-0400",
      "body": "returning this one to open, until the patch is committed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-16T13:20:16.000-0400",
      "body": "Actually it was committed at revision 7174&#x20;\n\nVerified fix using:\n\nIE 6, FF3 (Win XP)\\\nFF2, FF3, Opera 9.6 (Mac OS 10.5)\n"
    }
  ]
}
---
Typing a space in the slider's text box sets it to the minimum value. It should remain as what the last valid input was.

Steps to reproduce:

1\) Open the UI Options example

2\) Change the value in one of the slider text fields to a new valid value, and move focus to another element

3\) In that same text field, replace the value with a space, and move focus away from the text field.

Notice that when focus is moved away, the value is set to the minimum value for the field, instead of the last valid value.

        
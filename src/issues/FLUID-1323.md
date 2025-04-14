---json
{
  "title": "FLUID-1323",
  "summary": "Focus does not remain on undo/redo button after pressing enter",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:40:08.000-0400",
  "updated": "2008-09-23T15:18:40.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1323/FLUID-1323.txt",
      "filename": "FLUID-1323.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:52:14.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-23T12:36:44.000-0400",
      "body": "I've attached a fix for this bug but I'm not sure if it is 'ideal'. Antranig, can you take a look at this and let me know what you think?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-23T14:28:24.000-0400",
      "body": "Hi Michelle - thanks, this fix looks fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T15:18:40.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Focus does not remain on undo/redo button after pressing enter

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit the content of one of the inline edit fields, so that the undo icon appears.

3\) Using the keyboard, navigate to the undo icon and press enter. Notice that focus has moved off of the undo/redo icon.

dev-iteration43

        
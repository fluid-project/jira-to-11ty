---json
{
  "title": "FLUID-1632",
  "summary": "Tabs with links inside do not support keyboard drag and drop",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-26T11:46:22.000-0400",
  "updated": "2008-09-26T15:56:47.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Keyboard Accessibility",
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1618/",
      "key": "FLUID-1618",
      "summary": "Markup can break List Reorderer's keyboard navigation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1633/",
      "key": "FLUID-1633"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-09-26T14:33:52.000-0400",
      "body": "I have reviewed Jacob's commit #5695 and submitted a small revision that cleans up tabs and spaces. #5696\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-26T14:36:15.000-0400",
      "body": "Update implementation code and CSS\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-26T14:46:13.000-0400",
      "body": "I reviewed Eli's commit #5696, file is now cleanly formatted\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T15:56:47.000-0400",
      "body": "verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Tabs with links inside do not support keyboard drag and drop

Steps to reproduce:

1\) Open the Reorderer Springboard from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Tap the "tab" key until one of the Tab elements has focus

3\) Attempt to move the tab using the keyboard

Notice that keyboard drag and drop does not work

        
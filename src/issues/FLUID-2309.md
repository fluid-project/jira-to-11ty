---json
{
  "title": "FLUID-2309",
  "summary": "menu bar manual test example is throwing an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-04T12:05:43.000-0500",
  "updated": "2009-03-26T11:25:15.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1640/",
      "key": "FLUID-1640",
      "summary": "Menubar manual test is using the old API"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:47:01.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-26T11:25:15.000-0400",
      "body": "Antranig fixed this issue while porting to ui.core a11y\n"
    }
  ]
}
---
menu bar manual test example is throwing an error

Steps to reproduce:

1\) Open the menu bar manual test page\
<http://build.fluidproject.org/fluid/tests/jquery-tests/manual/menubar/MenuBarExample.html>

Notice that an error is thrown

Error: menuBar.tabbable is not a function\
File: AccessibleMenuBar.js\
Line: 88

        
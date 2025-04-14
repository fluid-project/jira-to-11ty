---json
{
  "title": "FLUID-1958",
  "summary": "Tiny MCE is missing icons",
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
  "date": "2008-12-11T09:43:33.000-0500",
  "updated": "2008-12-11T13:52:45.000-0500",
  "versions": [],
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
      "date": "2008-12-11T12:59:52.000-0500",
      "body": "Fixed at revision 6196\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-11T13:52:17.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-11T13:52:45.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Tiny MCE is missing icons

Steps to reproduce:

1\) Open the rich text inline edit example\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Click on one of the first two lines of text to open up the inline edit field in edit mode, using Tiny MCE

Notice that there is a blank toolbar at the bottom of the richtext editor, that has squares when hovering over it.

        
---json
{
  "title": "FLUID-884",
  "summary": "No cursor for last two in-line edit fields, using FF2 on Mac",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-09T20:37:04.000-0400",
  "updated": "2008-07-23T14:37:37.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS X)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-936/",
      "key": "FLUID-936",
      "summary": "Cursor not displaying in editible field"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T14:37:12.000-0400",
      "body": "This is the same as Fluid-936. It is more general so it makes sense to use that one instead\n"
    }
  ]
}
---
There is no cursor displayed on the last two in-line edit fields.

Steps to reproduce:

1\) open the in-line edit demo from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) click on one of the last two in-line edit fields. Notice that there is no cursor displayed.

A similar issue happens with the other in-line edit demo as well\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

        
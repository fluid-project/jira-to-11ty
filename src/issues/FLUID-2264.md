---json
{
  "title": "FLUID-2264",
  "summary": "No focus styling for items in the Tiny MCE toolbar: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-02-18T15:31:14.000-0500",
  "updated": "2011-01-06T15:55:40.811-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\\\nIE 7 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:17:06.550-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T15:55:40.809-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-3865#icft=FLUID-3865>.\n"
    }
  ]
}
---
No focus styling for items in the Tiny MCE toolbar: using IE

Steps to reproduce:

1\) Open the rich-text inline edit page\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Open one of the Tiny MCE rich-text inline edit fields

3\) Modify the text and hit the 'tab' key until the save button has focus.

4\) Notice that as you go along the items in the toolbar do not receive focus but are tabbed to.

        
---json
{
  "title": "FLUID-1317",
  "summary": "Can't tab to the undo/redo icons in Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:07:32.000-0400",
  "updated": "2008-11-04T08:23:17.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\\\nFF2, Opera, FF3 (OSX10.4 )\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1329/",
      "key": "FLUID-1329"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1743/",
      "key": "FLUID-1743"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1322/",
      "key": "FLUID-1322",
      "summary": "The undo/redo icons are not in the correct tab order"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1329/",
      "key": "FLUID-1329",
      "summary": "inline edit - undo/redo  do not receive focus"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1318/",
      "key": "FLUID-1318",
      "summary": "Can't tab to any of the inline edit fields until after one has been activated in Opera"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:52:47.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T10:39:24.000-0400",
      "body": "Opera seems to do keyboard access in a very different way than is typical. Shift+arrow can be used to move focus to links, and various combinations of shift+arrow and tab can be used to get focus to any element on the page.\n\nI'm not sure how we deal with this issue.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-03T12:57:28.000-0500",
      "body": "Fixed at revision 5953\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-04T08:23:17.000-0500",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)&#x20;\n"
    }
  ]
}
---
Can't tab to the undo/redo icons

Steps to reproduce:

1\) Open the bSpace demo page from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Change the content of one of the inline edit fields so that the undo icon appears

3\) Attempt to tab to the undo icon. Notice that you are not able to tab to it.

dev-iteration43

        
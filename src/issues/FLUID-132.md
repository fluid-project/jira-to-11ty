---json
{
  "title": "FLUID-132",
  "summary": "When moving an orderable using the keyboard, if it passes under the mouse it acquires and keeps the \"mouse hover\" style.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-28T14:48:58.000-0500",
  "updated": "2017-01-25T19:14:49.604-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 11 (Windows 7)\\\nFF 30 (Mac OS 10.9)\\\nFF 50 (macOS 10.12)\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF 4, Safari 5 (Mac OS 10.6)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-132/Image1.jpg",
      "filename": "Image1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-132/screenshot.png",
      "filename": "screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-132/screenshot-1.png",
      "filename": "screenshot-1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-13T13:42:37.000-0400",
      "body": "Updated Environment the issue affects\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-26T13:08:41.871-0400",
      "body": "Updated the description\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-26T13:09:39.359-0400",
      "body": "screenshot.png shows multiple reordererable elements with the hover highlighting applied.\n"
    },
    {
      "author": "Dave Ayotte",
      "date": "2016-12-20T14:55:26.926-0500",
      "body": "In IE 11 only, repeated multiple moves with the mouse sometimes causes some grid squares to disappear completely or for a grid square to lose it's letter (blank content). This does not occur in Firefox or Chrome. @@Justin Obara @@Dana\n"
    },
    {
      "author": "Dave Ayotte",
      "date": "2016-12-20T15:05:36.347-0500",
      "body": "<!-- media: file e1607c0b-f0cb-4426-8ccb-377d572ef527 -->\n\n&#x20;Ths image demos my previous comment @@Justin Obara @@Dana\n"
    },
    {
      "author": "Dana",
      "date": "2017-01-25T19:13:33.975-0500",
      "body": "Thanks @@Dave Ayotte the issue you report in your comment has been captured in <https://issues.fluidproject.org/browse/FLUID-5870> (also see various sub-issues there)&#x20;\n\nFYI @@Justin Obara\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the grid reordered demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/>

2\) Place the mouse over one of the reorderable elements

3\) Using the keyboard move the other elements around.\
Notice that as an element passes under the mouse, it picks up and retains the hover styling.

        
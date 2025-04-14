---json
{
  "title": "FLUID-1598",
  "summary": "Locked portlet warning message persists after attempting keyboard move above a locked portlet in Opera",
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
  "date": "2008-09-19T10:48:24.000-0400",
  "updated": "2008-09-25T08:49:59.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1598/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1598/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T10:49:53.000-0400",
      "body": "'screenshot-1' shows the persistant warning message even after another portlet has been picked up and is displaying the warning message\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:04:30.000-0400",
      "body": "'screenshot-2' shows the same thing as 'screenshot-1' but in the uPortal example\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:58:05.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-22T17:55:16.000-0400",
      "body": "I can't reproduce this bug in either FF3/Mac, IE7/XP or IE6/XP\n\nCan you give more info about how to reproduce?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T08:20:32.000-0400",
      "body": "It only occurs in Opera 9.5 on Win XP\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T12:47:38.000-0400",
      "body": "In Opera, the portlet that is 'being moved' gets a blur after the move attempt (whether the move was successful or not). Because of this, the ctrl-key up, which should cause the warning to disappear, is not received.\n\nSo why is the blur happening?\\\n(this causes other problems with any flavour of Reorderer: as soon as you move anything, focus is lost, so you can't continue to move it, you can't arrow to another portlet, etc.)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T16:33:45.000-0400",
      "body": "Fixed at revision 5669\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T17:01:41.000-0400",
      "body": "I've looked at Antranig's commit (r5669) and it looks good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T08:49:59.000-0400",
      "body": "Verified fix using:\n\nOpera 9.5 (Win XP)\n"
    }
  ]
}
---
Locked portlet message persists after attempting keyboard move above a locked portlet

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Use the keyboard to attempt to move a portlet above a locked portlet.

Notice that the warning message persists

Also happens in the springboard example

        
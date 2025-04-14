---json
{
  "title": "FLUID-452",
  "summary": "Reorderer: cannot move a tab to final position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T15:09:41.000-0400",
  "updated": "2008-04-21T13:01:05.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:23:04.000-0400",
      "body": "I'm unable to reproduce this. Herb, is it possible that this is an example of <https://fluidproject.atlassian.net/browse/FLUID-459#icft=FLUID-459>, where Ctrl+Arrow doesn't move more than once?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:24:48.000-0400",
      "body": "Ok, a further question: did you encounter this problem using the keyboard manipulations, or with mouse-based drag and drop?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-10T14:24:33.000-0400",
      "body": "Confirmed the problem with Herb on the phone.\n\nUsing uportal-sortable-tabs-mockup.html I am able to reproduce the bug. It appears that you have to be very precise in where you drop in order for the tab to stick at the end of the list.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T13:01:05.000-0400",
      "body": "This is an issue of poor styling in a sample page that is being removed from the release.\n"
    }
  ]
}
---
On the unordered tabs list test page (<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/unordered-list-tabs/unordered-list-tabs.html#>) and uportal unordered tabs list test page (<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal-unordered-list-tabs/uportal-sortable-tabs-mockup.html#>), no tab can be moved to the last (rightmost) position directly - the rightmost tab has to be moved to the left, this is the only way to change what tab is in the rightmost position.

        
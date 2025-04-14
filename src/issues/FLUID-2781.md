---json
{
  "title": "FLUID-2781",
  "summary": "Changing the sort order from ascending to descending to ascending ( and vice versa) will move focus away from the header",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-27T10:38:21.000-0400",
  "updated": "2014-07-11T14:38:44.948-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:38:44.947-0400",
      "body": "Cannot reproduce this issue, it could have been for a demo that is no longer being used.\n"
    }
  ]
}
---
Changing the sort order from ascending to descending to ascending ( and vice versa) will move focus away from the header

Steps to reproduce:

1\) Tap the 'tab' key until one of the sortable headers has focus

2\) Tap the enter key to sort by that header

3\) Tap the enter key again to reverse the sort order

4\) Tap the enter key a third time

Notice that focus is moved away from the header

        
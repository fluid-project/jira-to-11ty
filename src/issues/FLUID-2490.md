---json
{
  "title": "FLUID-2490",
  "summary": "Number of items per page should not allow 5 items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-04-02T16:19:13.000-0400",
  "updated": "2011-01-13T12:28:36.969-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T14:36:59.000-0400",
      "body": "The smallest option should be 10 items per page.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-13T12:28:36.637-0500",
      "body": "This issue was fixed and pager does not have the options to view 5 items per page.\n"
    }
  ]
}
---
Erin noted that the drop down for the number of items per page should start at 10 and should not display values larger than the number of items available.

        
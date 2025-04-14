---json
{
  "title": "FLUID-2455",
  "summary": "missing red background behind drop target warning message",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-04-01T14:13:53.000-0400",
  "updated": "2011-02-28T16:45:17.361-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2455/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T14:14:33.000-0400",
      "body": "'screenshot-1' shows the missing background behind the warning text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-13T11:54:24.000-0400",
      "body": "Renamed the class \"dropWarning\" to \"flc-reorderer-dropWarning\" it had been missed during our round of class name changes\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-13T11:55:10.000-0400",
      "body": "Jacob, could you please verify and close this issue if the fix is okay.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.359-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
missing red background behind drop target warning message

Steps to reproduce

1\) Open the Layout Reorderer quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/reorderer/html/LayoutReorderer.html>

2\) In the second set of sortable elemens, attempt to drag a content portal over one of the locked ones.

Notice that there is no background  behind the warning message

        
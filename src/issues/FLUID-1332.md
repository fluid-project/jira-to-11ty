---json
{
  "title": "FLUID-1332",
  "summary": "The pointer is always an i-bar when over the active tab",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-08-27T15:34:00.000-0400",
  "updated": "2008-11-03T09:48:07.000-0500",
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
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1332/FLUID-1332.patch",
      "filename": "FLUID-1332.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:02:42.000-0400",
      "body": "flora theme forced I-Bar cursor over links\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:48:07.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\\\nFF3(Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
The pointer is always an i-bar when over the active tab.

Steps to reproduce:

1\) Open the sortable jQuery Tabs example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Place the pointer over the active tab (by default this is "Welcome").  Notice that the pointer is an i-bar

3\) Pick up this tab and move it somewhere else. Notice that pointer always remains an i-bar

        
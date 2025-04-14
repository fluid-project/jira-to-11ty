---json
{
  "title": "FLUID-2188",
  "summary": "jquery ui tabs don't display as tabs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-03T11:06:05.000-0500",
  "updated": "2009-02-10T12:57:36.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-10T11:12:40.000-0500",
      "body": "Fixed at revision 6457 - shared file ui.tabs.js had not been updated\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T12:57:36.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
jquery ui tabs don't display as tabs

<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/jquery-ui-tabs/jquery-ui-accessible-tabs.html>

They appear as a vertical list

        
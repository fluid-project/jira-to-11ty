---json
{
  "title": "FLUID-2135",
  "summary": "Sortable JQuery Tabs throws an error on page load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-01-16T09:12:41.000-0500",
  "updated": "2009-01-16T10:41:29.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3, FF2, Opera 9.5 (Mac OS 10.5)\\\nFF3, FF2, Opera 9.4 (Win XP)\\\nFF3, (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-16T10:06:17.000-0500",
      "body": "Fixed at revision 6326\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-16T10:41:29.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2, Opera 9.5 (Mac OS 10.5)\\\nFF3, (Win Vista)\n"
    }
  ]
}
---
Sortable JQuery Tabs throws an error on page load

The page still seems to function normally though.

Steps to reproduce:

1\) Open the Sortable jQuery tabs example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

Notice that one page load an error is thrown

Error: $("#container-1 a").tabindex is not a function\
line: 102\
file: jquery-tabs.html

        
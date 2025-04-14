---json
{
  "title": "FLUID-1965",
  "summary": "Themed tabs example is broken in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-12-12T09:07:46.000-0500",
  "updated": "2011-01-14T09:53:26.040-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1964/",
      "key": "FLUID-1964"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1965/FLUID-1965.patch",
      "filename": "FLUID-1965.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-12T09:08:16.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-12T15:02:46.000-0500",
      "body": "FF2 inline-block workaround\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-12T15:10:15.000-0500",
      "body": "Added FF2 specific workaround for inline-block\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-12T16:16:09.000-0500",
      "body": "This fix looks ok to me (the tabs display under FF2 - Windows), however, because of <https://fluidproject.atlassian.net/browse/FLUID-1758#icft=FLUID-1758>, there is still no drop marker\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T16:19:33.000-0500",
      "body": "Verified fix using\n\nFF2 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Themed tabs example is broken in FF2

Steps to reproduce:

1\) Open the reorderer springboards from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Scroll to the bottom of the page

Notice that the themed tabs are not displayed as tabs

        
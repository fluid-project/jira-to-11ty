---json
{
  "title": "FLUID-2192",
  "summary": "pager throws an error on load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-04T09:16:35.000-0500",
  "updated": "2009-02-16T23:08:33.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2179/",
      "key": "FLUID-2179",
      "summary": "Paged contents not displayed in renderer version"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:51:37.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T17:45:44.000-0500",
      "body": "Pager-renderer now working again, with the tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T23:06:46.000-0500",
      "body": "tested using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE6 (Win XP)\n\nIt appeared to be working.\n\nWaiting on a code review to close\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T23:08:21.000-0500",
      "body": "Colin verified this\n\nQuote from a message to the fluid-work list\n\n\"\\* I reviewed the series of commits that fix <https://fluidproject.atlassian.net/browse/FLUID-2179#icft=FLUID-2179> and <https://fluidproject.atlassian.net/browse/FLUID-2192#icft=FLUID-2192>. The Pager is working nicely again in all of the browsers I tested with, and a number of framework improvements came along with this fix.  +1 for inclusion in Infusion 0.8.\"\n"
    }
  ]
}
---
pager throws an error on load

<http://build.fluidproject.org/fluid/sample-code/pager/basic/pager.html>\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html>

Error: EL is undefined\
File: Fluid.js\
Line: 593

It seems that this is breaking both versions of pager and the unit tests for it.

        
---json
{
  "title": "FLUID-2179",
  "summary": "Paged contents not displayed in renderer version",
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
  "date": "2009-02-02T09:10:34.000-0500",
  "updated": "2009-02-16T23:04:54.000-0500",
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
      "url": "/browse/FLUID-2192/",
      "key": "FLUID-2192"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:52:02.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T17:48:31.000-0500",
      "body": "New pager architecture using \"columnDefs\", cellRoot -> dataOffset. All versions of pager now working again\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T22:54:32.000-0500",
      "body": "I've reviewed this code. There are some aspects that could use some TLC: JSLinting, lack of substantial new unit tests, some deep nesting that could be flattened to improve readability. Nonetheless, this is a lot of great new functionality and it works fairly well.\n\nThis component has undergone a great deal of change, both architecturally and in terms of functionality. It's probably not quite ready to come out of \"Preview\" status for 0.8, but these changes and fixes are definitely worth shipping. +1 for inclusion in Infusion 0.8.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T23:04:54.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE6 (Win XP)\n"
    }
  ]
}
---
Paged contents not displayed in renderer version

Steps to reproduce:

1\) Open the renderer version of pager:\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html#>

Notice that the paged contents are not displayed

An error is thrown.

Error: cellRoot is not defined\
Line: 225\
File: Pager.js

        
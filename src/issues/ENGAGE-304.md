---json
{
  "title": "ENGAGE-304",
  "summary": "Exhibition browse styling is incorrect. Corners in the list should not be rounded.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-01-28T13:50:43.000-0500",
  "updated": "2017-12-22T09:44:21.769-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-304/304Core.txt",
      "filename": "304Core.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-304/304Kettle.txt",
      "filename": "304Kettle.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-304/304Kettle[b].txt",
      "filename": "304Kettle[b].txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-304/browseCabinet.txt",
      "filename": "browseCabinet.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-304/cabinetBrowse.txt",
      "filename": "cabinetBrowse.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-01-28T17:24:34.000-0500",
      "body": "this is a patch with example of cabinet issue\n"
    },
    {
      "author": "y z",
      "date": "2010-01-28T18:15:27.000-0500",
      "body": "Patch that demonstrates unexpected cabinet behavior. Here cabinet toggling is working but it is open on load.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-29T16:17:38.000-0500",
      "body": "Currently this patch results in no headings on the navigation lists. Yura is working on a replacement patch.\n"
    },
    {
      "author": "y z",
      "date": "2010-01-29T16:17:44.000-0500",
      "body": "Latest working version for browse.\n"
    },
    {
      "author": "y z",
      "date": "2010-01-29T17:02:43.000-0500",
      "body": "This is an attempt to implement i18n with other component that uses browse. It only works for english data right now, need a way of passing along string bundle with french app strings.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:21.767-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Corners in the list on the exhibition browse page should not be rounded.

        
---json
{
  "title": "ENGAGE-506",
  "summary": "condenser.js is filled with commented-out code",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2010-03-09T13:18:05.000-0500",
  "updated": "2017-12-22T09:44:25.006-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-506/ENGAGE-506.patch",
      "filename": "ENGAGE-506.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-09T13:20:03.000-0500",
      "body": "Here's an untested patch that removes all the obvious stuff.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:25.004-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, condenser.js has commented-out debugging code and old implementations strewn around the code. This should be removed.

        
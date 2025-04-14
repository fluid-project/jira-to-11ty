---json
{
  "title": "VULAB-187",
  "summary": "Database Missing Setup Data",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-03-02T12:23:04.000-0500",
  "updated": "2014-03-03T14:43:53.503-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-187/VULAB-187.patch",
      "filename": "VULAB-187.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-03-02T12:24:21.000-0500",
      "body": "I pulled this data from an old database. Everything should work just fine!\n\nNOTE: JohnC found this in his testing 🙂\n"
    },
    {
      "author": "Blake E",
      "date": "2009-03-16T14:14:54.000-0400",
      "body": "in the svn. database.sql is updated 🙂\n"
    }
  ]
}
---
When doing a clean install, the database.sql misses installing some data required for the system.

Specifically the rows relating to question\_types and choices.

        
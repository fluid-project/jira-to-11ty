---json
{
  "title": "ENGAGE-288",
  "summary": "Change data feeds so that they accept a language parameter",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-25T12:57:12.000-0500",
  "updated": "2010-02-08T16:57:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/core288c.patch",
      "filename": "core288c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/Core288d.txt",
      "filename": "Core288d.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/Core288e.txt",
      "filename": "Core288e.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/Core288f.txt",
      "filename": "Core288f.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/kettle288c.patch",
      "filename": "kettle288c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/kettle288d.txt",
      "filename": "kettle288d.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/kettle288e.txt",
      "filename": "kettle288e.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-288/kettle288f.txt",
      "filename": "kettle288f.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:16:26.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "y z",
      "date": "2010-02-02T13:34:25.000-0500",
      "body": "Most updated patch that fixes the services for exhibiton browse, view and about\n"
    },
    {
      "author": "y z",
      "date": "2010-02-02T18:03:55.000-0500",
      "body": "Latest patch that works with all pages but artifact view\n"
    },
    {
      "author": "y z",
      "date": "2010-02-03T11:16:33.000-0500",
      "body": "Latest patch for new data feeds, ready for merge with Antranig's update\n"
    },
    {
      "author": "y z",
      "date": "2010-02-03T16:15:24.000-0500",
      "body": "All data and markup feeds work except for the new data sprout that replaces the older datafeed on exhibition browse page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-08T16:57:12.000-0500",
      "body": "The data feeds are now taking in a language parameter\n"
    }
  ]
}
---
The database will contain different documents for each language - for example for a specific artifact there would be a French artifact document and an English artifact document. The data feeds need to accept a language parameter, search the database appropriately and return language specific data.&#x20;

        
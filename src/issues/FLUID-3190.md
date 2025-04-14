---json
{
  "title": "FLUID-3190",
  "summary": "add counter to caching",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-21T15:31:30.000-0400",
  "updated": "2009-09-30T09:53:03.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:47:39.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-23T09:22:59.000-0400",
      "body": "Modified the mysqlscript to add another column to the cache table to record number of downloads of a particular module. Modified postProcessor.php to initialize and increment this value on download.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T09:53:03.000-0400",
      "body": "Jacob reviewed\n"
    }
  ]
}
---
Add a counter to the caching process to track popularity of various downloads.

        
---json
{
  "title": "ENGAGE-318",
  "summary": "Fix the character encoding issues in the McCord data",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2010-02-03T14:43:14.000-0500",
  "updated": "2014-03-03T14:13:02.671-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Import"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-318/importer.txt",
      "filename": "importer.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-03T14:43:25.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "y z",
      "date": "2010-02-04T13:10:51.000-0500",
      "body": "Fixed with this patch\n"
    },
    {
      "author": "y z",
      "date": "2010-02-04T13:11:11.000-0500",
      "body": "Patch with fixed importer is attached to this jira\n"
    }
  ]
}
---
Accented characters are currently not displaying correctly. This is likely due to the import process which is not handling character encoding correctly.&#x20;

        
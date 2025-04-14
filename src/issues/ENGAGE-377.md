---json
{
  "title": "ENGAGE-377",
  "summary": "Catalogue section is displayed in exhibition view even if the catalogue size is 0",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2010-02-12T11:14:49.000-0500",
  "updated": "2010-02-12T11:23:38.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-377/catalogueSize.patch",
      "filename": "catalogueSize.patch"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-12T11:17:33.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T11:23:38.000-0500",
      "body": "Committed yura's patch. It was a pretty small change and seems to be working.\n"
    }
  ]
}
---
Currently catalogue is displayed even if its size is 0 , instead this block should be rendered out.

        
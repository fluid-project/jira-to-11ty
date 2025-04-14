---json
{
  "title": "FLUID-3456",
  "summary": "remove \"if table exists\" from database table creation script in infusion builder deploy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T16:02:13.000-0500",
  "updated": "2010-01-06T13:50:10.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3437/",
      "key": "FLUID-3437",
      "summary": "Infusion Builder should only build the version requested by the user--either minified or source--not both"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-01-06T13:50:00.000-0500",
      "body": "This was completed as part of <https://fluidproject.atlassian.net/browse/FLUID-3437#icft=FLUID-3437>\n"
    }
  ]
}
---
Currently, the database cache table is only created if it doesn't exist already. This causes a problem if we change the database table format. We need to create the new cleared database table every time.

        
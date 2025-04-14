---json
{
  "title": "FLUID-4912",
  "summary": "Update .npmignore to not filter testing framework related files.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-01-31T09:19:48.285-0500",
  "updated": "2014-03-03T12:28:07.741-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-02-05T08:57:03.568-0500",
      "body": "Fixed and merged into master, rev: 8a0ebfa2506562e2cd43a452e4750d20cf51d0b2\n"
    }
  ]
}
---
.npmignore should not filter the following resources:

src/webapp/tests/lib\
src/webapp/lib/jquery

        
---json
{
  "title": "DECA-191",
  "summary": "Relative path in genpdf causing the script to fail when executed from the server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2011-11-25T15:16:22.137-0500",
  "updated": "2012-01-10T09:35:42.081-0500",
  "versions": [],
  "fixVersions": [
    "0.5a"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-10T09:35:36.901-0500",
      "body": "This has been resolved. It had occurred because the scripts were being looked for from a relative path instead of from the system path. (e.g. ./fontgrouper.py instead of fontgrouper.py)\n"
    }
  ]
}
---
The relative paths for fontgrouper and ocro2pdf causes the genpdf script to fail when executed outside the genpdf source directory.

        
---json
{
  "title": "INFRA-49",
  "summary": "Enhance TLS security",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-10-15T10:16:49.024-0400",
  "updated": "2016-08-22T09:52:18.378-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:52:18.375-0400",
      "body": "Re-tested all websites and they pass the test. Fixes have been incorporated into our nginx roles months ago and will be reused every time a website (or reverse proxy) is deployed with TLS enabled.\n"
    }
  ]
}
---
According to <https://weakdh.org/sysadmin.html> we need to fix these websites:

wiki.gpii.net\
issues.gpii.net\
ci.gpii.net

wiki.fluidproject.org\
issues.fluidproject.org\
ci.fluidproject.org

        
---json
{
  "title": "INFRA-116",
  "summary": "Fluid's wiki 504 Gateway Time-out",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-16T09:20:57.314-0500",
  "updated": "2018-02-21T09:14:15.097-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-116/confluence-i14-20180216.tar.xz",
      "filename": "confluence-i14-20180216.tar.xz"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-116/KB437133.pdf",
      "filename": "KB437133.pdf"
    }
  ],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-16T10:01:16.053-0500",
      "body": "Observed that CPU load was very low, server was almost idling. No recent error messages in Confluence's logs (atlassian-confluence.log).\n\nNetstat showed 2055 sockets to port 8090 with 1979 sockets being in CLOSE\\_WAIT state. 1059 were to 127.0.0.1 and 997 were to ::1, suggesting different methods of opening the connection locally. Under normal operation, usually 100 sockets are open, most in TIME\\_WAIT state.\n\nCLOSE\\_WAIT could mean an application error. The attached PDF from Red Hat's Knowledge Base describes the problem in detail.\n\nRestarting Confluence fixes the issue temporarily. Since we don't have a support contract for Confluence, I'm engaging the community to try and identify next steps.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-20T11:43:37.306-0500",
      "body": "Atlassian suggests increase the DB pool. I've increase it from 30 to 60 and will monitor.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-21T09:14:15.086-0500",
      "body": "Increasing the DB pool has not had any negative impact so far. I'm going to close this issue and re-open if the problem happens again.\n"
    }
  ]
}
---
Users getting "504 Gateway Time-out" message while trying to access Fluid's Wiki.

Issue was reported by monitoring.

        
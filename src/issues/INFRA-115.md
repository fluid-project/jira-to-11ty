---json
{
  "title": "INFRA-115",
  "summary": "Fluid wiki's favicon got replaced during upgrade",
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
  "reporter": "Gregor Moss",
  "date": "2018-02-15T07:26:50.011-0500",
  "updated": "2018-03-09T08:12:46.418-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-15T10:48:59.079-0500",
      "body": "Issue is caused by a bug in Confluence 6.7.0 and will be fixed in 6.7.2 (not release yet)\n\n<https://jira.atlassian.com/browse/CONFSERVER-54888>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-09T08:12:46.374-0500",
      "body": "Updated to Confluence 6.7.2 and favicon is back.\n"
    }
  ]
}
---
After the upgrade to v6.7.0, the Fluid favicon was replaced by the factory default favicon.

        
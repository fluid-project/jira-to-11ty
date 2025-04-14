---json
{
  "title": "INFRA-203",
  "summary": "JIRA database is using unsupported collation",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-10T20:48:26.801-0400",
  "updated": "2018-09-10T09:24:28.173-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
JIRA DB was installed using UTF-8 and at some point JIRA started complainint that UTF-8 is not the same as the other UTF-8 they want. Need to dump DB and recreate using the newly required collation.

<https://confluence.atlassian.com/jirakb/health-check-database-collation-in-postgresql-943951450.html>

        
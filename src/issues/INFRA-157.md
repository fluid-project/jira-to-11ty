---json
{
  "title": "INFRA-157",
  "summary": "WP cron not running consistently",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-04T08:18:25.873-0400",
  "updated": "2018-04-05T08:24:04.202-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-05T08:24:04.200-0400",
      "body": "Create wp\\_ping.sh script to simply access these sites periodically.\n\nCurrently running through i-0023's cron (deploy user), every hour.\n"
    }
  ]
}
---
WP Cron is responsible for running periodic tasks but it depends on users accessing the websites. For less visited websites, these tasks can take quite a while.

        
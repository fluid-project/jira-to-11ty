---json
{
  "title": "INFRA-246",
  "summary": "Mailgun redirects are not working",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-04T10:20:59.860-0400",
  "updated": "2020-05-04T14:52:22.283-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-04T14:52:15.315-0400",
      "body": "Mailgun pricing changed and it doesn't include email validations anymore. We'd have to upgrade to the paid plan which feels like a regression since we'd not use most of the features.\n\nI've converted us over to ImprovMX and it seems to be working well.\n"
    }
  ]
}
---
Many aliases are failing with the following message "Recipient address not verified"

        
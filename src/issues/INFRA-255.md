---json
{
  "title": "INFRA-255",
  "summary": "mysql: Enable 4-byte chars",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-19T14:49:13.126-0400",
  "updated": "2020-06-29T10:01:27.357-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-06-29T10:01:27.327-0400",
      "body": "Despite being a recommendation from Nextcloud, things are working as expected. We may have some issues with certain emojis but it's not worth the risk (to change the storage engine core settings).\n"
    }
  ]
}
---
<https://docs.nextcloud.com/server/18/admin_manual/configuration_database/mysql_4byte_support.html>

        
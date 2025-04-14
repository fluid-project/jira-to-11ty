---json
{
  "title": "INFRA-138",
  "summary": "Perform disaster recovery test on backups",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-16T11:05:57.053-0400",
  "updated": "2020-10-05T09:13:42.663-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-106/",
      "key": "INFRA-106",
      "summary": "Migrate backups from Attic to Borg"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-10-05T09:13:35.530-0400",
      "body": "Retrieving backups from Attic has been done multiple times and is documented in the docs directory of the ops repository.\n"
    }
  ]
}
---
Perform disaster recovery test on our backups.

Candidates:

* MySQL DB
* PostgreSQL DB
* PHP Websites
* Docker volumes (ownCloud uses this)

        
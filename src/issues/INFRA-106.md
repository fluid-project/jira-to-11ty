---json
{
  "title": "INFRA-106",
  "summary": "Migrate backups from Attic to Borg",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-01-31T11:16:17.174-0500",
  "updated": "2020-04-13T08:20:39.121-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-138/",
      "key": "INFRA-138"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:20:39.081-0400",
      "body": "We will need a different strategy in AWS/Azure/GCP (possibly using EBS snapshots).\n"
    }
  ]
}
---
Attic development has been abandoned by its author without any possibility of external contributions being accepted.

The community fork is Borg (<https://github.com/borgbackup>)

        
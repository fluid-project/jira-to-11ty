---json
{
  "title": "INFRA-212",
  "summary": "offsite-backup: Change directory",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-27T16:39:07.033-0400",
  "updated": "2020-10-05T08:48:56.598-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-27T16:40:37.037-0400",
      "body": "<https://github.com/inclusive-design/ops/commit/298c894b333c45eb9e73ca7fb4c226ec2ee13c12>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-27T16:41:04.730-0400",
      "body": "'offsite\\_backup' role needs to be applied to RPi (only available from office).\n"
    }
  ]
}
---
The backup directory on i-0009 changed from /backups/attic to /home/attic due to SELinux issues.

The offsite-backup RPi needs to be updated as well.

        
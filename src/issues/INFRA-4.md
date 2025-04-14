---json
{
  "title": "INFRA-4",
  "summary": "Implement backup infrastructure",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-07-29T10:13:23.262-0400",
  "updated": "2015-09-04T09:36:19.255-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-4/docpad.txt",
      "filename": "docpad.txt"
    }
  ],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-03T17:46:40.594-0400",
      "body": "Attic has been implemented throughout all the new infrastructure (KVM-based) with an Ansible role and supporting scripts (see: <http://github.com/inclusive-design/ops/ansible/roles/attic> and the scripts in the bin directory). The original Attic role was enhanced to support local and remote repositories as well as pruning, among other changes.\n\nThe server tor1-prd-bkp01 was deployed with a 1TB area for backups (running on tor1-prd-srv06, away from the other VMs). Attic is configured to use remote repositories over SSH, one per server (see /backup/attic). Each server has a passwordless SSH key that is used to connect to the central backup server as the 'attic' user (in the future this could be changed to one user per server but I felt it was too much complexity for now).\n\nNext step is to request Yong/Paul for an area in their CommVault backup system to store our backups off-site.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-18T13:59:59.519-0400",
      "body": "The backup code has been running and seems stable. It's triggered by a backup.sh script in the ops repository (ops/ansible/bin/backup.sh) that initiates database dumps first and then initiates attic to perform the remote backup.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T09:36:19.253-0400",
      "body": "We've had a few weeks of backups using Attic and everything seems to be working as expected.\n"
    }
  ]
}
---
The current infrastructure is based around rsnapshot and file copies.

A new solution based on Attic and its snapshot-enabled repository is to be implemented.

Additionally, the QCOW2 format used for virtual disks in the KVM cluster also offers snapshots. Those should be investigated and possibly integrated into the backup infrastructure as a simpler form of backups at a lower-level.

        
---json
{
  "title": "FLUID-591",
  "summary": "OSDPL Infrastructure: Create & document database back-up process for OSDPL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-13T13:08:41.000-0400",
  "updated": "2014-04-02T16:35:54.620-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T13:08:48.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-05T17:56:39.000-0400",
      "body": "These modules may be options to consider: <http://drupal.org/project/backup> & <http://drupal.org/project/backup_migrate> (Jon Hayes at UC Berkeley uses this one in 6.0 and likes it a lot--great for moving between local installations and production as well as backing up).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-20T14:35:33.000-0500",
      "body": "iteration29\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-20T16:29:34.000-0500",
      "body": "Currently testing Backup and Migrate module with gzip, timestamp options enabled, and every 5 hours. If successful, gzip, timestamp will be turned off and backup moved to every 24 hours.\n\nThe same filename is used each time for backup so that SVN can do version control on it properly.\n"
    }
  ]
}
---

        
---json
{
  "title": "INFRA-39",
  "summary": "Upgrade and migrate Mailman",
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
  "date": "2015-08-28T05:36:54.495-0400",
  "updated": "2015-09-01T09:42:12.553-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-28T05:39:12.435-0400",
      "body": "I've migrated Mailman to server tor1-prd-mx03.\n\nIn the process, Mailman was updated to version 2.1.15, available on CentOS 7.1 at the time.\n\nSpamHero was reconfigured to send everything to \"lists.inclusivedesign.ca\", the new default domain.\n\nI've also cleaned up the lists.\\* and MX records in our domains to point directly to lists.inclusivedesign.ca.\n\nAdditionally, the root domains will redirect to /mailman/listinfo for increased convenience.\n\nTest emails were sent to 1 list of each domain to ensure everything was working.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-01T09:42:12.553-0400",
      "body": "Added a redirect so /cgi-bin/mailman goes to /mailman\n\nRedirectMatch ^/cgi-bin/mailman/(.\\*)$ /mailman/$1\n"
    }
  ]
}
---
Mailman should be migrated from the old Xen infrastructure.

Domains:

lists.idrc.ocad.ca\
lists.gpii.net\
fluidproject.org

        
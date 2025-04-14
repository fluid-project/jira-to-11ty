---json
{
  "title": "INFRA-7",
  "summary": "Update pfsense to version 2.2.4",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-07-30T09:34:36.149-0400",
  "updated": "2015-08-07T11:21:01.965-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "pfsense\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-07-30T09:36:06.357-0400",
      "body": "Tentatively planning to apply this on Friday 31 July in the afternoon when Alan/Avtar will be available if something goes wrong.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-07-30T13:47:22.155-0400",
      "body": "We've discussed and decided to do this next week (Tuesday, Aug 4?) to avoid potentially causing issues with the intensive & doing something on the last day before the long weekend.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-07T11:21:01.963-0400",
      "body": "tor1-prd-fw01 updated to 2.2.4 on Wednesday 1PM.\n\nThere was an issue where the ix0 (WAN) interface did not come up after the update (while ix1 LAN was okay). A reboot fixed the issue. There were no errors in the log files related to ix0, it simply did not come up.\n"
    }
  ]
}
---
We are running version 2.2.2 and need to apply two minor updates to fix issues listed at:

2.2.3 - <https://blog.pfsense.org/?p=1810>\
2.2.4 - <https://blog.pfsense.org/?p=1833>

        
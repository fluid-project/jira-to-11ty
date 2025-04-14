---json
{
  "title": "INFRA-69",
  "summary": "Implement offsite backups using Raspberry Pi",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-26T09:55:25.374-0500",
  "updated": "2016-07-19T09:52:33.638-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-11-26T16:22:39.310-0500",
      "body": "Sync is now done, and the Pi is configured with cron to perform:\n\n* a nightly backup sync at 2 am\n* a daily restart (for stability) at 11 am\n\nWe can close this loop once it's installed in Colin's office, though we'll want to monitor it for a few days after that to make sure it's stable.\n"
    }
  ]
}
---
Current status on this:

* an initial sync is being done to the external drive we're using
* configuration management is in <https://github.com/inclusive-design/ops/tree/master/offsite-backup>
* once the initial sync is finished, we'll need to enable the nightly cronjob
* we may also want to reboot the Pi once a day for stability purposes

Notes:

* the Pi and/or the external drive seem pretty sensitive to electrical fluctuations (drive has unmounted due to the USB port shutdown twice now in response to me plugging things in to the same powerbar); ideally we should run it on a dedicated circuit

        
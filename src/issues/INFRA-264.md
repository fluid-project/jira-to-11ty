---json
{
  "title": "INFRA-264",
  "summary": "Update notice FEDORA-EPEL-2017-657cfae67e (from managed__epel) is broken, or a bad duplicate, skipping.",
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
  "date": "2020-09-15T04:56:10.677-0400",
  "updated": "2020-09-15T05:01:39.434-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-09-15T05:01:33.999-0400",
      "body": "This was only happening in h-0005. Removed the epel-testing.repo and epel.repo files that were duplicating the EPEL repository configuration and the problem is gone.\n"
    }
  ]
}
---
Getting this from yum check-update:

Update notice FEDORA-EPEL-2017-657cfae67e (from managed\_\_epel) is broken, or a bad duplicate, skipping.

        
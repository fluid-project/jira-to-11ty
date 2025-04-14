---json
{
  "title": "INFRA-33",
  "summary": "Internal Yum repository",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-18T13:50:06.683-0400",
  "updated": "2018-03-20T11:23:23.265-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/INFRA-123/",
      "key": "INFRA-123",
      "summary": "Private CentOS mirror"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-23T09:14:19.138-0500",
      "body": "Just would like to update that this is still required. Every time there are new RPM packages, the mirrors take a long time to synchronize and we're left with non-deterministic deployment (yum running on each of our servers will connect to a different mirror and break due to missing files or wrong checksums).\n"
    }
  ]
}
---
Instead of using external package repositories, we should host our own and introduce a test->production workflow where packages are first tested in a limited number of server then moved to production where they are applied to all servers. This should also speed up package installations by hosting locally.

        
---json
{
  "title": "INFRA-53",
  "summary": "Implement a Kubernetes staging cluster for containerized applications",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-02T10:23:00.018-0500",
  "updated": "2017-09-21T10:31:13.443-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "CentOS Atomic Host\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:31:13.440-0400",
      "body": "This was created for a demo cluster back in 2015 but we ended up choosing a different solution at the time. Closing ticket to document this and will open new ones for other automation work I'll need to do.\n"
    }
  ]
}
---
We are going forward with building a Kubernetes staging cluster that we can use to deploy containerized applications.

At the moment the plan is to build this on CentOS Atomic Host: <https://wiki.centos.org/SpecialInterestGroup/Atomic/Download/>

This issue is primarily a tracking issue - individual tasks will be in separate sub-tasks.

        
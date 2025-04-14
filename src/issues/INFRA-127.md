---json
{
  "title": "INFRA-127",
  "summary": "Upgrade VirtualBox to 5.2.8",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-28T07:52:23.491-0500",
  "updated": "2018-02-28T08:59:09.250-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-28T08:59:09.247-0500",
      "body": "Updated to VirtualBox 5.2.8 and vagrant 2.0.2 (plugins had to be repaired for GPII only). Tested with Infusion successfully (<https://ci.fluidproject.org/job/fluid-infusion/147/>)\n"
    }
  ]
}
---
This is necessary to build Fedora boxes with kernel 4.15

        
---json
{
  "title": "INFRA-134",
  "summary": "Legacy CentOS 6.x host (i-0000) is causing issues in automation",
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
  "date": "2018-03-07T10:16:15.722-0500",
  "updated": "2018-03-28T14:16:26.249-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-28T14:16:26.247-0400",
      "body": "i-000 was moved into a new \"legacy\" environment.\n\n<https://github.com/inclusive-design/ops/tree/master/environments/legacy>\n"
    }
  ]
}
---
Many things are CentOS7-only and fail on CentOS 6.x. Including i-0000 in the production environment is causing playbooks to fail routinely.

Since this is the only server that deviates from our CentOS 7.x policy (and there's nothing that can be done about this right now), it's necessary to get it out of the way.

        
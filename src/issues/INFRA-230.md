---json
{
  "title": "INFRA-230",
  "summary": "CI deployment and load balancer configuration for c2lc-exploratory",
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
  "date": "2019-06-19T16:33:36.049-0400",
  "updated": "2019-06-20T16:09:07.575-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-06-19T17:20:10.461-0400",
      "body": "Some challenges to resolve on this one due to the <https://www.codelearncreate.org/> site being hosted on Netlify, with SSL managed there. Discussing with Avtar Gill.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-06-20T16:09:07.572-0400",
      "body": "We've deployed the prototype site using Netlify instead. Closing this issue.\n"
    }
  ]
}
---
We now have Docker configurations in <https://github.com/codelearncreate/c2lc-exploratory,> so we can configure it to be deployed via CI.

The desired URL is prototype.codelearncreate.org

        
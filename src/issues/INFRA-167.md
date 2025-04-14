---json
{
  "title": "INFRA-167",
  "summary": "Update to nginx 1.14 (stable) and fix version pinning",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-24T08:36:45.322-0400",
  "updated": "2018-04-24T11:17:37.230-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-24T11:17:37.227-0400",
      "body": "Deployed to dev and production load balancers.\n\nVersion is pinned now. We're relying on the common role to deploy approved repositories. Unfortunately this makes the role less useful outside of our infrastructure (but easier to reason about).\n\n<https://github.com/inclusive-design/ops/commit/18e2d5b87a1c0bb2bf8c653240131dd0478092eb>\n"
    }
  ]
}
---
Versions should be pinned like the docker-ce role does.

        
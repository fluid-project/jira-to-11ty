---json
{
  "title": "INFRA-196",
  "summary": "Implement SSL expiry monitoring",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-06-26T13:34:17.661-0400",
  "updated": "2020-05-14T14:50:12.018-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:19:29.484-0400",
      "body": "This is a pro feature in UptimeRobot\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-14T14:50:12.015-0400",
      "body": "We are using Let's Encrypt which requires certificates to be renewed every 3 months. The automation has been working for a while now.\n\nWe're not using paid wildcard certificates anymore (that were required by Vidyo), so I'll close this ticket for now.\n"
    }
  ]
}
---
Monitoring needs to check SSL certification for expiration dates and emit alerts.

        
---json
{
  "title": "INFRA-183",
  "summary": "i-0035/36 - Verify why nginx sometimes doesn't start at boot",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-10T19:51:01.454-0400",
  "updated": "2020-04-13T08:10:27.226-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-08T14:47:12.033-0400",
      "body": "It's probably starting before networking is available and/or it can reach the DNS resolver.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:10:27.222-0400",
      "body": "This has not happened in the last batch of upgrades/reboots so assuming it's not a problem anymore or it won't be a problem once we migrate to a cloud provider.\n"
    }
  ]
}
---

        
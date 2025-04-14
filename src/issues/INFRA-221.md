---json
{
  "title": "INFRA-221",
  "summary": "Think about how to handle updating links to IRC logs",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Alan Harnum",
  "date": "2018-09-18T11:48:06.861-0400",
  "updated": "2020-10-05T08:57:38.487-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-219/",
      "key": "INFRA-219",
      "summary": "Get copies of BotBot.me logs"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-219/",
      "key": "INFRA-219",
      "summary": "Get copies of BotBot.me logs"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-220/",
      "key": "INFRA-220",
      "summary": "Set up alternative IRC logging"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-10-05T08:57:38.484-0400",
      "body": "Since botbot.me is completely shutdown (it's hosting a parked domain website now), it won't be possible to address this.\n"
    }
  ]
}
---
We have many links to the botbot.me IRC logs from various places, primarily:

* the Confluence wiki
* Jira issues
* Github pull request discussion

Ideally, we could find a way to redirect these to our own hosted logs, or at least provide instructions for people to translate botbot.me URLs to the equivalent hosted logs.

        
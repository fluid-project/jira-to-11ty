---json
{
  "title": "INFRA-220",
  "summary": "Set up alternative IRC logging",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-09-18T11:30:50.892-0400",
  "updated": "2020-10-05T08:54:45.494-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-219/",
      "key": "INFRA-219"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-221/",
      "key": "INFRA-221"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-20T10:55:52.576-0400",
      "body": "Rough plan for this currently\n\n* Dockerized version of Limnoria for logging: <https://github.com/waharnum/limnoria-docker>, with ChannelLogger plugin\n* share logs directory to an nginx container\n\nThis is an immediate-term solution for continuity and won't offer the same capabilities as BotBot.me, but will mean we won't lose logs and can be done in a fairly short timeline.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-10-05T08:54:45.474-0400",
      "body": "IRC is being logged by fluid-bot and logs are available at <http://irc-logs.fluidproject.org/>\n"
    }
  ]
}
---
The free botbot.me IRC logging service is shutting down in November: <https://lincolnloop.com/blog/saying-goodbye-botbotme/>

We need to explore our options for logging IRC before this time. One is to run our own version of botbot, as it is an open source project: <https://botbot.readthedocs.io/en/latest/index.html>

        
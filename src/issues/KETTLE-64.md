---json
{
  "title": "KETTLE-64",
  "summary": "Adding lint checks for markdown documentation...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-10-05T07:23:09.437-0400",
  "updated": "2017-10-10T04:21:13.566-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-10-05T08:22:40.976-0400",
      "body": "<https://github.com/fluid-project/kettle/pull/38>\n"
    }
  ]
}
---
In reviewing the kettle docs recently, I noticed a page with two errors:

<https://github.com/the-t-in-rtf/kettle/blob/master/docs/RequestHandlersAndApps.md>

Rather than fix only the problems we happen to notice this go around, I'd like to add [grunt-markdownlint](https://github.com/sagiegurari/grunt-markdownlint) to our lint checks and then fix everything at once.

cc: @@Antranig Basman

        
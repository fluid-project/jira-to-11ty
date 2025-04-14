---json
{
  "title": "VP-7",
  "summary": "Turning on transcripts by selecting 'English' results in transcripts not being keyboard accessible. ",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2012-09-06T13:43:13.150-0400",
  "updated": "2013-01-28T09:25:20.381-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-10-04T14:43:42.278-0400",
      "body": "Merged into demo branch at 3267cfa7361e84aa7b56d141cb8f0f159348d6d6\n"
    }
  ]
}
---
This bug is particularly odd because the keyboard behaviours work fine if you turn transcripts on by selecting 'Show Transcripts'

Steps to reproduce:&#x20;

1\. Tab to the transcript menu\
2\. Use arrow keys to select 'English' and press enter\
3\. Now try to tab to the transcript pane and select a cue

        
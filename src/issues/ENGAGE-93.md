---json
{
  "title": "ENGAGE-93",
  "summary": "Parameterize URLs in Artifact View ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-22T14:42:40.000-0400",
  "updated": "2009-11-03T11:55:41.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T14:47:53.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:40:44.000-0400",
      "body": "Yura, I'm assigning this one to you--you've probably already fixed it, but I'm doing a bit of Engage 0.1 JIRA gardening.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:55:41.000-0500",
      "body": "URLs are now being pulled from the config file\n"
    }
  ]
}
---
Currently there are hardcoded URLs in the artifact view component such as the tag template URL. These should be pulled out as defaults for component.

        
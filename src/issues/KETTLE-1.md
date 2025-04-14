---json
{
  "title": "KETTLE-1",
  "summary": "For Kettle's path rewriting to work, all paths to a mounted directory have to be at the same level",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-11-12T15:08:51.000-0500",
  "updated": "2014-03-03T14:20:35.114-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-173/",
      "key": "ENGAGE-173"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T14:02:20.356-0400",
      "body": "\"new new Kettle\" currently does no rewriting, but since its architecture no longer relies on the same code affected by this JIRA, this issue is being closed.\n"
    }
  ]
}
---
For the path rewriting to work, all paths to a mounted directory have to be at the same level

This is most evident in the engageDemo

fluid-engage-kettle/src/main/webapp/services/engageDemo/html/index.html

        
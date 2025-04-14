---json
{
  "title": "ENGAGE-319",
  "summary": "The title in the header for Exhibition Browse is \"title\"",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Colin Clark",
  "date": "2010-02-03T16:24:26.000-0500",
  "updated": "2010-02-22T17:19:40.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-356/",
      "key": "ENGAGE-356",
      "summary": "Message Bundles are not being located for the standalone (war file) version, for services using spouts"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-324/",
      "key": "ENGAGE-324"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:52:21.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T22:36:33.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-324#icft=ENGAGE-324> and <https://fluidproject.atlassian.net/browse/ENGAGE-319#icft=ENGAGE-319> are due to the message bundle not being found. This seems to be a pathing issue as it works in the local version, but not the standalone\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-18T12:56:20.000-0500",
      "body": "Now appears fixed on the daily build site by the commit at 9426.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T17:19:40.000-0500",
      "body": "Tested on 02/22/2010, 4:45 PM EST.\n\nLooks good. Issue closed.\n"
    }
  ]
}
---
At the moment, the header in Exhibition Browse reads "title" instead of the correct title.

        
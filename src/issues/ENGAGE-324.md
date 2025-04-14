---json
{
  "title": "ENGAGE-324",
  "summary": "Panel heading on Exhibitions Browse should read \"Upcoming\" and not \"upcomingCategory\"",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "James Yoon",
  "date": "2010-02-05T11:32:18.000-0500",
  "updated": "2010-02-22T17:13:22.000-0500",
  "versions": [],
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
      "url": "/browse/ENGAGE-319/",
      "key": "ENGAGE-319",
      "summary": "The title in the header for Exhibition Browse is \"title\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-05T16:04:07.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T22:35:04.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-324#icft=ENGAGE-324> and <https://fluidproject.atlassian.net/browse/ENGAGE-319#icft=ENGAGE-319> are due to the message bundle not being found. This seems to be a pathing issue as it works in the local version, but not the standalone\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T11:08:03.000-0500",
      "body": "Antranig is working on <https://fluidproject.atlassian.net/browse/ENGAGE-356#icft=ENGAGE-356>, which relates to this issue.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-18T12:55:49.000-0500",
      "body": "Now appears fixed on the daily build site by the commit at 9426.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T17:13:22.000-0500",
      "body": "Tested on 02/22/2010, 4:39 PM EST.\n\nLooks good.\n"
    }
  ]
}
---

        
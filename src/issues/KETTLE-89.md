---json
{
  "title": "KETTLE-89",
  "summary": "Kettle's URL DataSource should follow HTTP redirects",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-08-07T11:28:38.263-0400",
  "updated": "2020-08-07T13:14:58.040-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Kettle's dataSource.URL implementation currently directly forwards to node's HTTP APIs and does not follow HTTP redirects - instead these are directly relayed to the client as a 30x error response. It should be capable of transparently following these redirects.

        
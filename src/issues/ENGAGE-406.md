---json
{
  "title": "ENGAGE-406",
  "summary": "My Collection's Save feature should make a PUT request to the server, not a GET request",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-19T00:25:23.000-0500",
  "updated": "2017-12-22T09:44:27.066-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:27.064-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, My Collection makes a GET request to the sendEmail spout with the information required by Hugues' script to send an email to the user. This is probably better represented as a PUT request, since it changes state on the remote server. While our spout is just a proxy, it should reflect the non-idempotent nature of this request.

        
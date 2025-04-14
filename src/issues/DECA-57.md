---json
{
  "title": "DECA-57",
  "summary": "No feedback given during Export process",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-25T15:31:00.000-0400",
  "updated": "2010-07-26T15:04:08.384-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-61/",
      "key": "DECA-61",
      "summary": "Generating a PDF sometimes causes the server to time out."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-20T13:46:41.000-0400",
      "body": "If the server times out, the user should get error feedback\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-20T13:50:44.000-0400",
      "body": "Errors in scripts should be gracefully handled and the user informed about them.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-14T09:23:51.780-0400",
      "body": "While exporting a busy spinner should appear so the user knows that the system is performing an operation. Otherwise the user will have no idea that the system is active, crashed, or waiting for input.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:17:47.446-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-26T15:04:08.333-0400",
      "body": "Confirmed fixed for Decapod 0.4.\n"
    }
  ]
}
---
Export process can take a long time, and no feedback is given to the user that exporting is working or when it is complete.

        
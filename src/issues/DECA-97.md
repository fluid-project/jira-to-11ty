---json
{
  "title": "DECA-97",
  "summary": "Consolidate mock server and capture server into the same code base",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2010-04-20T15:26:19.000-0400",
  "updated": "2012-01-10T09:39:05.523-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-25T19:11:30.453-0400",
      "body": "Very preliminary server consolidation by breaking out shared image processing routines into imageprocessing.py, along with a few early unit tests.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:38:50.199-0400",
      "body": "This was resolved at revision 0da88d06c4. We now have a single server, with no duplicated code.\n"
    }
  ]
}
---
Consolidate the mock server into the capture server to reduce code complexity.

        
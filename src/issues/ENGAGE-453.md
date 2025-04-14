---json
{
  "title": "ENGAGE-453",
  "summary": "jquery.couch.js is in the wrong location in the engage-core repository",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-02-24T13:01:09.000-0500",
  "updated": "2017-12-22T09:44:22.734-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:22.732-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
jquery.couch.js is in the wrong location in the engage-core repository

Currently it is in the framework directory but it should actually live in the lib folder as it is a 3rd party resource.

        
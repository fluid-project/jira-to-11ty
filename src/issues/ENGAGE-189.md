---json
{
  "title": "ENGAGE-189",
  "summary": "URL query parameters are not standard",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-11-10T17:15:17.000-0500",
  "updated": "2009-12-01T13:58:20.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View",
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-01T13:58:20.000-0500",
      "body": "Resolved at r8689\n"
    }
  ]
}
---
the query parameter that we used for engage 0.1 looked like ?value1\&value2 it should have been structured as ?key1=value1\&key2\&value2

        
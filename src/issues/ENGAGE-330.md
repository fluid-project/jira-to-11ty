---json
{
  "title": "ENGAGE-330",
  "summary": "getCookie throws a JSON parse error if there was no cookie present",
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
  "date": "2010-02-05T15:01:18.000-0500",
  "updated": "2010-02-05T15:33:00.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:33:00.000-0500",
      "body": "fixed by having the getCookie function check if a value was returned before it tries to parse.\n"
    }
  ]
}
---
getCookie throws a JSON parse error if there was no cookie present

It should just return null if there was no cookie by the passed name

        
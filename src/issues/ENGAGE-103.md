---json
{
  "title": "ENGAGE-103",
  "summary": "Each of our Engage apps in Kettle should root themselves at an /engage/[app-name], and not steal the root URL",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-10-02T14:57:27.000-0400",
  "updated": "2009-11-10T11:59:29.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View",
    "Browse",
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:38:09.000-0400",
      "body": "This was fixed by me at r8276 by mounting View and Browse at the following URLs:\n\n/artifacts/view\\.html and /artifacts/browse.html for the markup feeds\\\n/artifacts/view\\.json for /artifacts/browse.json the data feeds\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T11:59:29.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
At the moment, Artifact View roots itself at /, and registers a handler there. The kettleDemo also does this, and it causes them to bash into each other. To be safe, we should make sure that each app is rooted in a reasonable, self-contained spot.

        
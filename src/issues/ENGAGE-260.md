---json
{
  "title": "ENGAGE-260",
  "summary": "Factor out render helper functions that are used by engage",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-01-20T11:07:29.000-0500",
  "updated": "2010-02-05T15:37:16.000-0500",
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
      "date": "2010-02-05T15:37:16.000-0500",
      "body": "A bunch of weedy forest functions sprung up before Antranig supplied some new logic for building component trees. Also several utility functions were added to engageClientUtils to help with this.\n"
    }
  ]
}
---
Factor out render helper functions that are used by engage

Remove the common code used for rendering out into a common set of functions that can be used across the engage components

        
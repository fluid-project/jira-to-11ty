---json
{
  "title": "ENGAGE-251",
  "summary": "The Artifact View component doesn't follow the standard Fluid convention for CSS class names",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T16:30:55.000-0500",
  "updated": "2017-12-22T09:44:27.162-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:27.160-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, the Artifact View HTML page uses a number of selectors that don't match the standard Fluid conventions for class names (flc-\<component name>-\<item name>). This should be fixed.

        
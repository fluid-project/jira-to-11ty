---json
{
  "title": "FLUID-129",
  "summary": "Contiuum build doesn't email in case of failure or error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2007-11-27T09:39:16.000-0500",
  "updated": "2007-11-27T10:28:05.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-11-27T10:03:02.000-0500",
      "body": "I updated the dependencies and rebuilt: everything looks good.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-27T10:03:31.000-0500",
      "body": "Build is up and running again.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-11-27T10:28:05.000-0500",
      "body": "Actually, Continuum **did** notify a few people. It now emails the commits mailing list.\n"
    }
  ]
}
---
The Fluid Contiuum build doesn't seem to notify anyone in the community when a build failure or error or occurs.

        
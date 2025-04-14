---json
{
  "title": "FLUID-228",
  "summary": "Create a build script for Fluid",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-02-11T12:36:26.000-0500",
  "updated": "2008-03-05T15:07:50.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-02-15T15:24:07.000-0500",
      "body": "Should we have a non-minified version of our distribution? Should the non-minified go into the same package as the minified or do we want two seperate zip files available for downloading?\n"
    }
  ]
}
---
The Fluid build script should:

* minify
* build
* zip

        
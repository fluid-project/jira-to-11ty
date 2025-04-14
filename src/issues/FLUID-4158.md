---json
{
  "title": "FLUID-4158",
  "summary": "Update various daily-build scripts after the move to git",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-23T09:37:05.886-0400",
  "updated": "2011-05-17T09:42:22.846-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4054/",
      "key": "FLUID-4054",
      "summary": "Restore daily build, after move to git"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:42:22.844-0400",
      "body": "We have nightly and hourly builds of Infusion and the uploader server (this needs to be updated to the new one from cindy when it's ready), and a nightly build of the builder.\n"
    }
  ]
}
---
The build-scripts that make assumptions about svn, should be replaced by ones that are compatible with git.

        
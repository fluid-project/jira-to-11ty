---json
{
  "title": "FLUID-5315",
  "summary": "Remove ghpages branch from build.fluidproject.org github repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-04-22T12:01:36.034-0400",
  "updated": "2014-04-22T12:03:59.223-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-22T12:03:55.601-0400",
      "body": "Removed the ghpages branch from the github repo.\n"
    }
  ]
}
---
The build.fluidproject.org side was going to be hosted on Github Pages; however, it was decide that we should host it ourselves. Having the ghpages leads to confusion about where it is actually being hosted.

        
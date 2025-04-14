---json
{
  "title": "FLUID-5316",
  "summary": "build.fluidproject.org should link to the built version of infusion",
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
  "date": "2014-04-22T12:02:34.689-0400",
  "updated": "2014-06-25T16:29:16.033-0400",
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
      "date": "2014-06-25T16:29:16.032-0400",
      "body": "The build site is using a built version of Infusion from  Jenkins\n"
    }
  ]
}
---
Currently build.fluidproject.org has it's own checkout of infusion. However, once Jenkins is up and running we should link to the version of infusion built by it.

        
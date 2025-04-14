---json
{
  "title": "FLUID-4054",
  "summary": "Restore daily build, after move to git",
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
  "date": "2011-02-08T16:23:55.639-0500",
  "updated": "2011-05-17T09:46:54.543-0400",
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
      "url": "/browse/FLUID-4158/",
      "key": "FLUID-4158"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-23T09:36:13.251-0400",
      "body": "The image-gallery and infusion daily builds were made to work for the 1.3.1 release. However they could use some more improvements to get them building the way we want them to.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:46:54.541-0400",
      "body": "hourly and nighly builds working for Infusion and the image gallery, and nightly build of the builder is up. Any new issues for these should be filed under specific jiras.\n"
    }
  ]
}
---
Need to restore the daily build after having moved to git. This is also a good opportunity to look at how we are building everything and seeing where we can simplify and improve on the process.

        
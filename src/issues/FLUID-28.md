---json
{
  "title": "FLUID-28",
  "summary": "Link against the uncompressed version of dojo during development.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T12:01:31.000-0400",
  "updated": "2008-02-11T10:50:24.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-8/",
      "key": "FLUID-8",
      "summary": "Lightbox and Fluid architecture needs to be factored properly"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-11T10:50:24.000-0500",
      "body": "We don't use dojo anymore.\n"
    }
  ]
}
---
Currently it is difficult to trace errors and exceptions encountered in dojo-related code because we link against the compressed version of dojo. This compressed version is a single-line file that has been heavily squashed to save space.

We should link against the uncompressed version during development and devise a release process to automatically link our release builds to the faster, compressed version.

        
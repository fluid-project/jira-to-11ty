---json
{
  "title": "FLUID-26",
  "summary": "Separate files and logic between the Lightbox and the genric re-orderer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T11:55:41.000-0400",
  "updated": "2007-11-15T16:00:08.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
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
      "author": "Colin Clark",
      "date": "2007-11-15T15:45:58.000-0500",
      "body": "This separation of concerns was resolved through our process of creating the Reorderer from the Lightbox over the past couple of months.\n"
    }
  ]
}
---
We want to make a clean separation between code and markup that is responsible for reordering images(ie. the Lightbox) vs. the generic reordering code.

        
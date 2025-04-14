---json
{
  "title": "FLUID-1083",
  "summary": "Uploader 2: Refactor the Uploader for improved modularity and DOM agnosticism.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-31T17:37:06.000-0400",
  "updated": "2014-03-04T09:06:21.757-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:37:16.000-0400",
      "body": "infusion-06-wishlist\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-09T12:39:07.000-0500",
      "body": "This issue was resolved in Infusion 0.6.\n"
    }
  ]
}
---
The Uploader needs to be refactored to provide greater modularity and separation of concerns in the code. A sketch of the new architecture is available here:

<http://wiki.fluidproject.org/display/fluid/Architecture+Sketches>

We'll also want to reduce the number of baked-in assumptions about the markup and structure of the Uploader.

        
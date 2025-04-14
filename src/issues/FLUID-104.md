---json
{
  "title": "FLUID-104",
  "summary": "Create a trimmed-down version of Dojo for Fluid",
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
  "reporter": "Colin Clark",
  "date": "2007-11-06T18:09:57.000-0500",
  "updated": "2008-02-05T19:00:55.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-02-05T19:00:55.000-0500",
      "body": "We've removed Dojo entirely from Fluid, so this issue is moot.\n"
    }
  ]
}
---
The Dojo 0.9 distribution is huge. We should create a trimmed-down version of Dojo that only includes the items we require. The best way to do this is to create a custom build of Dojo containing only our dependencies. Documentation on how to do this is available at:

<http://dojotoolkit.org/book/dojo-book-0-9/part-4-meta-dojo/package-system-and-custom-builds>

Since we no longer depend on Dijit, we can probably create a pretty small version of Dojo.js that satisfies our current dependencies and speeds up downloads significantly.

        
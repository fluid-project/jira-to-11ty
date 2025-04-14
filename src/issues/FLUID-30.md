---json
{
  "title": "FLUID-30",
  "summary": "Use a query engine to find and manipulate reorderables.",
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
  "date": "2007-07-17T12:11:50.000-0400",
  "updated": "2007-09-06T15:55:02.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-29/",
      "key": "FLUID-29",
      "summary": "Devise a convention for identifying re-orderable items in the markup passed to the Reorderer."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2/",
      "key": "FLUID-2"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-09-06T15:54:56.000-0400",
      "body": "Now using dojo.query() to find \"orderable\" items.\n"
    }
  ]
}
---
Currently we assume all top-level elements passed to the Lightbox are re-orderable. As a side effect, we strip out any non-element content from the DOM. In order to generalize this code, we need to find the elements that have been identified as reorderable and only manipulate those.

        
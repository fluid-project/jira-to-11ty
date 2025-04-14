---json
{
  "title": "FLUID-29",
  "summary": "Devise a convention for identifying re-orderable items in the markup passed to the Reorderer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T12:09:06.000-0400",
  "updated": "2007-09-06T15:53:39.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-30/",
      "key": "FLUID-30"
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
      "author": "Anastasia Cheetham",
      "date": "2007-09-04T13:51:09.000-0400",
      "body": "An \"orderable\" CSS class has been added to the orderable elements. The next step is to make the Reorderer aware of this class.\n"
    }
  ]
}
---
At the moment, we assume all top-level elements passed to the Lightbox are re-orderable. When we generalize this code to work with any arbitrary markup, we need a mechanism by which reorderables are declared. This will likely take the form of a specific "reorderable" CSS class attached to the element, but we may be able to use ARIA for this purpose instead.

        
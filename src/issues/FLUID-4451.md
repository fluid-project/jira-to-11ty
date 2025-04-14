---json
{
  "title": "FLUID-4451",
  "summary": "Selection of containers in layout reordering should be relative to the user's history of selections",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2011-09-15T15:11:33.518-0400",
  "updated": "2015-06-10T10:11:07.732-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:11:02.588-0400",
      "body": "This issue is also present in the current demo: <http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>\n"
    }
  ]
}
---
In the uPortal instance of the layout reorderer, try the following:\
1\. Put focus on Calendar\
2\. Press arrow right to move focus to Bookmarks\
3\. Press arrow left

The expectation is that an arrow right followed by arrow left brings the user back to the original state. In the case above, it brings the user to the Welcome container.

        
---json
{
  "title": "ENGAGE-278",
  "summary": "Add media badge styling to the catalog and exhibition pages to show when an artifact has media resources",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-01-22T09:50:00.000-0500",
  "updated": "2014-03-03T14:14:41.771-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-01T11:18:53.000-0500",
      "body": "So far, we've implemented generic icon badge support in Navigation List, and have this working nicely for Exhibition View. We still need to refine the styling in the Catalogue and My Collection list/grid views.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-01T11:20:26.000-0500",
      "body": "As further clarification, we are finding that in NavList list view, badge styling is very close to working, while in grid view all the badges are showing at the bottom of the page.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:15:37.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-05T11:00:51.000-0500",
      "body": "Media badges are working in Exhibition View previews, but still need to be styled for the Navigation List, which is used in the following components:\n\n* Catalogue Browse\n* Catalogue View\n* My Collection\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:52:59.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-24T12:02:52.000-0500",
      "body": "Looks like it is only not working in my collection at the moment.\n"
    }
  ]
}
---
Add media badge styling to the catalog and exhibition pages to show when an artifact has media resources. According to the wireframes, this should be done in the following locations:

* On the main "An Exhibition" screen, for each of the preview artifacts in the list that have media resources
* In the Catalog grid and list views

For grid-style layouts, the badge should float in the bottom right corner of the artifact's thumbnail. For list views, it should appear at the right end of the list element.

        
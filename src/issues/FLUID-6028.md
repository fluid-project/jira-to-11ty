---json
{
  "title": "FLUID-6028",
  "summary": "File queue table header and content are in separate tables",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-11-02T12:43:50.251-0400",
  "updated": "2016-11-08T12:27:31.098-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4061/",
      "key": "FLUID-4061",
      "summary": "Scrolling while uploading"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6045/",
      "key": "FLUID-6045"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-11-07T11:30:27.454-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/778> has been merged into the master branch at cb0862aa27b88147e5954c8d9f264d440fa7b2ce\n"
    }
  ]
}
---
The header and body of the file queue table are actually separated out into two separate tables. This means that an AT is unaware of what the headers are for any of the body cells and there is no direct way to navigate between the headers and cells using an AT. This should all be collapsed into a single table, or if the table is only for layout, the tables should be marked up with role=presentation and appropriate labelling applied to each of the cells, perhaps with an aria-labelledby.

<https://github.com/fluid-project/infusion/blob/master/src/components/uploader/html/Uploader.html#L47-L75>

        
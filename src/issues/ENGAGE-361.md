---json
{
  "title": "ENGAGE-361",
  "summary": "Media badges display wackily over thumbnails in the Navigation List",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:57:49.000-0500",
  "updated": "2010-02-22T17:26:26.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:58:13.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-16T11:28:12.000-0500",
      "body": "Worked with yura to fix up the styling. Modified the image a bit to remove the transparent padding. And fixed up the positioning for the grid and list views. Also added the media badge to the browse and catalogue pages.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T17:26:26.000-0500",
      "body": "Tested on 02/22/2010, 4:52 PM EST.\n\nLooks good to me. Issue closed.\n"
    }
  ]
}
---
At the moment, for all pages that use Navigation List, media badges are not displaying correctly. They're floating in strange spots on the page. This needs to be fixed in the Navigation List stylesheet.

        
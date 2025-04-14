---json
{
  "title": "ENGAGE-492",
  "summary": "With the Screen Navigator, if you scroll midway down a page and then tap a link, you don't automatically start at the top of the new page",
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
  "date": "2010-03-04T19:34:35.000-0500",
  "updated": "2010-03-09T15:21:36.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-04T19:37:22.000-0500",
      "body": "Fixed at r9577\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-04T19:37:33.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    }
  ]
}
---
Since the Screen Navigator loads pages by AJAX and not standard page transitions, this can be resolved by forcing the browser to scroll back up to the top every time we load a new screen.

        
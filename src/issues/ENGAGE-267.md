---json
{
  "title": "ENGAGE-267",
  "summary": "Cabinet shouldn't close drawers that have no handles",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-01-21T14:39:51.000-0500",
  "updated": "2010-03-18T09:10:12.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-21T17:45:18.000-0500",
      "body": "drawers without handles are now considered to be shelves are left open all the time now.&#x20;\n"
    }
  ]
}
---
Cabinet shouldn't close drawers that have no handles

If a drawer is implemented without a handle and it is closed, you are not able to ever see it. Drawers without handles should always be open. (AC called that a shelf).

The browse component needs this functionality for the exhibition browse page.

        
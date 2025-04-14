---json
{
  "title": "ENGAGE-511",
  "summary": "Self closing tags are interpreted incorrectly in safari after renderer converts them into tags with separate opening and closing parts in kettle.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-03-11T16:23:54.000-0500",
  "updated": "2014-03-03T13:45:17.475-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-03-12T02:00:47.000-0500",
      "body": "Fixed in infusion at rev 9657, please verify in engage.\n"
    }
  ]
}
---
Self closing tags are interpreted incorrectly in safari after renderer converts them into tags with separate opening and closing parts in kettle.\
These tags include: meta, script, link, input, img.

        
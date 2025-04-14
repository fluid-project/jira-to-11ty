---json
{
  "title": "FLUID-5764",
  "summary": "On small screens the height on sidebar clips content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-09-15T09:53:47.898-0400",
  "updated": "2024-07-31T14:18:00.669-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:17:53.931-0400",
      "body": "I believe this was related to our old docs platform which was redesigned after moving to 11ty.\n"
    }
  ]
}
---
When the height of the client window is small, the height of the sidebar clips the sidebar content off screen so it is impossible to access.

        
---json
{
  "title": "STUDIO-24",
  "summary": "List bullets added to a post are not showing up in the final desplay",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-09T16:10:02.329-0500",
  "updated": "2011-12-12T15:32:02.526-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-12-12T09:13:21.625-0500",
      "body": "Colin's fix has been merged into project repo @ f5fdf341fb6b8d2927916ca1c30129b2673d265b\n"
    }
  ]
}
---
It seems that the use of fss-reset-global.css is stripping off bullet points. The solution is probably just to restore them in style.css

        
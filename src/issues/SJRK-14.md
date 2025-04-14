---json
{
  "title": "SJRK-14",
  "summary": "Responsive menu not showing up on mobile",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Eloisa Guerrero",
  "date": "2017-10-27T10:06:04.857-0400",
  "updated": "2017-10-31T15:09:50.431-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2017-10-27T10:48:00.075-0400",
      "body": "From MDN web docs (<https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)> seems we needed a meta viewport tag:\n\n`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`\n\n \n"
    }
  ]
}
---
Responsive menu appears on desktop but when viewed on mobile, it does not revert to responsive version.

        
---json
{
  "title": "FLOE-96",
  "summary": "Users with screen readers have no idea what buttons need text selection before being activated",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Alexey Novak",
  "reporter": "Alexey Novak",
  "date": "2012-10-31T16:35:11.026-0400",
  "updated": "2014-03-03T12:38:04.295-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-11-28T11:08:54.585-0500",
      "body": "Users a quiet familiar with the same user experience through other editors.\\\nEvery (not)online editor uses the same functionality where users are aware that text modification buttons require text selection.\n"
    }
  ]
}
---
Some of the buttons in write toolbar require text selection to be active.\
There is no indication of this anywhere in Open Author.\
Moreover nothing is announced if user tries to use a shortcut or a button when text is not selected. Hence user has no idea on why those toolbar buttons do not work.\
This issue also related to FLOE-90 when disabled buttons could be focused.

        
---json
{
  "title": "IDI-31",
  "summary": "Line drawing overlays not 'click-though' in IE 9",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-03T14:13:03.094-0400",
  "updated": "2014-03-03T11:58:05.527-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "IE 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-05-04T11:29:13.460-0400",
      "body": "Fixed and merged at commit e30b50e7ae15af6905a3f32975b3a3b7f52faa4d\n"
    }
  ]
}
---
It seems the pointer-events CSS property is not supported in IE 9, so the line drawing overlays are not passing the events through to any links underneath.

        
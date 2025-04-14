---json
{
  "title": "ENGAGE-468",
  "summary": "Fix broken code entry tests",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Justin Obara",
  "date": "2010-03-01T12:12:08.000-0500",
  "updated": "2017-12-22T09:44:26.317-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-468/ENGAGE-468.patch",
      "filename": "ENGAGE-468.patch"
    }
  ],
  "comments": [
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-03-04T09:43:03.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-468#icft=ENGAGE-468>.patch fixes the code entry tests by making the third test asynchronous. There is a slightly unpleasant side effect that is a flicker of the code entry screen markup before the third test is complete.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:26.315-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The third set of tests called "Code entry test" have failing tests.

        
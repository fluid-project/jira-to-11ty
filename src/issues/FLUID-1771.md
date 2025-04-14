---json
{
  "title": "FLUID-1771",
  "summary": "Re-implement \"backwash\" support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T16:18:44.000-0500",
  "updated": "2009-06-03T13:45:29.000-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-06T14:15:07.000-0500",
      "body": "Have managed to resolve <https://fluidproject.atlassian.net/browse/FLUID-1777#icft=FLUID-1777> without explicit support within the event framework for now. We already had a \"source\" field on this particular event which could be purposed. Should review whether we indeed want to fold this into the framework for 0.6\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-19T21:16:47.000-0500",
      "body": "This has not seemed a priority since the 0.6 release. We have not accumulated any components beyond InlineEdit that have any form of complex multiple DOM intrusion, and so it is best to push this issue back until, for example, we begin implementation on the Date Widget.\n"
    }
  ]
}
---
Also, find a new name for it.

dev-iteration46

        
---json
{
  "title": "ENGAGE-487",
  "summary": "Remove shelves from cabinet",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-03-02T15:36:47.000-0500",
  "updated": "2014-03-03T13:45:28.590-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
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
      "date": "2010-03-18T09:11:06.000-0400",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-19T11:29:03.000-0400",
      "body": "Removed the concept of shelves from the cabinet. Also updated browse so that this change wouldn't break the exhibition browse page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:11:00.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T08:56:50.000-0400",
      "body": "These changes are good and helpfully rationalise the responsibilities of the component.\n"
    }
  ]
}
---
Remove shelves from cabinet

There was functionality added to cabinet to handle the case where headers weren't provided, however this should not be part of the concern of the cabinet since these pieces won't have any cabinet behaviour. Instead the cabinet should just ignore them.

        
---json
{
  "title": "SJRK-65",
  "summary": "Add test coverage for storytelling tool server",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-03-27T14:18:00.740-0400",
  "updated": "2018-07-12T09:59:15.661-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-07-12T09:59:15.652-0400",
      "body": "Basic test coverage has now been added and will be extended as needed when refactoring or adding functionality.\n"
    }
  ]
}
---
The storytelling tool server does not currently have any automated tests. As it is growing in complexity and going from using existing Kettle components to having more custom code, we should now implement better test coverage using Kettle's testing framework.

        
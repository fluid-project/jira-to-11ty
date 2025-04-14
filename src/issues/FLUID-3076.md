---json
{
  "title": "FLUID-3076",
  "summary": "in updateModules array an incorrect variable is used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-08-05T14:48:53.000-0400",
  "updated": "2009-08-25T15:13:52.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-08-05T14:49:48.000-0400",
      "body": "updataModules in customBuild.js should operate only on copies of the arrays. in one place it operates on the actual array. Correct this.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-05T14:51:36.000-0400",
      "body": "completed\n"
    }
  ]
}
---

        
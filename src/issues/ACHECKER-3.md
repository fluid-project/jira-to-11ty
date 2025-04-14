---json
{
  "title": "ACHECKER-3",
  "summary": "Change all \"0000-00-00 00:00:00\" values to NULL",
  "tags": "ACHECKER",
  "project": {
    "key": "ACHECKER",
    "title": "AChecker"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Done",
  "resolution": "Done",
  "assignee": "Victor Alagwu",
  "reporter": "Victor Alagwu",
  "date": "2018-04-30T13:27:56.216-0400",
  "updated": "2018-05-03T15:23:18.825-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-05-03T15:23:08.956-0400",
      "body": "[The pull request](https://github.com/inclusive-design/AChecker/pull/81) has been merged into the project repo master branch at 6f75cabc10735fb92bd93ff796d5693f63385761\n"
    }
  ]
}
---
With the upgrade in MySQL, MySQL database no longer supports the use "0000-00-00 00:00:00" as the default value for DateTime datatype. Hence there is a need to change it to NULL

        
---json
{
  "title": "VULAB-153",
  "summary": "Convert Datase Outline to SQL",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-01-22T15:18:53.000-0500",
  "updated": "2014-03-03T14:45:15.966-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-153/bootstrap-sql.sql",
      "filename": "bootstrap-sql.sql"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-22T15:19:01.000-0500",
      "body": "vulab13\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-22T16:01:16.000-0500",
      "body": "I have created the boostrap .sql file minus the user tables (users, roles, groups) as they will be dictated by the Active User Library that I use.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-22T16:04:19.000-0500",
      "body": "Note: that some table names and fields have changed to follow the CakePHP conventions and take use of the automagic functions that CakePHP offers.\n\nex. project\\_id becomes id, and question\\_types becomes qtypes.\n\nyou can read up on them here: <http://book.cakephp.org/view/24/Model-and-Database-Conventions>\n"
    }
  ]
}
---
Take the google document at <http://spreadsheets.google.com/ccc?key=pc-kQ_3BYJoieI6TJKzvLUQ> and convert it to an actual sql file for database import essentially creating the base for the initial VULab bootstrap

        
---json
{
  "title": "INFRA-213",
  "summary": "Migrate to PHP 7.2 or later",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-28T21:20:16.674-0400",
  "updated": "2020-05-14T14:51:34.912-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-28T21:21:44.921-0400",
      "body": "This is needed for nextCloud and the new work being done on AChecker. WordPress shouldn't complain either.\n\nThe only problem is old Drupal/Joomla installations that might require PHP 5.4-5.6. It's better to move them to the legacy server in that case (i-0000) or decomission these apps if possible.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-14T14:51:34.880-0400",
      "body": "php72 role is applied to i-0013 (main PHP server)\n"
    }
  ]
}
---
PHP 5.4 shipped with CentOS 7.x is too old.

Need to migrate to a newer version, PHP 7.2 or later.

        
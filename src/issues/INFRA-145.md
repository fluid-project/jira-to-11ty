---json
{
  "title": "INFRA-145",
  "summary": "Create Docker container for AChecker",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-19T15:24:24.725-0400",
  "updated": "2018-06-28T11:05:49.634-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-23T08:42:35.997-0400",
      "body": "This should probably wait until the GSoC project is done and we can use a modern stack (MySQL 5.6+ and PHP 7+).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-28T11:05:49.631-0400",
      "body": "Not a priority. Will re-evaluate when there's funding for an active project.\n"
    }
  ]
}
---
Create a Docker container for AChecker.&#x20;

Decide if it's a data-only container or if it ships with a PHP runtime (more likely).

Define which environment variables are needed to start it (mysql server credentials, what else?)

        
---json
{
  "title": "INFRA-215",
  "summary": "Make sure container stacks managed with docker-compose restart when servers do",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-09-10T09:43:42.688-0400",
  "updated": "2018-09-10T10:05:30.098-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-10T10:05:30.094-0400",
      "body": "Added restart policies to all docker-compose files for:\n\n* \\[x] adod.idrc.ocadu.ca\n* \\[x] Karisma stories\n* \\[x] Floe stories\n* \\[x] cities-website\n"
    }
  ]
}
---
All docker-compose files for running stacks should include a restart policy to ensure the service containers restart when the server does (they didn't after the last server update).

This should be as simple as adding "restart: always" at the top level of each service definition.

        
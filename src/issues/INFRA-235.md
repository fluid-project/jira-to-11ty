---json
{
  "title": "INFRA-235",
  "summary": "Modernize ansible-nodejs role",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-04-10T04:46:54.559-0400",
  "updated": "2020-04-13T07:51:19.230-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T07:51:10.928-0400",
      "body": "PR merged: <https://github.com/idi-ops/ansible-nodejs/pull/44>\n"
    }
  ]
}
---
Adopt:

* Poetry for Python package management
* Molecule 3.x for tests
* Fix ansible-lint warnings

        
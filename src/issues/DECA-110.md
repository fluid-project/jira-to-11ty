---json
{
  "title": "DECA-110",
  "summary": "Create an automated script that can install and uninstall all of Decapod and its dependencies",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-05-28T00:01:56.846-0400",
  "updated": "2012-01-10T09:49:03.012-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-12T18:05:56.283-0400",
      "body": "I've committed the install/uninstall scripts to the default repository in the install-scripts directory.\n"
    }
  ]
}
---
At the moment, we've got an excellent installation tutorial on the wiki, but it's not an automated script. In order to provide an easier experience for bootstrapping Decapod development, as well as an eventual daily build, we should create something that can install Decapod and all of its many dependencies with one command. It should also be able to reverse the process, cleanly removing everything from a system.

        
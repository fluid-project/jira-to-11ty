---json
{
  "title": "FLOE-444",
  "summary": "Update First Discovery Server container components from master branch versions as they become available",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-01-04T11:14:40.333-0500",
  "updated": "2016-01-26T10:24:02.541-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-01-18T11:05:15.601-0500",
      "body": "All containers except for the actual FDS container are now running the official rebuilt versions.\n\nFDS is waiting on this PR: <https://github.com/GPII/first-discovery-server/pull/5>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-01-26T10:24:02.514-0500",
      "body": "The deployed First Discovery Server container is now using the official image from <https://github.com/GPII/first-discovery-server>&#x20;\n"
    }
  ]
}
---
The demo has been deployed as a set of Docker containers to <http://first-discovery.floeproject.org/demos/prefsServerIntegration/>, but is using forked code for its containers. As master code becomes available in various places (GPII components and otherwise) the running containers and their corresponding definitions in the Ansible playbook should be updated.

        
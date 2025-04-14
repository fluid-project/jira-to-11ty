---json
{
  "title": "ENGAGE-116",
  "summary": "Set up a nightly build for Engage",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-08T09:57:30.000-0400",
  "updated": "2009-11-03T16:19:19.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-08T13:38:41.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-19T12:59:31.000-0400",
      "body": "The nightly build of engage links to the trunk of Infusion instead of Infusion 1.1.2\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-19T13:16:27.000-0400",
      "body": "I fixed the issue of the incorrect version of Infusion by creating a new externals project fluid-engage-all\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-11-03T10:15:09.000-0500",
      "body": "There is a little bit of clean up that needs to happen for this task.&#x20;\n\nfluid-build-all should move into the infrastructure directory and be called fluid-release-all\n\nWe should have two build - the nightly that uses fluid-all and the release build that uses fluid-release-all&#x20;\n"
    }
  ]
}
---

        
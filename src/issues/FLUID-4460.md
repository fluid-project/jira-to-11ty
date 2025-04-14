---json
{
  "title": "FLUID-4460",
  "summary": "Ensure all unit test pages follow naming convention",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-09-20T12:43:19.483-0400",
  "updated": "2014-03-03T13:03:12.662-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-20T12:55:13.203-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/169>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-09-22T00:00:37.576-0400",
      "body": "Merged in to master and <https://fluidproject.atlassian.net/browse/FLUID-4453#icft=FLUID-4453> branch\n"
    }
  ]
}
---
Review the names used by the unit test html files. The test pages should end in "-test.html". If they don't they won't be run by testswarm. It also appears that there are files with this naming convention that aren't actually unit test files. This is causing the swarm to fail with errors.

        
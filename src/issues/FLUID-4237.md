---json
{
  "title": "FLUID-4237",
  "summary": "Code cleanup for release 1.4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-05-16T00:33:58.318-0400",
  "updated": "2014-03-03T13:08:07.320-0500",
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
      "date": "2011-05-17T12:10:59.548-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-11T13:59:32.418-0400",
      "body": "I've issued a pull request for the JSLinting of the code. This doesn't include any work on comments, etc.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-11T15:08:34.058-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/106> was merged into project repo at b3da83e8b62aa3bf7deb8b72b3921557722df781\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-28T16:26:37.039-0400",
      "body": "Hi Justin,\n\nI think commits against this JIRA should no longer be allowed. Please close it if you agree.&#x20;\n"
    }
  ]
}
---
Clean up comments, ensure public APIs are fully commented and JSLint new javascript files.\
Note that this issue should only be in force before Code Freeze. Commits that alter actual code should not be permitted during Code Freeze.

        
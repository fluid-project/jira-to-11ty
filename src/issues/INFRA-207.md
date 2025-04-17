---json
{
  "title": "INFRA-207",
  "summary": "BuildKite - GitHub authorization shouldn't be tied to non-robot person",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-15T11:19:30.257-0400",
  "updated": "2020-04-15T06:43:06.878-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-15T11:21:24.949-0400",
      "body": "GitHub integration is configured here: <https://buildkite.com/user/connected-apps>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:08:09.065-0400",
      "body": "It doesn't look like we're using Buildkite anymore. Avtar Gill Alan Harnum could you confirm?\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2020-04-14T10:29:34.670-0400",
      "body": "I don't think Buildkite is being used anymore. I [logged in](https://buildkite.com/fluid-project/infusion/builds?branch=master) and it looks like there haven't been any builds since Aug 21, 2018. I'm assuming the Fluid GitHub webhook settings reflect that.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-14T11:01:39.689-0400",
      "body": "Let me know if there is anything we need to double check, but from what I recall we moved everything back to Jenkins. Now we've started using GitHub actions for some projects.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-15T06:42:30.029-0400",
      "body": "Thanks for double checking!\n"
    }
  ]
}
---
Today the BuildKite/GitHub integration is enabled by a user and it becomes associated with that user's GitHub OAuth authorized applications.

This authorization should happen using a project-owned account to avoid humans deleting it by mistake.

        
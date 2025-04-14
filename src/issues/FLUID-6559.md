---json
{
  "title": "FLUID-6559",
  "summary": "Update to work with primary branches that aren't named master",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2020-10-21T15:52:39.953-0400",
  "updated": "2024-07-22T10:35:15.287-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-publish"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-21T16:50:15.247-0400",
      "body": "In speaking with @@Antranig Basman in the [fluid-work irc channel](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-10-21.log) today, it was decided to just do the simple fix for now and check to see if the branch is either \"master\" or \"main\".\n"
    }
  ]
}
---
GitHub and has switched to use "main" as the name for the primary branch. (see: <https://github.com/github/renaming> ). fluid-publish was hardcoded to use "master" as the primary branch and would append the branch name to dev release. We should modify this so that fluid-publish can work with other any named branch as the primary or have a way to determine what the primary branch is.

        
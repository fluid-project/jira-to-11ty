---json
{
  "title": "FLUID-6272",
  "summary": "PR status is not getting updated by Buildkite",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-17T09:27:41.084-0400",
  "updated": "2024-07-22T10:35:13.205-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-17T09:28:36.701-0400",
      "body": "Emailed BK support on Apr 9 about PR#889. \n\nEmailed BK support on Apr 17 about PR#897 and PR#824\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-18T10:53:10.455-0400",
      "body": "Buildkite verified that the issue was in updating the status on their side. They've switched our project to a new GitHub updater internally.\n\nI've triggered the builds again and they updated the PRs (and associated commits) with the correct status.\n"
    }
  ]
}
---
<https://github.com/fluid-project/infusion/pull/889>

<https://github.com/fluid-project/infusion/pull/897>

<https://github.com/fluid-project/infusion/pull/824>

        
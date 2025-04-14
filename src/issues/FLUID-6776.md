---json
{
  "title": "FLUID-6776",
  "summary": "fix issue tracker link from GitHub repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2024-01-10T14:56:27.930-0500",
  "updated": "2024-07-22T10:35:29.934-0400",
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
      "author": "Justin Obara",
      "date": "2024-01-11T06:40:34.981-0500",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/1103>&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-01-11T06:43:07.719-0500",
      "body": "Pull request merged\n"
    }
  ]
}
---
Now that our Jira instance is hosted in the cloud, the URL has changed. The [new issue page](https://github.com/fluid-project/infusion/issues/new/choose) in GitHub provides a link for creating new issues in JIRA. However, it still points at the old URL which is returning a 404 error.

Update the related URL in the ISSUE\_TEMPLATE [config.yml](https://github.com/fluid-project/infusion/blob/b9a1432e8f28c80b2eb7800b05a1177247046039/.github/ISSUE_TEMPLATE/config.yml#L4) file to point at the new URL ( <https://fluidproject.atlassian.net/jira/software/c/projects/FLUID/issues>  )

        
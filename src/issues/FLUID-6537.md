---json
{
  "title": "FLUID-6537",
  "summary": "Limit CI build time in GitHub Actions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-08-04T07:06:21.640-0400",
  "updated": "2024-07-22T10:35:13.510-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-08-04T08:04:38.924-0400",
      "body": "Docs about timeouts for GitHub Actions jobs: <https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes>\n"
    }
  ]
}
---
Sometimes CI jobs will hang for a while and the default timeout in GitHub Actions is 360 minutes. This consumes the total of 2000-3000 minutes/month assigned to our project and should be limited.

        
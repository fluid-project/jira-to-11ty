---json
{
  "title": "FLUID-6222",
  "summary": "Fluid-Docs - Add integrity checks to CI",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Giovanni Tirloni",
  "reporter": "Antranig Basman",
  "date": "2017-11-08T07:25:54.806-0500",
  "updated": "2024-07-22T10:35:14.780-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6288/",
      "key": "FLUID-6288",
      "summary": "Add CD for fluid-project repositories"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-20T11:02:33.204-0500",
      "body": "Investigating whether this is a good opportunity to use BuildKite (need to figure out exactly how deployments would happen, keeping secrets, etc).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-21T14:52:22.054-0400",
      "body": "Closing in favor of <https://fluidproject.atlassian.net/browse/FLUID-6288#icft=FLUID-6288>\n"
    }
  ]
}
---
With the introduction of integrity checks by [PR#129](https://github.com/fluid-project/infusion-docs/pull/129), it's necessary to add them to CI so they are executed on every commit.

"grunt lint" and "npm test"

        
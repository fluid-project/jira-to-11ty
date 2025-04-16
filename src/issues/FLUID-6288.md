---json
{
  "title": "FLUID-6288",
  "summary": "Add CD for fluid-project repositories",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-06-21T14:29:37.271-0400",
  "updated": "2024-07-22T10:35:34.239-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6222/",
      "key": "FLUID-6222"
    },
    {
      "type": "Duplicate",
      "url": "/browse/INFRA-146/",
      "key": "INFRA-146"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-21T14:51:47.971-0400",
      "body": "With the introduction of integrity checks by PR#129, it's necessary to add them to CI so they are executed on every commit.\n\n\"grunt lint\" and \"npm test\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-06-11T08:10:19.281-0400",
      "body": "Giovanni Tirloni I'm looking at this issue in relation to the related Infusion PR ( <https://github.com/fluid-project/infusion/pull/994> ). However, I'm not entirely sure what the purpose is and the description of this issue seems to be missing details. Related to Infusion, my assumption is that we will be doing CI via GitHub Actions. Which leads me to believe that the related Infusion PR is for CD (deployment) of the demos? Is that correct, or am I missing something?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-06-11T08:47:21.526-0400",
      "body": "Yes, it's for CD so It can be served in the build/demos website.\n"
    }
  ]
}
---
Add CD for fluid-project/infusion-docs.

Various projects are served as static content from [https://build.fluidproject.org](https://build.fluidproject.org/). They need to containerized and hooked to GH Actions.

        
---json
{
  "title": "FLUID-6264",
  "summary": "Disable GitHub pages for infusion-docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-03-21T10:29:55.469-0400",
  "updated": "2024-07-22T10:35:24.792-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Infusion-Docs repo is setup to use a ghpages branch, but doesn't actually use GitHub pages. This is causing some warning messages to be sent back from GitHub when we push up changes to the ghpages branch. We should remove the CNAME file from the repo and in the repo's settings, set the source to "None". 

using the gh-pages branch is itself confusing and will be addressed by further automating the deployment process. INFRA-146

        
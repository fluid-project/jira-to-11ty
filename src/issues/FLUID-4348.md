---json
{
  "title": "FLUID-4348",
  "summary": "UIO: Remove pageEnhancer from fat panel IoC tree",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-07-20T12:16:29.779-0400",
  "updated": "2011-07-25T10:24:52.095-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-07-20T12:17:22.663-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T10:24:45.350-0400",
      "body": "Resolved in the pull request for <https://fluidproject.atlassian.net/browse/FLUID-4137#icft=FLUID-4137>, which is merged into project repo at 6d6c5ddc4ac62499c026c9d61430459eb73d2e94\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T10:24:52.093-0400",
      "body": "Closed\n"
    }
  ]
}
---
fluid.pageEnhancer is designed to be called by the integrators, rather than the internal UIO scripts. Being part of the fat panel IoC tree, pageEnhancer's configurability is largely reduced. It's almost impossible to configure pageEnhancer with the constructor options.

        
---json
{
  "title": "FLUID-5010",
  "summary": "Replace the manual options mapping code in UIO with IoCSS from the new framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-05-06T14:52:28.438-0400",
  "updated": "2013-10-04T09:08:24.497-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-05-23T15:40:41.796-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/326> merged into project repo at e4ebd92a75fa1663c4578f700c4d62e0d3bb4c9a\n\nNow that <https://fluidproject.atlassian.net/browse/FLUID-5012#icft=FLUID-5012>, <https://fluidproject.atlassian.net/browse/FLUID-5013#icft=FLUID-5013>, <https://fluidproject.atlassian.net/browse/FLUID-5014#icft=FLUID-5014>, <https://fluidproject.atlassian.net/browse/FLUID-5017#icft=FLUID-5017> and <https://fluidproject.atlassian.net/browse/FLUID-5018#icft=FLUID-5018> are fixed, we should be able to finish the work of removing the manual options mapping code.&#x20;\n"
    }
  ]
}
---
The latest framework provides IoCSS parsing (<http://issues.fluidproject.org/browse/FLUID-4873>) that maps the top options down to the corresponding selectors. This can be used to replace the manual options mapping via fluid.uiOptions.mapOptions in current UIOptions.

        
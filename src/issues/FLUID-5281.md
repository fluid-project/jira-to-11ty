---json
{
  "title": "FLUID-5281",
  "summary": "FluidIoC.js is listed twice in frameworkDependencies.json",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2014-02-21T10:13:13.339-0500",
  "updated": "2014-02-25T08:37:16.930-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2014-02-21T11:17:55.617-0500",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/475>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-25T08:37:11.555-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/475> ) into the project repo at 6cb52a5083f74146e12c7fd0cf583e84e084382f\n"
    }
  ]
}
---
"./js/FluidIoC.js" is listed twice in <https://github.com/fluid-project/infusion/blob/master/src/framework/core/frameworkDependencies.json#L11-L17>

        
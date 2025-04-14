---json
{
  "title": "FLUID-4409",
  "summary": "UIOptions should not require options supplied to UIEnhancer on the page to be duplicated in its own options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-08-29T19:22:13.794-0400",
  "updated": "2013-04-15T15:29:33.914-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-08-29T19:22:23.932-0400",
      "body": "Infusion Bug Parade 1.4\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T13:49:37.896-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-01T15:34:58.875-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/142> merged into project repo at 775660bb181320a2b23dd1d61994bb2f2f88cae2\n"
    }
  ]
}
---
As per our API review conversation on 26/08/11, the main remaining deficit in UIOptions' API was determined to be the lack of transfer between any configuration supplied to the PageEnhancer, say, and a UIOptions targetted at it. For example, configuring the classnameMap in the enhancer is something that would need to be specified again to UIOptions. This should take the form of a "mid-level default" - stronger than component defaults and demands, but weaker than any options supplied directly to UIOptions' UIEnhancer directly.

        
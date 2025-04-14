---json
{
  "title": "FLUID-5199",
  "summary": "Message bundles don't work in subpanels of composite panels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-29T16:33:09.242-0400",
  "updated": "2013-10-30T10:17:29.518-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-10-29T16:36:37.124-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/430>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-30T10:17:21.063-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/430> ) into the project repo at ddf1a7e21a125b6c896142f16224d7e2508edf5d\n"
    }
  ]
}
---
When a message bundle is used inside a subpanel of a composite panel (for example, for a drop-down or radio button), an error is thrown. This seems to be because the composite panel is not sharing its messageResolver with the subpanels.

        
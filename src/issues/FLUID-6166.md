---json
{
  "title": "FLUID-6166",
  "summary": "Refactor reusable base grade out of fluid.prefs.panel.contrast",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-07-06T09:44:01.907-0400",
  "updated": "2017-07-11T16:37:28.851-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-07-11T10:53:26.675-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/832) has been merged into the project repo master branch at 8402ae7dc880e5bf4b990980e01b161ba6f3138e\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-07-11T15:39:10.764-0400",
      "body": "I'm noticing that there are some issues with the name, where some things still refer to \"styledRadioButton\" instead of \"themePicker\"\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-07-11T16:37:24.830-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/835) to fix the bug described in the comment above has been merged into the project repo master branch at 1c59e6068068a1c8498b377050575af47ca327ae\n"
    }
  ]
}
---
fluid.prefs.panel.contrast provides a custom radio button interface for an adjuster panel. It is specific for handling contrast themes, but should have the common portions factored out into a reusable grade. For work on UIO+ we need to make a similar adjuster for selection highlight and would benefit from having a base grade to build from.

        
---json
{
  "title": "FLUID-6654",
  "summary": "Binary contrast themes do not include a selection styling ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-07-06T09:02:01.784-0400",
  "updated": "2021-07-06T11:53:48.849-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-07-06T11:53:48.847-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1055) that solves this issue is merged at [this commit](https://github.com/fluid-project/infusion/commit/9ffd91df3cd9eeea6255c998fd1ad19bced90e14).\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [UIO demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the prefs editor
3. Enable one of the binary contrast themes
4. Select some text in the content area
5. Notice that you cannot see the text selection. If you change the contrast theme to one of the ones with multiple colours or switch back to default you'll be able to see the selection.

        
---json
{
  "title": "FLUID-6518",
  "summary": "The focus style of UIO input fields doesn't respond to UIO themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2020-06-12T12:08:08.737-0400",
  "updated": "2020-06-23T11:55:44.881-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6518/Screen Shot 2020-06-12 at 12.02.56 PM.png",
      "filename": "Screen Shot 2020-06-12 at 12.02.56 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-06-23T11:55:39.852-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/998) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/167cee9712c37c7787bcf7725852d985308f7a94).\n"
    }
  ]
}
---
1\. Open [The preferences framework demo](https://build.fluidproject.org/infusion/demos/prefsFramework/);\
2\. Open UIO and focus on any input field such as "line space";\
3\. The black border shows around the field as the focus style;\
4\. Select a contrast theme;\
5\. Close and reopen UIO;\
6\. Focus on any input field such as "line space";\
7\. The black border shows again and doesn't respond to the selected theme.

The color of the border should respond to the selected contrast theme. The black border becomes invisible when a theme with the black background color is selected.

        
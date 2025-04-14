---json
{
  "title": "FLUID-6505",
  "summary": "With high/low contrast theme, wrong focus styling for UIO text style input box",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Cindy Li",
  "date": "2020-05-25T14:36:23.163-0400",
  "updated": "2020-10-30T09:32:17.939-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6505/focus on text style.png",
      "filename": "focus on text style.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-10-30T09:32:14.526-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1020) that fixes this issue has been merged into the project repo at [this commit](https://github.com/fluid-project/infusion/commit/3d35a3734c5b38b7d012424c1c54f3ee11132ad7).\n"
    }
  ]
}
---
1\. Open [the preferences framework demo](https://build.fluidproject.org/infusion/demos/prefsFramework/) or [the UIO demo](https://build.fluidproject.org/infusion/demos/uiOptions/) on the build site;\
2\. Open UIO and select any high/low contrast theme;\
3\. Close and re-open UIO so the select theme is applied to UIO panels;\
4\. Use "tab" to move focus to the "text style" input box;\
5\. The border of the input box disappears.

The correct behavior is to have a proper focus styling for the "text style" input box.

        
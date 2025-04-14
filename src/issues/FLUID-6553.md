---json
{
  "title": "FLUID-6553",
  "summary": "Move component-specific contrast theme support into component stylesheets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Ned Zimmerman",
  "date": "2020-09-22T15:46:26.806-0400",
  "updated": "2021-06-21T11:29:58.708-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-22T15:46:48.593-0400",
      "body": "Related: <https://fluidproject.atlassian.net/browse/FLUID-6552#icft=FLUID-6552>.\n"
    }
  ]
}
---
Right now contrast themes are supported in Themes.styl with individual style rules for different Infusion components. Once <https://fluidproject.atlassian.net/browse/FLUID-6549#icft=FLUID-6549> is resolved it would be a good next step to add CSS variables to individual component stylesheets so that extra rules aren't needed in the contrast theme stylesheet, but rather the components can adopt contrast themes if applied.

        
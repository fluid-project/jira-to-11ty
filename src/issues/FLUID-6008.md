---json
{
  "title": "FLUID-6008",
  "summary": "Fix WCAG issues across demos and examples",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-10-28T08:47:15.830-0400",
  "updated": "2016-11-01T16:14:53.318-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5997/",
      "key": "FLUID-5997",
      "summary": "Page link contrast too low"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5999/",
      "key": "FLUID-5999",
      "summary": "Contrast of \"Restart Demo\" link meet WCAG standards"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-28T08:51:44.871-0400",
      "body": "Should also address missing focus highlighting in Safari for the pager examples:\n\n* <http://build.fluidproject.org/infusion/examples/components/progress/bidirectionalAnimation/>\n* <http://build.fluidproject.org/infusion/examples/components/progress/noAnimation/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-28T08:52:34.745-0400",
      "body": "Should also address the missing title element for the minimal pref editor example: <http://build.fluidproject.org/infusion/examples/framework/preferences/minimalEditor/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-28T08:53:40.552-0400",
      "body": "Should also address the missing H1 for the renderer selectors example: <http://build.fluidproject.org/infusion/examples/framework/renderer/selectors/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-01T16:14:50.140-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/772> ) into the project repo at 28b4dc44982817013de8a8fb267740d5c6d03008\n"
    }
  ]
}
---
Go through all of the demos and examples to fix all of the WCAG issues such as contrast, missing labels, and etc.&#x20;

Can make use of the [Nu HTML Checker Bookmarklet](https://validator.w3.org/nu/about.html), [tota11y bookmarklet](http://khan.github.io/tota11y) and [WCAG AODA accessibility audit checklist](https://docs.google.com/document/d/1IC6Y1H0VDLdjp2CaL_vz2EmniO5Jst5YJ1TIEF_8sb0/edit?usp=sharing) to find issues.&#x20;

[List of issues found](https://docs.google.com/document/d/1dDEXVDnB-HGpbVkXc6ruVmKsKzAAZ2MqqG3Ymy_UW-k/edit?usp=sharing)

        
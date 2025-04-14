---json
{
  "title": "FLUID-5759",
  "summary": "Composite panels: Processing of 'panels' list is wrong",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2015-09-10T16:19:24.025-0400",
  "updated": "2015-11-26T13:29:52.004-0500",
  "versions": [
    "1.9"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-09-10T16:28:12.265-0400",
      "body": "The code that incorrectly loops thru panel names: <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/AuxBuilder.js#L248-L255>. It sets the \"subPanelRenderOn\" variable and causes line 271-274 below sets the panel option \"renderOnPreference\" to 1, which makes \"fluid.prefs.compositePanel\" fail to render the composite panel.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-19T15:31:36.422-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/655>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-11-26T13:29:38.476-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/655> ) into the project repository at 133da8e1de28b46cd7964a946c459f212ec6ab3d\n"
    }
  ]
}
---
The way the AuxBuilder processes the "panels" property of a composite panel definition is wrong, somehow. If the strings in the array happen to be only one character long, it fails. The code is somehow parsing the panel names on a per-character basis, and converting them to 0s and 1s, and getting completely confused.

The x, y and xy panels in the minimalEditor example in this branch illustrate the problem:

<https://github.com/acheetham/infusion/blob/FLUID-5754%2B/examples/framework/preferences/minimalEditor/js/minEditor.js>

I'm getting a console error "TypeError: prefKey.replace is not a function" in Panels.js, line 159

        
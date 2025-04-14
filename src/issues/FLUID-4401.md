---json
{
  "title": "FLUID-4401",
  "summary": "UI Enhancer initializes Table of Contents before page is ready",
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
  "date": "2011-08-18T09:23:49.360-0400",
  "updated": "2011-10-14T16:09:53.496-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "FF5 on Mac OS X\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-18T15:23:06.419-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/140>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-23T11:44:34.851-0400",
      "body": "Pull request merged into project repo at 6929f207c6445210452fb0d27a37c53a83edefeb\n"
    }
  ]
}
---
We recommend that UI Enhancer component be instantiated as early as possible during page loading, but the Table of Contents subcomponent requires the page to be fully loaded in order to accurately determine what headings are present. Currently, the Table of Contents loads before the page is ready, and hence displays nothing in most cases.

To reproduce:\
1\) Visit the UIO demo at <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>\
2\) Use the Fat Panel UIO to turn on the Table of Contents

* you will see the live preview reveal a table of contents\
  3\) Hide the Fat Panel using the "Hide" button\
  4\) Reload the page. The Table of Contents preference has been saved, so the table of content should be visible on reload.
* you will see that the table of contents is NOT showing anything.

One suggestion is so see if we can use the "createOnEvent" option to delay the Table of Contents instantiation until the page-ready event.

Bug Parade Infusion

        
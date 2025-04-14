---json
{
  "title": "FLUID-4461",
  "summary": "The line size calculation test for UI Enhancer's line spacer tests fails",
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
  "reporter": "Justin Obara",
  "date": "2011-09-21T13:20:32.255-0400",
  "updated": "2013-10-04T09:48:58.487-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "IE 9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4461/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-21T13:21:27.196-0400",
      "body": "ScreenShot.png shows the failing UI Enhancer unit test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-22T12:46:47.244-0400",
      "body": "Thread on the fluid-work list about this: <http://lists.idrc.ocad.ca/pipermail/fluid-work/2011-September/008153.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-27T16:52:29.149-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/172> merged into project repo at 7334da903f8ec045a34188df2af746b06b31828c\n"
    }
  ]
}
---
Steps to reproduce:

1\) Run the UI Enhancer unit test\
<http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/UIEnhancer-test.html>

Notice that the first "Line Spacer" test fails.

        
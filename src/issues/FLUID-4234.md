---json
{
  "title": "FLUID-4234",
  "summary": "UI Options test (UIOptions-test.html) hangs in Chrome, Safari and IE, only passes in Firefox",
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
  "reporter": "Cindy Li",
  "date": "2011-05-13T12:03:29.850-0400",
  "updated": "2011-06-14T15:08:11.095-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Problems are confirmed at these platforms:\n\n1\\. Chrome 11.0.696.65\\\n2\\. IE8\\\n3\\. Safari 5.0.2\n\nThe test passes at Firefox 3.6\n\nAll on windows OS.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:23:39.036-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-24T10:22:29.462-0400",
      "body": "Work for this issue was started under the <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216> branch (<https://github.com/cindyli/infusion/tree/FLUID-4216>). New work branches off from there and is continued under a branch specific to this jira.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-14T15:08:00.960-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/76> into project repo at 995618ebc4292c8fd2f90b6ce4f0283f9a45942\n"
    }
  ]
}
---
To produce, open URL,

<http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/UIOptions-test.html>

With Safari and Chrome, the test hangs once the first set of the tests completes with success.

With IE, error "Permission denied" at jQuery.js line 3889 is prompted before and after the first test gets run. Once the first set of the tests completes with success, it hangs.

With ff, all tests pass successfully.

        
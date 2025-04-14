---json
{
  "title": "FLUID-5388",
  "summary": "LayoutReorderer tests fail in all-test.html",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-02T10:22:31.320-0400",
  "updated": "2015-06-26T10:12:19.349-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE 10 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:57:16.982-0400",
      "body": "Could not reproduce in IE 11 (which is currently the latest version of IE supported)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:20.411-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The layoutReorderer tests ( <http://build.fluidproject.org/infusion/tests/component-tests/reorderer/html/LayoutReorderer-test.html> ) fail when run as part of the all-tests.html ( <http://build.fluidproject.org/infusion/tests/all-tests.html> ) suite. However, they pass when run on their own.

Fails on test 14

LayoutReorderer Tests: Drop warning visibility for up and down: Temporary moved state is cleared.&#x20;

Expected undefined

        
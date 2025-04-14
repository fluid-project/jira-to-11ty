---json
{
  "title": "FLUID-2785",
  "summary": "Inline Edit unit tests are failing",
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
  "date": "2009-05-27T11:44:49.000-0400",
  "updated": "2009-05-27T14:10:33.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2785/fluid-2785.txt",
      "filename": "fluid-2785.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-27T13:24:32.000-0400",
      "body": "It appears that against expectation, we **did** have code in the framework which was dependent on the API altered with the fix to <https://fluidproject.atlassian.net/browse/FLUID-2247#icft=FLUID-2247> - this now cause InlineEdit.js to fail in its activation handlers. Patch adjusts this usage.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-27T14:10:33.000-0400",
      "body": "The patch was code reviewed and committed by Michelle\n\nVerified the fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, IE8 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Inline Edit unit tests are failing

<http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/html/InlineEdit-test.html>

Notice that Tests 14 and 17 have failing tests.

In IE 8, test 26.9 is also still failing

        
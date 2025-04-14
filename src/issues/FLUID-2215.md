---json
{
  "title": "FLUID-2215",
  "summary": "UI Options unit test fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-02-10T09:01:07.000-0500",
  "updated": "2009-03-06T09:33:50.000-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\\\nIE6, IE7, Opera 9.5 (Win XP)\\\nIE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2241/",
      "key": "FLUID-2241"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-10T09:01:30.000-0500",
      "body": "Bug Parade 0.8 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-17T16:22:40.000-0500",
      "body": "The tests were commented out for 0.8&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-25T08:10:28.000-0500",
      "body": "It works on most browsers however\n\n1\\) On all browsers the test summary at the bottom says \"0 tests of 0 failed\"\n\n2\\) All tests are now failing in Opera\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-25T13:17:54.000-0500",
      "body": "The incorrect test count is related to the use of AJAX in the test. The Table of Contents tests also have the wrong total number of tests. In this case, all the tests are run with AJAX so we get a '0' count. We should be able to rewrite the tests using QUnit's 'stop' and 'start' functions which should fix this problem.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-03T08:32:31.000-0500",
      "body": "Tests are now passing in Opera, but still throws errors. All three errors are the same, see below.\n\nJavaScript - <http://build.fluidproject.org/fluid/tests/fluid-tests/UIOptions-test.html>\\\nTimeout thread: delay 0 ms\\\nError:\\\nname: TypeError\\\nmessage: Statement on line 193: Cannot convert undefined or null to Object\\\nBacktrace:\\\nLine 193 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\\\npreviewEnhancer.applySkin(model); \\\n...\\\nstacktrace: n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-05T12:58:46.000-0500",
      "body": "all tests are failing in IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-06T09:33:50.000-0500",
      "body": "Appears to have been fixed\n\ntested using\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
UI Options test 3 fails

<http://build.fluidproject.org/fluid/tests/fluid-tests/UIOptions-test.html>

        
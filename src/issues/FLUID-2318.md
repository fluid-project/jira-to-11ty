---json
{
  "title": "FLUID-2318",
  "summary": "Unit test 3.3 fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-09T08:56:58.000-0400",
  "updated": "2009-03-20T16:30:54.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:06:12.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:43:25.000-0400",
      "body": "Throws an error\n\nError: previewEnhancer is undefined\\\nLine:219\\\nFile: UIOptions.js\n\nsee <https://fluidproject.atlassian.net/browse/FLUID-2313#icft=FLUID-2313>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T16:30:54.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2(Mac OS 10.5)\\\nFF2, FF3, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Unit test 3.3 fails

<http://build.fluidproject.org/fluid/tests/fluid-tests/UIOptions-test.html>

3.3 Small font size selected, expected: "8" result: undefined

        
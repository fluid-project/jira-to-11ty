---json
{
  "title": "FLUID-2186",
  "summary": "Progress Test 4.5 fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-02-03T10:41:06.000-0500",
  "updated": "2009-02-06T08:42:00.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-05T19:03:26.000-0500",
      "body": "We now explicitly check for null before updating the text of the progressor.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T08:42:00.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Progress Test 4.5 fails

<http://build.fluidproject.org/fluid/tests/fluid-tests/uploader/Progress-test.html>

        
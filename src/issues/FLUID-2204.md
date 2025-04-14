---json
{
  "title": "FLUID-2204",
  "summary": "Progress Bar manual test doesn't show change in progress",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-02-06T10:49:58.000-0500",
  "updated": "2009-04-08T09:15:44.000-0400",
  "versions": [
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Herb Wideman",
      "date": "2009-04-01T09:47:29.000-0400",
      "body": "This seems to be resolved with the 1.0 beta in FF3/XP\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2009-04-01T10:43:27.000-0400",
      "body": "Also resolved with 1.0 beta in Opera9.6/XP\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-01T12:28:59.000-0400",
      "body": "I forgot to update this JIRA a few days ago. With updating Progress to the new class name scheme, I fixed the manual test for Progress. Basically the selectors had gotten out of sync with the implementation. So refreshing the selectors fixed the tests.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-08T09:15:44.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)&#x20;\n"
    }
  ]
}
---
Progress Bar manual test doesn't show change in progress

Steps to reproduce:

1\) Open the Progress Bar manual test\
<http://build.fluidproject.org/fluid/tests/fluid-tests/uploader/manual/Progess/simple-progress.html>

2\) Change the progress and press enter

Notice that the progress is not indicated in any of the progress bars

        
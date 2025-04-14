---json
{
  "title": "FLUID-5436",
  "summary": "Manual tests \"Performance Tests\": add descriptions rather than showing blank pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-06-09T11:21:13.666-0400",
  "updated": "2015-06-26T09:54:41.456-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-16T11:29:35.786-0400",
      "body": "This was addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-5217#icft=FLUID-5217>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:46.076-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Running performance tests

<http://build.fluidproject.org/infusion/tests/manual-tests/html/performance-test.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/performance-test-2.html>

shows blank pages. The tests actually output results to the console log. It would be more user friendly if we add descriptions of the goals of these demos and what they do onto these pages.

        
---json
{
  "title": "FLUID-6411",
  "summary": "Corruption when cleaning up listeners registered to resource-based models",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-10-09T08:52:35.469-0400",
  "updated": "2024-07-22T10:35:03.192-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-10-09T10:27:41.882-0400",
      "body": "Antranig Basman, I believe it also happens at the end of a \\`fluid.test.runTests\\` run, even single test runs with this kind of component would run all tests, but never exit, both in the browser, and in Node.js.\n"
    }
  ]
}
---
This only affects the work in progress FLUID-6148 branch. This was reported by Tony Atkins \[RtF] as part of <https://github.com/GPII/gpii-handlebars/pull/30> . A fairly self-contained test is available at <https://github.com/GPII/gpii-handlebars/blob/eb3fdedbf59c6e7765f187bf40b9e9c79a63ac2a/tests/js/server/listener-problem-tests.js>\
The error is fired during destruction of the createOnEvent resourceLoader component on its 2nd creation as the framework attempts to clean up its model listener.

        
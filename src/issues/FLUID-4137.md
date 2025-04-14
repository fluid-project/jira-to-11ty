---json
{
  "title": "FLUID-4137",
  "summary": "Update asynchronous unit tests to use asyncTest instead of stop()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-10T12:45:58.518-0500",
  "updated": "2016-07-08T08:36:57.522-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-17T15:27:09.221-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/686> ) into the project repo at 7a69870ef26c84f6f9837c5ce1ed3cc67460a61f\n"
    }
  ]
}
---
CachingTests.js and FluidViewTests.js still use stop() instead of making use of asyncTest.

        
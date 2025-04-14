---json
{
  "title": "SJRK-322",
  "summary": "Mysterious Kettle crash when running tests",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Antranig Basman",
  "date": "2020-01-28T10:55:53.767-0500",
  "updated": "2020-01-28T14:32:49.769-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-01-28T14:32:49.760-0500",
      "body": "Duplicate of SJRK-187 (as far as we can tell)\n"
    }
  ]
}
---
When running the SJRK client tests, once I received a mysterious Kettle crash whilst running the base-page-storyEdit-Tests.html from the full test rollup. Unfortunately I didn't preserve the stack trace at the time and running the tests a further 10 times have failed to reproduce it.

The failure was within kettle.markActiveRequest as executed from the static middleware handler, complaining that the request to be marked had already been destroyed. This failure should have been benign, since the built-in Kettle failure handler simply aborts any current request and logs the failure - however, the server exitted, for a reason which isn't clear. One possibility might have been that the test version of the handler in kettle.test.handleUncaughtException was included, which invokes process.exit(1) to fiercely highlight problems in test cases - however, it was not included in any site from the code I could see. I also verified that the process shouldn't ordinarily exit by manually triggering a failure in the debugger in kettle.markActiveRequest and checking that the correct failure handlers were called.

It's going to be hard to trace this issue down without some more reliable ways of triggering it. My best guess is that some rare race condition is responsible not only for triggering the initial failure but also for triggering some further failure during the processing of an uncaught exception resulting from it which causes node to exit.

        
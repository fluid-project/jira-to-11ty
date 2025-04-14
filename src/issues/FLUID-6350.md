---json
{
  "title": "FLUID-6350",
  "summary": "Address \"BadRequestError\" messages in browser test runs.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-11-09T08:18:56.015-0500",
  "updated": "2024-07-22T08:51:31.182-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-12T09:08:40.004-0500",
      "body": "The third approach (running individual tests) takes a lot longer, results in bloated log output, and fills up the drive on a standard Vagrant VM before it completes.  Although it's possible to work around this, we should discuss the problem and a range of approaches in the next architecture meeting.\n\nThe fourth approach is probably workable, but as we have a mixture of Fluid IoC tests and direct jqUnit tests in the package, we can't just (for example) make a common caseHolder.  Instead we'd need some kind of static function that adds an additional async test at then end of each run, which only completes once the coverage results are sent.  This would require switching off the current usage of the QUnit.done hook and manually calling the coverage callback.\n\nI did some more research about the first approach just to confirm that the most recent version of QUnit.composite is able to wait for a child page to complete an asynchronous action hooked into QUnit.done by a child page to complete before closing the child iframe.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-12T09:29:17.720-0500",
      "body": "I just did some research regarding [the QUnit.config.testsArriving mechanism used by the Fluid IoC test framework](https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/js/qunit.js#L1467) to ensure that QUnit waits long enough for tests to arrive.  If we absolutely cannot upgrade QUnit, one option would be to add a second marker variable that is meant to be set and cleared by asynchronous activities that must be completed between the last test and the synchronous \"done\" call.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-14T12:49:05.320-0500",
      "body": "In tonight's architecture meeting, we discussed reusing and expanding the current pattern used by the Fluid IoC test framework, which involves setting a key variable and then checking that value and deferring shutdown as needed.\n\nHere's the bit that sets the variable.\n\n<https://github.com/fluid-project/infusion/blob/bfbbf740eddd18ec17b604d0e4a785ec3033383d/tests/test-core/utils/js/IoCTestUtils.js#L837>\n\nAnd here we check for that and wait:\n\n<https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/js/qunit.js#L1467>\n\nWhat we need is a more general mechanism for registering arbitrary asynchronous activities that should block the normal shutdown, and one that is reached by all calls to QUnit, including those that do not use the Fluid IoC test framework.\n\nI'm thinking of making an \"asyncDone\" endpoint that can be used to register arbitrary functions and promises that must complete before shutdown completes.  This would use a fluid.promise.sequence, and ideally some kind of prioritisation mechanism.\n"
    }
  ]
}
---
Frequently in browser test runs, we see intermittent errors like:

```java
ok 69 Firefox 63.0 - [undefined ms] - Component Tests: /tests/component-tests/tooltip/html/Tooltip-test.html
BadRequestError: request aborted
    at IncomingMessage.onAborted (/home/vagrant/sync/node_modules/raw-body/index.js:231:10)
    at emitNone (events.js:106:13)
    at IncomingMessage.emit (events.js:208:7)
    at abortIncoming (_http_server.js:439:9)
    at socketOnClose (_http_server.js:433:3)
    at emitOne (events.js:121:20)
    at Socket.emit (events.js:211:7)
    at TCP._handle.close [as _onclose] (net.js:561:12)
ok 70 Firefox 63.0 - [undefined ms] - Component Tests: /
```

@@Justin Obara asked me to look into this in the context of gpii-testem in [GPII-3508](https://issues.gpii.net/browse/GPII-3508).  I spent a day researching and reading up on each of the involved libraries (gpii-testem, Testem, jqUnit, QUnit, QUnit.composite).

My conclusion is that our very old version of QUnit and QUnit.composite only expect a synchronous callback to be hooked into QUnit.done.  This causes problems when an asynchronous activity like sending coverage data is performed as part of that callback.  QUnit.composite listens for "child" iframes to trigger their own QUnit.done event before closing them.  Depending on the timing, QUnit.composite may close the "child" iframe before all results are sent, which results in the above error message and, depending on when the hangup occurs, potentially the loss of coverage data.

Unfortunately, we cannot handle this from Testem/gpii-testem, as QUnit.composite is the party that is hanging up the phone, and there is no good means of letting it know that it needs to wait.

There are a few potential solutions I can see:

1\. Upgrade QUnit and QUnit.composite to use a modern version which supports asynchronous functions.  Only the very latest version of QUnit (2.8.0) lets you pass a promise-returning function into its QUnit.done hook, and will wait for the promise to complete.\
2\. Further modify our fork of QUnit.composite to add some kind of check for the completion of asynchronous activity.\
3\. Develop a pattern to bypass the use of the QUnit.composite in combination with Testem/gpii-testem.\
4\. Add the coverage sending as a final test step in all test suites, ideally using sequences.  Since the test suites must be completed before QUnit.done is fired, this might bypass the lack of synchrony there without requiring unpacking all the rollups and running thousands of individual tests instead of a handful of rollups.

I will experiment with the third and fourth approaches, as these seem less disruptive than updating QUnit.composite and/or QUnit.

cc: @@Antranig Basman

        
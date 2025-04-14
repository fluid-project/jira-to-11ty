---json
{
  "title": "FLUID-6188",
  "summary": "Action of fluid.loadTestingSupport should be idempotent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2017-08-28T10:41:02.975-0400",
  "updated": "2024-07-22T10:35:05.098-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "node module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-08-30T14:26:34.553-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/843) has been merged into the project repo master branch at 392b2f8266725c41df1c8290b69c0e72100d0b8c\n"
    }
  ]
}
---
The `fluid.loadTestingSupport()` function needs to be called by users of jqUnit when using it within Infusion's node.js profile. This loads qunit, jqunit and the IoC Testing framework within the special V8 context holding Infusion itself. However, the action of this function is not idempotent and can lead to horrifying and incomprehensible disasters if it manages to load a duplicate QUnit object - QUnit has an immature approach to multiple inclusion and simply writes `window.QUnit = QUnit`.

The symptoms appeared when trying to debug test loading issues in <https://github.com/GPII/gpii-app/pull/17/files> .

When adding a self-contained fluid.loadTestingSupport call in an individual test file, we received incomprehensible failures which (with a lot of extra debug tracing) resemble this:

<https://botbot.me/freenode/fluid-work/2017-08-24/?msg=90240990&page=1>

```java
QUnit id pmevzzxc0gmowq3kgldi config.current [object Object]
Now executing testFunc for gpii.tests.acceptance.cloudBased.config.base tests config.current is undefined
QUnit id 417hj4ih7rav9hir7ldi config.current undefined
08:50:15.173:  jq: FAIL: Module "gpii.tests.acceptance.cloudBased.config.base tests" Test name "Acceptance test for empty preferences in Chrome" - Message: Died on test #1     at Object.asyncTest (C:\gpii-app\node_modules\infusion\tests\lib\qunit\js\qunit.js:411:9)
One of the QUnits believes it is in the middle of a test, and the other one doesn't
```

        
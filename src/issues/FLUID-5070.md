---json
{
  "title": "FLUID-5070",
  "summary": "Tests written with IoC Testing Framework will sometimes attempt to reinstantiate a destroyed TestEnvironment",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-06-26T12:00:08.390-0400",
  "updated": "2015-06-15T10:34:34.331-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-26T12:05:00.105-0400",
      "body": "The problem lies with the following block of code, which assumes that an asynchronous test issued to QUnit will always begin to execute asynchronously. Sometimes QUnit will finish the test completely before the the following queue check executes, which then causes the testing framework to faultily try to reinstantiate the entire tree when it reaches the \"noteTest\" directive:\n\nIoCTestUtils.js lines 466-479\n\n// Note that this test relies on an implementation detail of qunit. For those\\\n// tests which fail the \"validTest\" test due to being filtered out in the UI,\\\n// they result in no material placed in the queue. We escape the case where they\\\n// might enter the queue and immediately leave it as a result of only ever issuing\\\n// asynchronous tests\\\nvar oldLength = QUnit.config.queue.length;\\\njqUnit\\[testType]\\(fixture.name, testFunc);\\\nif (QUnit.config.queue.length === oldLength) {\\\nfluid.log(fluid.logLevel.IMPORTANT, \"Skipped test \" + fixture.name);\\\n}\\\nelse {\\\nfluid.log(fluid.logLevel.IMPORTANT, \"Successfully queued test \" + fixture.name);\\\nfluid.test.noteTest(testCaseState.root, 1);\\\n}&#x20;\n"
    }
  ]
}
---
Steps to reproduce:

1\) Run the SettingsPanels unit tests.\
<http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/SettingsPanels-test.html>

All the tests should pass

2\) Click the "Rerun" link beside each of the tests to run them individually.\
Notice that from the 3rd one on, they start to have failures, due to the tests being run twice.

        
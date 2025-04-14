---json
{
  "title": "FLUID-6397",
  "summary": "IoC Testing Framework always begins to construct first test environment grade immediately",
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
  "date": "2019-09-17T07:14:45.070-0400",
  "updated": "2024-07-22T10:35:01.358-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6541/",
      "key": "FLUID-6541"
    }
  ],
  "attachments": [],
  "comments": []
}
---
There is a design flaw in the current IoC testing framework in that construction of the first test environment grade supplied to fluid.test.runTests will start IMMEDIATELY, since otherwise the framework cannot evaluate what test fixtures there are in order to send them to jqUnit.asyncTest. This means that this startup will be interleaved with any other asynchronous tests which are already in progress which may lead to undesirable results.

This problem could not be resolved before we have implemented the <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982> framework which is capable of introducing asynchronous delays into component startup. Once we can update to this framework, we can insert a "resource" into the resources block of the testEnvironment that delays further instantiation of the grade until QUnit's test queue is dry.

In the meantime, the best practice is to place all IoC testing framework tests FIRST in any test run which consists of mixed IoC testing framework fixtures and ordinary jqUnit.asyncTest fixtures.

        
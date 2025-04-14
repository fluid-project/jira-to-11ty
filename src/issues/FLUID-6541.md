---json
{
  "title": "FLUID-6541",
  "summary": "Mixtures of plain async tests and IoC testing framework tests can jam in some situations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-08-07T20:01:11.437-0400",
  "updated": "2024-07-18T07:36:52.477-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6397/",
      "key": "FLUID-6397",
      "summary": "IoC Testing Framework always begins to construct first test environment grade immediately"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Philip Tchernavskij",
      "date": "2020-08-10T13:55:55.396-0400",
      "body": "I have written up a [minimal breaking case](https://github.com/ptcher/infusion-nexus/tree/FLUID-6541) that is a heavily shaved-down version of the tests that were breaking in the <https://fluidproject.atlassian.net/browse/FLUID-6504#icft=FLUID-6504> work.\n\nTo reproduce, clone and install that branch, and install and run tests using Node 12.14.\n"
    }
  ]
}
---
As part of the work in implementing <https://fluidproject.atlassian.net/browse/FLUID-6504#icft=FLUID-6504> for the Infusion Nexus, it was found that in some racy kind of way, mixing plain jqUnit.asyncTest fixtures with IoC testing framework fixtures could cause a hang. The relevant pull request is <https://github.com/fluid-project/infusion-nexus/pull/25/files>\
Until the fixtures in  tests/NexusUtilsTests.js  were converted to jqUnit.sync, it was possible for them to cause a hang when run sequentially with bindModelTests. These tests properly should always have been sync since the behaviour they test is synchronous, but on the other hand it should not cause a fault if they expressed as async. Note that QUnit's sequence is to call QUnit.stop() on an async fixture and then to execute it - <https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/js/qunit.js#L195>

Anecdotally some odd behaviour has sometimes been received on mixing fixtures in this way but the entire "IoC Testing framework" needs an overhaul in any case to eliminate issues such as FLUID-6397 once we can move fully over to the post FLUID-6148 framework.

        
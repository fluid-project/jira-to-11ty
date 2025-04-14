---json
{
  "title": "FLUID-5497",
  "summary": "Priorities of model listeners added via the IoC testing framework have become inverted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-21T08:21:34.755-0400",
  "updated": "2015-06-26T10:14:11.351-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-08-22T16:08:18.249-0400",
      "body": "Merged into trunk at revision b3926266d844dd15ffb1cd0146d1cec33c12a0d2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:24.576-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The bug fixes for applying precise model invalidation and the new "source tracking system" merged in <https://github.com/fluid-project/infusion/pull/553> for FLUID-5489, <https://fluidproject.atlassian.net/browse/FLUID-5490#icft=FLUID-5490> introduced a serious bug into the system whereby the "mapPriority" function is applied twice to model listener records added via the IoC testing framework. For example, in the following record,\
listenerMaker: "gpii.tests.makeAssertModelChanges",\
makerArgs: \["{resourceInputPanel}", "resources.0.src", "{that}.options.testOpts.0.src"],\
spec: {path: "", priority: "last"},\
changeEvent: "{resourceInputPanel}.applier.modelChanged"\
the value priority: "last" became mapped to a numeric value, and was then inverted, causing this listener to be notified FIRST rather than last. This causes the test cases to fail in a brutal and perplexing way - firstly the entire test sequence resolves before the second change in the stack (triggered by a manual relay) is applied, and so no changes are picked up in the UI  - then when the changes do begin to apply, the user receives an "error expanding material for destroyed component" failure since the entire test fixture has now been cleared away.

        
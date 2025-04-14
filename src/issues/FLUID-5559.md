---json
{
  "title": "FLUID-5559",
  "summary": "onTestCaseStart event can fire multiple times in IoC Testing fixture",
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
  "date": "2014-11-18T14:41:18.553-0500",
  "updated": "2014-11-19T10:29:24.687-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-11-19T10:29:20.949-0500",
      "body": "Antranig's pull request (<https://github.com/fluid-project/infusion/pull/570>) that fixes this issue has been merged into the project repo @ f5d4f6ac978fe235baf0986b56edd7af6c0bd452\n"
    }
  ]
}
---
As part of the <https://fluidproject.atlassian.net/browse/FLUID-4929#icft=FLUID-4929> fix we introduced an event intrinsic to an IoC Testing framework fixture, "onTestCaseStart", which allows the timing of component construction to be "caught" by the beginning of a fixture sequence - the typical use of this is via a createOnEvent: "onTestCaseStart" directive. An implementation bug allows this event to fire twice for the same sequence if the listener to initial firing synchronously causes control to pass to the final element of the sequence. This event was implemented lazily using two firing sites and guarded by a flag whose setting was mistimed.

This arose during work on the preference editing framework - <https://github.com/cindyli/prefsEditors/blob/GPII-1014/tests/adjusters/js/cursorSizePCPTests.js#L106-L107> held

sequence: \[{\
listener: "gpii.tests.cursorSizePCPTests.testDefault",\
priority: "last",\
event: "{cursorSizePCPTests cursorSizePCP}.events.afterRender"\
}, {\
func: "gpii.tests.cursorSizePCPTests.pressStepper",\
args: \["{cursorSizePCP}"]\
}]

where the corresponding environment was defined as

fluid.defaults("gpii.tests.cursorSizePCPTests", {\
gradeNames: \["fluid.test.testEnvironment", "autoInit"],\
components: {\
cursorSizePCP: {\
type: "gpii.adjuster.cursorSizePCP",\
container: ".gpiic-cursorSizePCP",\
createOnEvent: "{cursorSizePCPTester}.events.onTestCaseStart",

the framework passes via its "makeBinder" directly from the listener to sequence point 0 to point 1, triggering the re-construction of the "cursorSizePCP" component before its first construction has finished. There's probably a strong case for introducing asynchrony between all transitions in these test case fixtures, since the behaviour of the framework on re-initiating construction or destruction during either construction or destruction is undefined. These conditions should also receive explicit diagnostics - although these wouldn't have done a much better job in trapping and explaining the current issue than the one we already have.

        
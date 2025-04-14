---json
{
  "title": "FLUID-5575",
  "summary": "Timing of onTestCaseStart event is incorrect",
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
  "date": "2014-11-21T14:46:14.923-0500",
  "updated": "2015-08-20T15:18:11.629-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:18:08.147-0400",
      "body": "Merged into trunk at revision c93609021fba9c798489df95e35164fd55f5c64a\n"
    }
  ]
}
---
FLUID-5559 corrected one of the significant issues with the onTestCaseStart event fired in an IoC fixture, but several others remain. The typical use of this event is as a "createOnEvent" annotation to defer the startup of a component under test, in case some of the startup behaviour itself is what requires testing in the fixture. This is an nonideal scheme but it is one we are stuck with until we have FLUID-4982 - in the meantime we need to fix up this event so it behaves properly.

Another implementation fault is that this event fires late, if the first fixture in a sequence is of the "active" type - for example, here are the beginnings of two sequences in the "feedbackTests.js" of the metadata editing tool:

tests: \[{\
name: "Init",\
sequence: \[{\
listener: "gpii.tests.verifyInit",\
args: \["{feedback}"],\
priority: "last",\
event: "{feedbackTests feedback}.events.onFeedbackMarkupReady"\
}]\
}, {\
name: "Match confirmation dialog",\
sequence: \[{\
jQueryTrigger: "click",\
element: "{feedback}.dom.matchConfirmationButton"\
}, {

The first sequence begins with a passive fixture, the 2nd with an active one. Both of these are testing a component "feedback" which is registered as per the pattern described above with "createOnEvent":

fluid.defaults("gpii.tests.feedbackTests", {\
gradeNames: \["fluid.test.testEnvironment", "autoInit"],\
components: {\
feedback: {\
type: "gpii.metadata.feedback",\
createOnEvent: "{feedbackTester}.events.onTestCaseStart",

the effect of this bug when test fixtures are filtered out using the QUnit UI is unfortunate. These tests APPEAR to run correctly when the entire fixture of 3 sequences is run. However, if either sequence 2 or sequence 3 is isolated in the UI, the user will be treated to an entirely unhelpful "operating on destroyed component" error. This is because of the combination of bug <https://fluidproject.atlassian.net/browse/FLUID-5266#icft=FLUID-5266> and this bug - the reference {feedback} in the first active fixture in the sequence eagerly and erroneously constructs the feedback component, and then the "onTestCaseStart" event fires subsequently, destroying that component before the second element can then act on it.

        
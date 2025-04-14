---json
{
  "title": "FLUID-5145",
  "summary": "Boiled events can halt IoC Testing framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-09-20T12:48:19.357-0400",
  "updated": "2014-03-03T11:28:32.696-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-20T12:52:27.194-0400",
      "body": "Sent a pull request with a test case demonstrating the issue.\\\n<https://github.com/fluid-project/infusion/pull/407>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-09-21T02:26:12.682-0400",
      "body": "This issue is not a fault, but caused by an inappropriate use of the IoC testing framework, which is primarily designed to assist with working with asynchronous sequences. From the pull request:\n\n\"The behaviour of these tests is essentially random, depending on the exact order that listeners are notified. As explained in the channel, the testing approach is invalid and the IoC testing fixture system should only be used for asynchronous events with a definite ordering, not for synchronous events for which the sequence is arbitrary.\"\n\nAlso see IRC discussion from today at <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-09-20>\n"
    }
  ]
}
---
Trying to test boiled events will halt at the test sequence where the listener is bound to the original event location. For example in the test setup below, the test will not continue past the first listener sequence.

fluid.defaults("fluid.tests.boiledEventTree", {\
gradeNames: \["fluid.test.testEnvironment", "autoInit"],\
components: {\
boiledEventComp: {\
type: "fluid.eventedComponent",\
options: {\
events: {\
testEvent: null\
},\
invokers: {\
trigger: {\
func: "{that}.events.testEvent.fire"\
}\
},\
components: {\
child: {\
type: "fluid.eventedComponent",\
options: {\
events: {\
testEvent: null\
},\
listeners: {\
"{boiledEventComp}.events.testEvent": {\
listener: "{that}.events.testEvent"\
}\
}\
}\
}\
}\
}\
},\
boiledEventTester: {\
type: "fluid.tests.boiledEventTester"\
}\
}\
});

fluid.defaults("fluid.tests.boiledEventTester", {\
gradeNames: \["fluid.test.testCaseHolder", "autoInit"],\
modules: \[ {\
name: "Boiled Event test case",\
tests: \[{\
name: "Boiled Event sequence",\
expect: 2,\
sequence: \[{\
func: "{boiledEventComp}.trigger"\
}, {\
listener: "fluid.tests.checkEvent",\
event: "{boiledEventComp}.events.testEvent"\
}, {\
listener: "fluid.tests.checkEvent",\
event: "{boiledEventComp}.child.events.testEvent"\
}]\
}]\
}]\
});

        
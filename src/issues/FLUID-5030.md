---json
{
  "title": "FLUID-5030",
  "summary": "\"createOnEvent\" and events from additive grades are not merged in properly",
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
  "reporter": "Cindy Li",
  "date": "2013-06-03T14:43:03.119-0400",
  "updated": "2014-03-03T11:49:41.119-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-03T17:21:48.485-0400",
      "body": "When rewritten to the following, the test case works correctly -&#x20;\n\n/\\*\\* <https://fluidproject.atlassian.net/browse/FLUID-5030#icft=FLUID-5030> - \"createOnEvent\" and events from additive grades are not merged in properly \\*\\*/\n\nfluid.defaults(\"fluid.tests.fluid5030Grade\", {\\\ngradeNames: \\[\"fluid.eventedComponent\"],\\\nevents: {\\\ncreationEvent: null\\\n},\\\nlisteners: {\\\ncreationEvent: {\\\nlistener: \"fluid.tests.fluid5030listener\",\\\nargs: \"{that}\"\\\n}\\\n},\\\ncomponents: {\\\nsubComponent: {\\\ncreateOnEvent: \"creationEvent\"\\\n}\\\n}\\\n});\n\nfluid.defaults(\"fluid.tests.fluid5030Root\", {\\\ngradeNames: \\[\"fluid.eventedComponent\", \"fluid.tests.fluid5030Grade\", \"autoInit\"],\\\ncomponents: {\\\nsubComponent: {\\\ntype: \"fluid.tests.fluid5030Sub\"\\\n}\\\n}\\\n});\n\nfluid.defaults(\"fluid.tests.fluid5030Sub\", {\\\ngradeNames: \\[\"fluid.eventedComponent\", \"autoInit\"]\\\n});\n\nfluid.tests.fluid5030listener = function (that) {\\\nthat.creationEventFired = true;\\\n};\n\njqUnit.test(\"FLUID-5030 - createOnEvent and events from additive grades are not merged in properly\", function () {\\\nvar root = fluid.tests.fluid5030Root();\n\njqUnit.assertNotUndefined(\"The event defined in the grade component is merged in\", root.events.creationEvent);\\\njqUnit.assertFalse(\"The createOnEvent is not fired\", root.creationEventFired);\\\njqUnit.assertUndefined(\"The subcomponent that should be created on createOnEvent is not created\", root.subComponent);\\\n});\n\nThis is exposing the fact that the issue is in fact a different one - I reported this as <https://fluidproject.atlassian.net/browse/FLUID-5032#icft=FLUID-5032> and closing in favour of that issue: You will notice that in the test you submitted, there are TWO failures rather than one - the first test, that the event defined in the grade component also fails, as well as the unexpected early creation of the subcomponent which is meant to be delayed until an event. This shows that actually none of the material in \"fluid.tests.fluid5030Grade\" is reaching the component, not just the \"createOnEvent\" annotation.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-03T17:22:21.918-0400",
      "body": "Closed in favour of <https://fluidproject.atlassian.net/browse/FLUID-5032#icft=FLUID-5032>\n"
    }
  ]
}
---
Example:

A component has an additive grade defined:

fluid.defaults("fluid.tests.fluid5030Root", {\
gradeNames: \["fluid.eventedComponent", "fluid.tests.fluid5030Grade", "autoInit"],\
...\
});

The grade component defines its own events and a subcomponent with a createOnEvent being one of these own events:

fluid.defaults("fluid.tests.fluid5030Grade", {\
gradeNames: \["fluid.tests.fluid5030Root", "autoInit"],\
events: {\
myevent: null\
},\
components: {\
subComponent: {\
createOnEvent: "myevent"\
}\
}\
...\
});

Create an instance of "fluid.tests.fluid5030Root"; in this instance, \
1\. the "myevent" is not found\
2\. the "subComponent" is created regardless of whether or not its createOnEvent is fired.

The test case to demonstrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2763-2802>

        
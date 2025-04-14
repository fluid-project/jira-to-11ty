---json
{
  "title": "FLUID-5155",
  "summary": "The invoker that returns dynamic grades is not resolved when its host component being passed down via IoCSS",
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
  "reporter": "Cindy Li",
  "date": "2013-09-24T15:47:08.431-0400",
  "updated": "2014-03-03T11:27:59.361-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-10-07T14:20:30.954-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/412> merged into project repo at 04a85a490a05d6ddb5de6e2dbf9a9b1e83e476dd\n"
    }
  ]
}
---
The host component that has dynamic grade:

fluid.defaults("fluid.tests.dynamicGrade", {\
gradeNames: \["fluid.littleComponent", "autoInit", "{that}.computeGrade"],\
invokers: {\
computeGrade: "fluid.tests.computeDynamicParent"\
}\
});

When this host component is passed down to a subcomponent as a grade:

fluid.defaults("fluid.tests.root5154", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
components: {\
subComponent: {\
type: "fluid.littleComponent"\
}\
},\
distributeOptions: {\
source: "{that}.options.subComponent",\
removeSource: true,\
target: "{that subComponent}.options"\
}\
});

...\
var that = fluid.tests.root5154({\
subComponent: {\
gradeNames: "fluid.tests.dynamicGrade"\
}\
});

The invoker for dynamic grade, which is "{that}.computeGrade", doesn't get resolved correctly in the final instantiated root.&#x20;

Examining the grade name list of the subComponent "that.subComponent.options.gradeNames", "{that}.computeGrade" was shown as a grade rather than the actual returned value from the "computeGrade" invoker.

A pull request to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/410>

        
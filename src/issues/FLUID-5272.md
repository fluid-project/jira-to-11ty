---json
{
  "title": "FLUID-5272",
  "summary": "The model relay throws error when the source or target component is a view or renderer component",
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
  "date": "2014-02-11T11:26:29.233-0500",
  "updated": "2014-02-11T16:28:15.834-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-02-11T16:28:15.833-0500",
      "body": "No need to fix since using new component types \"fluid.viewRelayComponent\" and \"fluid.renderRelayComponent\" fixes this issue.\n"
    }
  ]
}
---
Case 1: The target component is an independently defined view or renderer component.

1\. Declare the target component independently as a view or renderer component:\
fluid.defaults("fluid.tests.fluid5272sub", {\
gradeNames: \["fluid.viewComponent", "fluid.standardRelayComponent", "autoInit"]\
});

2\. Define another component "fluid.tests.fluid9999" that has the model relay and transformation to the target:\
fluid.defaults("fluid.tests.fluid5272Case1", {\
gradeNames: \["fluid.standardRelayComponent", "autoInit"],\
modelRelay: {\
source: "{that}.model.celsius",\
target: "{sub}.model.fahrenheit",\
singleTransform: {\
....\
}\
},\
components: {\
sub: {\
type: "fluid.tests.fluid5272sub",\
container: "#FLUID-5272"\
}\
}\
});

3\. Instantiating "fluid.tests.fluid5272Case1" throws "applier.preCommit is undefined" from DataBinding.js, line 678:

However, if the component type (fluid.viewComponent or fluid.rendererComponent) of the target component is directly specified in the same tree with the source component, no error occurs and the transformation works fine:

fluid.defaults("fluid.tests.fluid5272", {\
gradeNames: \["fluid.standardRelayComponent", "autoInit"],\
modelRelay: {\
source: "{that}.model.celsius",\
target: "{sub}.model.fahrenheit",\
singleTransform: {\
....\
}\
},\
components: {\
sub: {\
type: "fluid.viewComponent",\
container: "#FLUID-5272",\
options: {\
gradeNames: "fluid.standardRelayComponent"\
}\
}\
}\
});

Case 2: The source component is a view or renderer component.

1\. The source component in the model relay is a view or renderer component:\
fluid.defaults("fluid.tests.fluid5272Case2", {\
gradeNames: \["fluid.viewComponent", "fluid.standardRelayComponent", "autoInit"],\
modelRelay: {\
source: "{that}.model.celsius",\
target: "{sub}.model.fahrenheit",\
singleTransform: {\
....\
}\
},\
components: {\
sub: {\
type: "fluid.standardRelayComponent"\
}\
}\
});

2\. Instantiating "fluid.tests.fluid5272Case2" throws "trans.transaction.reset" is not a function", from DataBinding.js, line 360

        
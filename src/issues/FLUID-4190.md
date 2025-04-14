---json
{
  "title": "FLUID-4190",
  "summary": "\"produceTree\" configuration for renderer components is inadequate for simple declarative solutions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-19T14:26:05.947-0400",
  "updated": "2011-07-08T16:15:42.852-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:41:15.934-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-23T21:30:37.669-0400",
      "body": "A simple scheme as described has been implemented, covering the obvious cases. However, more thought is still needed in the long term about our ultimate approach to \"methods\".\n"
    }
  ]
}
---
The capabilities of "produceTree" configuration lag behind those of the newly implemented lifecycle functions - when defined in component defaults, "produceTree" needs to be a direct function object rather than having the ability to dereference function names. It should ALSO be possible to define "produceTree" as an invoker - this is also not possible since the autoInit lifecycle does not call initDependents until after the component init function returns. For example, the following code:

fluid.registerNamespace("fluid.uiOptions.controls");

fluid.defaults("fluid.uiOptions.controls", {\
...\
finalInitFunction: "fluid.uiOptions.controls.finalInit",\
produceTree: fluid.uiOptions.controls.produceTree\
});

fluid.uiOptions.controls.produceTree = function (that) {\
var tree = {};\
var radiobuttons = \[];\
...

fails to correctly register the produceTree method so it can be recognised by the rendererComponent lifecycle

        
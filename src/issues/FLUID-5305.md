---json
{
  "title": "FLUID-5305",
  "summary": "Provide better diagnostics in the case of runaway component instantiation recursion",
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
  "date": "2014-04-09T00:11:02.781-0400",
  "updated": "2014-04-09T00:11:49.832-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now it is relatively easy to designate a component which appears as a subcomponent of itself - for example, the following definition appeared during the development of the ontology server for the GPII -&#x20;

fluid.defaults("gpii.ontologyHandler", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
.... \
ontologyHandler: {\
type: "gpii.ontologyHandler"\
}\
},\
.... \
});

Currently the framework accepts these kinds of definitions and tries to instantiate an indefinite number of components as a result. There isn't any visible diagnostic and the user symptoms are a hung process. Unfortunately the current "overflow detection" that we have in both the merging and expansion pathways can't spot this kind of runaway since each instantiated component is individually small. The simplest fix would be to just statically apply the current fluid.strategyRecursionBailout limit (currently 50) to component instantiation depth also. It's barely conceivable that genuine trees of great depth might arise, especially when the new renderer is implemented. In that case it's possible that when FLUID-5304 is implemented we could use the "shape analysis" system to statically detect this kind of fault at the point of issue (or at least after only 2 components have been instantiated) and so bail out much earlier and without the need for a static limit.

        
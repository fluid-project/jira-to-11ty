---json
{
  "title": "FLUID-5246",
  "summary": "Grade linkage system is not activated unless there are already dynamic grades on a component",
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
  "date": "2014-01-09T13:19:20.752-0500",
  "updated": "2014-03-03T11:24:07.485-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-01-09T17:45:42.138-0500",
      "body": "Merged into trunk at revision 2c9d4c1\n"
    }
  ]
}
---
The "grade linkage system" aka "new demands blocks" for <https://fluidproject.atlassian.net/browse/FLUID-5212#icft=FLUID-5212> was found to have a flaw when working with the resolver system implemented in the GPII's LifecycleManager. This implementation was extremely old and even predated <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> demands blocks. In fact, the comment above it used to read&#x20;

// TODO: Use this silly system until demands blocks are fixed via <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392>\
// The idea is that users will derive grades from this one which add in\
// further resolvers, and then issue a single demands block which replaces\
// this class with their own impl. Still doesn't easily allow for multi-dim.\
// extension

Since the pull request against the Windows repository required to enable this was never actually yet merged (c. 7 months) it seemed reasonable to modernise this system since demands blocks have been removed from the remainder of the GPII anyway. This is a case where the new "grade linkage system" indeed seems to solve the problem straightforwardly, but unfortunately our current implementation has a bug.

We would like to write, in LifecycleManager.js:

fluid.defaults("gpii.lifecycleManager.standardResolverConfig", {\
gradeNames: \["fluid.littleComponent", "fluid.applyGradeLinkage", "autoInit"],\
resolvers: {\
environment: "gpii.lifecycleManager.environmentResolver"\
}\
});

and then in Windows registeryResolver/index.js

fluid.defaults("gpii.lifecycleManager.registryResolverConfig", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
resolvers: {\
registry: "gpii.lifecycleManager.registryResolver"\
}\
});

fluid.defaults("gpii.lifecycleManager.resolverConfigWithRegistry", {\
gradeNames: \["autoInit", "fluid.gradeLinkageRecord"],\
contextGrades: \["gpii.lifecycleManager.standardResolverConfig"],\
resultGrades: \["gpii.lifecycleManager.registryResolverConfig"]\
});

Unfortunately since the relevant FluidIoC.js code looks like this (fluid.computeDynamicGrades):

var resolved = fluid.expandDynamicGrades(that, dynamicGrades);\
if (resolved.length !== 0) {\
do { // repeatedly collect dynamic grades whilst they arrive (FLUID-5155)\
var furtherResolved = fluid.collectDynamicGrades(that, shadow, defaultsBlock, gradeNames, dynamicGrades, resolved);\
}\
while (furtherResolved.length !== 0);\
}

we fail to even kick off the linkage process held within fluid.collectDynamicGrades unless we already find at least one dynamic grade to start with.

        
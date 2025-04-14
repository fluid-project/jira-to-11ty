---json
{
  "title": "FLUID-4712",
  "summary": "Calls dispatched through a component invoker are not properly contextualised with local instantiator",
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
  "date": "2012-05-23T01:21:41.072-0400",
  "updated": "2024-07-22T09:37:52.511-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-17T17:25:55.814-0400",
      "body": "Reviewed, tested and pushed to master: <https://github.com/fluid-project/infusion/commit/6b610291339e63f582f3fb3f776bdf3d69f800f9>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-08-17T18:04:59.096-0400",
      "body": "Filling in a missing piece of the reasoning above - the fresh instantiator was created by an odd \"fall-through\" branch in \"withInstantiator\" that simply adopts the current \"that\" as the root component of a fresh instantiator if one cannot be found - this also contributed to difficulty in writing an adequate test case since if the current \"that\" was INDEED the root of the current component tree, it was hard to observe any problems during the instantiation which followed. This is also exacerbated by the fact that all invokers in the tree have already closed over the true instantiator, so if dispatch ever passes through them again, the correct instantiator will be restored. The case involving dispatch through \"ginger instantation\" described above seems to be the only path (that I can think of or have evidence for) that the instantiator corruption caused by the bug can lead to an observable effect. It may be necessary in time to have some \"white box testing\" in which various invariants of the state of the IoC system are checked, independently from being able to exploit corruption to lead to observable effects...\n"
    }
  ]
}
---
This was discovered in GPII, when making use of an invoker attached to a "request component" which referenced material which was cleared away incorrectly through the action of <https://fluidproject.atlassian.net/browse/FLUID-4711#icft=FLUID-4711> - the "ginger reference" made through the invoker configuration would attempt to reinstantiate these components, but given the invoker dispatch is simply written with "pushActivity" (FluidIoC.js, fluid.makeInvoker, line 646) rather than "withInstantiator", the original instantiator was not used, a fresh one was created, and the "instantiation through ginger reference" was not properly contextualised with the information from the site of reference.&#x20;

In this case, the reference was to {urlExpander}.expand, registered as follows (GPII dataSource.js line 102):

fluid.demands("gpii.dataSource.resolveUrl", null, {\
args: \[\
"{urlExpander}.expand",\
"{dataSource}.options.url",\
"{dataSource}.options.termMap",\
"{arguments}.0"\
]\
});

urlExpander should never have been missing in the first place, but in any case, it should have been possible to successfully reinstantiate it. In this case, the definition used should have been one like the following (FlowManager.js, line 177)

fluid.demands("gpii.urlExpander", \["gpii.demo", "gpii.flowManager"], {\
options: {\
vars: {\
db: "user",\
root: path.join(\_\_dirname, "..")\
}\
}\
});

However, context info such as gpii.flowManager was lost through the cause explained above. The fix is quite straightforward and was implemented as a "hot patch" in GPII's framework, but producing a test case demonstrating the issue in isolation will be more challenging.

        
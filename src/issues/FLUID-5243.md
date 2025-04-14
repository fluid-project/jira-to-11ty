---json
{
  "title": "FLUID-5243",
  "summary": "Corruption during re-entrant options expansion due to aliasing in \"segs\" argument",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2013-12-30T16:08:04.682-0500",
  "updated": "2015-05-21T09:15:47.511-0400",
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
      "author": "Antranig Basman",
      "date": "2013-12-30T16:56:16.636-0500",
      "body": "Note - creation of layoutHandler is actually triggered by the \"blind reference\" from root configuration onto {that}.layoutHandler.options.containerRole. This would clearly be much better timed through explosions.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-31T15:31:32.878-0500",
      "body": "Here is the \"instantiation story\" which was used to guide the construction of a reduced test case to diagnose and resolve this issue:\n\nInitial fetch of {that}.layoutHandler.options.containerRole -> ModuleLayoutHandler\n\nselectors.modules -> {reorderer}.options.selectors.modules\n\nPOSSIBLE CORRUPTION HERE - mountStrategy creates a fresh copy of segs via slice (FluidIoC.js line 93) - and this has\\\nseemingly been corrupted from selectors.modules to selectors.labelSource when we get to makeExpandStrategy/strategy\n\nProbably really, attempt to fetch selectors.modules causes flooding to start for selectors, which then firstly causes fetch of&#x20;\n\nmergePolicy: selectors.labelSource -> selectors.grabHandle - implemented as {that}.options.selectors.grabHandle starts a fetch via \"resolveContextValue\" which dispatches back via very long route to this same resolution:\n\nThen we go through regenerateSources -> regenerateCursor for \"selectors\" to resolve this reference (after a very long rigmarole of 20 stack frames to just get here from resolveContextValue.\n\nThis is the one with 4 sources, 4th of which is the user options - layoutHandler is resolved, and \"selectors\" should be coming - but it never arrives since we managed to trigger an expansion for i=2 of \"selectors/movables\" which holds the expander {that}.makeComputeModules\n\nAt this point we see \\[\"movables\", \"grabHandle\"] in the segs entries going up, which seems probably fatal, given we never finished resolving grabHandle before - that is, we are still in the middle of i=2 regenerateSources/regenerateCursor, which dispatches with the same segs all the way to makeExpandChildren which is probably the culprit.\n\nNext fetch is for {reorderer}.dropManager (needed for makeComputeModules) which kicks off yet a fresh cycle of regenerateCursor.....&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-05-21T09:15:47.486-0400",
      "body": "Merged into trunk at revision 89fb5e1a208c20ce4d7a2706012631364e57d6bc (Jan 31, 2014)\n"
    }
  ]
}
---
The merging/expanion pathway for the FLUID-4982 "ginger world" involves a complex network of mutually recursive functions forming the "flooding/driving" API pattern in which the arguments "segs" holding an array of path segments appears repeatedly. In a kind of "false economy" it appears we have tried to economise on the creation of this array more than is correct. When debugging a complex piece of the expansion workflow for instantiating the ModuleLayout configuration of the Reorderer, it seems that reentering the expansion workflow for the same component at a different path has corrupted the array of path segments.

In particular, an array which previously held \["selectors", "grabHandle"] was seen to be corrupted to \["selectables", "grabHandle"] before the previous path became completely merged.

This Reorderer configuration operates an extremely complex workflow which injects upwards three overrides for "selectables" members, from the "moduleLayout" up to the parent "reorderer" whilst it is still in the process of instantiating.. We should try to be less aggressive about sharing the "segs" array as well as trying to trace in detail the workflow responsible. This appears yet another case in which FLUID-4925 wave of explosions will be helpful - since it seems that the creation of the moduleLayout subcomponent is not necessarily triggered by a reliable process.

        
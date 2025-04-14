---json
{
  "title": "FLUID-5088",
  "summary": "Improve expansion pathway so that it provides better diagnostics as well as resistance to circular expansion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-07-12T23:33:02.800-0400",
  "updated": "2014-03-03T11:43:30.275-0500",
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
      "author": "Michelle D'Souza",
      "date": "2013-08-15T16:53:50.178-0400",
      "body": "Merged into project repo at 3223079c74ad3a2a20551def3f5a1880c42b98bc\n"
    }
  ]
}
---
During this week's development of the schema-aware UIOptions builder an unfortunate framework behaviour emerged which was difficult to debug.&#x20;

<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-07-09>

At the time of writing the definition being expanded looked as follows:

fluid.defaults("fluid.uiOptions.builder.enhancer", {\
gradeNames: \["autoInit", "fluid.viewComponent"],\
components: {\
store: {\
type: "fluid.globalSettingsStore"\
},\
enhancer: {\
type: "fluid.uiEnhancer",\
container: "body",\
options: {\
components: "{fluid.uiOptions.builder.enhancer}.options.auxSchema.enactors",

the resulting behaviour of the framework was misleading since it only provided the following diagnostic:

Tue Jul 09 2013 13:55:01 GMT-0600 (Mountain Standard Time): &#x20;

ASSERTION FAILED: Failed to resolve reference {uiEnhancer}.applier - could not match context with name uiEnhancer from component leaf Object { typeName="fluid.uiOptions.constructed", id="13z4bdwt-25", options={...}, more...}\
Fluid.js (line 287)\
Current activity:\
Fluid.js (line 287) while resolving context value {uiEnhancer}.applier\
Fluid.js (line 287) while constructing component of type fluid.uiOptions.constructed with arguments \["body"]

this provided at least some clue in the form of the reference that was being expanded, but was misleading in that it didn't provide the path in the component tree at which this message was held. This took some time to debug until it could be discovered that the reference was actually present in an unrelated piece of material - in fact inside the reference  auxSchema: "{that}.options.auxSchema", appeared material which contained raw IoC references including the errant {uiEnhancer}.applier which got inopportunely expanded out of context.

In practice the issue was resolved by putting an appropriate "noexpand" mergePolicy on the auxSchema, but it would be helpful if the framework gave more clues to the expanding reference location in these cases.

In fact, of the two ginger pathways, the "merging" pathway is better in this respect in that it keeps track of the full path segments to each configuration location during the process, leading to the expected benefits in diagnostics - the mergeStrategy begins with the following guard:

var strategy = function (target, name, i, segs, sources, policy) {\
if (i > fluid.strategyRecursionBailout) {\
fluid.fail("Overflow/circularity in options merging, current path is ", segs, " at depth " , i, " - please protect components from merging using the \\"nomerge\\" merge policy");\
}

the expand pathway in FluidIoC.js is underimplemented by comparison - perhaps as an optimisation we so far chose not to construct path segments in the case of "dispatch to self" since they were not otherwise read in the method body.

FluidIoC.js lines 1767-1769 currently has the following:

else { // Don't bother to generate segs or i in direct dispatch to self!!!!!!\
options.strategy(target, key, null, null, source, mergePolicy, miniWorld);\
}

this should be improved (at slight extra CPU cost) to be up to the standards of the merging pathway.

        
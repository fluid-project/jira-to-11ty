---json
{
  "title": "FLUID-6686",
  "summary": "Full Page Panel Style Prefs Framework example is broken, won't init.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-10-14T10:50:31.372-0400",
  "updated": "2024-07-22T10:35:08.391-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The "Full Page Panel Style" prefs framework example is completely broken and throws an error on init.

<https://build-infusion.fluidproject.org/examples/framework/preferences/fullpagepanelstyle/>

 

Error:

```java
{
  "message": "Assertion failure - check console for more details: Error in component configuration - a circular reference was found during evaluation of path segment \"model of path [\"model\",\"panelIndex\"]\": for more details, see the activity records following this message in the console, or issue fluid.setLogging(fluid.logLevel.TRACE) when running your application",
  "stack": "fluid.FluidError@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:184:26\nfluid.builtinFail@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:208:15\nfire@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1775:40\nfluid.fail@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:224:32\nfluid.concreteStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:884:19\nfluid.model.traverseWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:56:41\nfluid.model.accessImpl@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1228:16\nfluid.model.accessWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:107:32\nfluid.model.getWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:82:28\nfluid.get@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1311:25\nfluid.getForComponent@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:870:38\nfetcher@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:993:26\nfetch@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3149:32\nfluid.resolveContextValue@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3157:20\nfluid.expandSource@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3248:45\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3300:26\nfluid.fetchExpandChildren/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3220:29\nfluid.each@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:655:21\nfluid.fetchExpandChildren@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3213:15\nrecurse@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3281:26\nfluid.expandSource@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3268:20\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3300:26\nfluid.fetchExpandChildren/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3220:29\nfluid.each@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:655:21\nfluid.fetchExpandChildren@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3213:15\nrecurse@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3281:26\nfluid.expandSource@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3268:20\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3300:26\nfluid.fetchExpandChildren/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3220:29\nfluid.each@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:655:21\nfluid.fetchExpandChildren@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3213:15\nrecurse@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3281:26\nfluid.expandSource@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3268:20\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3300:26\nfluid.fetchExpandChildren/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3220:29\nfluid.each@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:655:21\nfluid.fetchExpandChildren@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3213:15\nfluid.makeExpandOptions/options.initter@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3325:40\nfluid.concludeComponentObservation@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1500:41\nlocalWorkflowTask/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2203:41\nlocalWorkflowTask@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2202:41\ninvokeNext@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:258:56\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:238:39\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\ncommitPotentiae@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2324:31\nfluid.tryCatch@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243:24\nfluid.commitPotentiae@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2309:15\nfluid.initFreeComponent@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:3020:28\ncreator@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:2302:26\n@https://build-infusion.fluidproject.org/examples/framework/preferences/fullpagepanelstyle/:65:19\n"
}
```

        
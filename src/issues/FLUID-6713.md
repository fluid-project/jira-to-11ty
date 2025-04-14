---json
{
  "title": "FLUID-6713",
  "summary": "Minimal Preferences Editor example not initializing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-02-03T07:59:51.235-0500",
  "updated": "2022-02-09T09:51:52.268-0500",
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
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:51:52.266-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [Minimal Preferences Editor](https://build-infusion.fluidproject.org/examples/framework/preferences/minimaleditor/) example
2. Notice there is no checkbox to set the preference
3. Open the console to see the following error:

```java
Uncaught 
Object { message: "Assertion failure - check console for more details: Reference to resources record with name awesomeCars_prefs_panels_heatedSeats which is not registered for component component { typeName: \"fluid.resourceLoader id: 7yrmsyda-204\" gradeNames: [\"fluid.resourceLoader\",\"fluid.prefs.created_7yrmsyda-53.messageLoader\"]} at path uiOptions-7yrmsyda-38.prefsEditorLoader.messageLoader", stack: "fluid.FluidError@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:184:26\nfluid.builtinFail@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:208:15\nfire@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1766:40\nfluid.fail@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:224:32\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:197:31\nfluid.mountStrategy/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:127:20\nfluid.model.traverseWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:56:41\nfluid.model.accessImpl@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1219:16\nfluid.model.accessWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:107:32\nfluid.model.getWithStrategy@https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:82:28\nfluid.get@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1302:25\nfluid.getForComponent@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:875:38\nfetcher@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:998:26\nfetch@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3155:32\nfluid.resolveContextValue@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3163:20\nfluid.expandSource@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3254:45\nstrategy@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3306:26\nfluid.fetchExpandChildren/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3226:29\nfluid.each@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:655:21\nfluid.fetchExpandChildren@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3219:15\nfluid.makeExpandOptions/options.initter@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:3331:40\nfluid.concludeComponentObservation@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1505:41\nfluid.enqueueWorkflowBlock/</localWorkflowTask/<@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2209:41\nlocalWorkflowTask@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2208:41\ninvokeNext@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:258:56\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:238:39\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\nfluid.promise.progressSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219:23\nfluid.promise.resumeSequence@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247:31\ncommitPotentiae@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2330:31\nfluid.tryCatch@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243:24\nfluid.commitPotentiae@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2315:15\nfluid.concludeAnyTreeTransaction@https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1430:19\nfire@https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1766:40\nfluid.prefs.prefsEditor.finishInit/<@https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:470:50\nfluid.promise.pushHandler@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:86:28\nfluid.promise/that.then@https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:33:27\nfluid.prefs.prefsEditor.finishInit@https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:469:22\nfluid.prefs.prefsEditor.init/<@https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:490:41\n" }
FluidIoC.js:1432:17
    concludeAnyTreeTransaction https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1432
    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1766
    finishInit https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:470
    pushHandler https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:86
    then https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:33
    finishInit https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:469
    init https://build-infusion.fluidproject.org/src/framework/preferences/js/PrefsEditor.js:490
```

        
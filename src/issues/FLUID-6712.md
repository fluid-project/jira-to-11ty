---json
{
  "title": "FLUID-6712",
  "summary": "Pager markup driven example is missing the fluid.contextAware dependency",
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
  "date": "2022-02-03T07:51:27.089-0500",
  "updated": "2022-02-09T09:51:35.348-0500",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:51:35.346-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
Pager requires the ContextAwareness.js

Steps to reproduce:

1. Open the [Markup Driven Pager example](https://build-infusion.fluidproject.org/examples/components/pager/markupdriven/)
2. Notice that page links do not work
3. If you look in the console you'll see the following error:

 

```java
Uncaught TypeError: fluid.contextAware is undefined    accumulateContextAwareGrades https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:687    computeDynamicGrades https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:731    computeComponentAccessor https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:784    mergeComponentOptions https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:2776    initComponentShell https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1688    operateCreatePotentia https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2077    commitPotentiaePhase https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2273    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2317    tryCatch https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2315    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2325    invokeNext https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:258    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:238    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2330    tryCatch https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2315    initFreeComponent https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:3011    creator https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:2293    initPager https://build-infusion.fluidproject.org/examples/components/pager/markupdriven/js/pager-example.js:36    <anonymous> https://build-infusion.fluidproject.org/examples/components/pager/markupdriven/:336FluidIoC.js:687:13    accumulateContextAwareGrades https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:687    computeDynamicGrades https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:731    computeComponentAccessor https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:784    mergeComponentOptions https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:2776    initComponentShell https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1688    operateCreatePotentia https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2077    commitPotentiaePhase https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2273    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2317    tryCatch https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2315    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2325    invokeNext https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:258    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:238    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:219    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:247    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2330    tryCatch https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:243    commitPotentiae https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2315    initFreeComponent https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:3011    creator https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:2293    initPager https://build-infusion.fluidproject.org/examples/components/pager/markupdriven/js/pager-example.js:36    <anonymous> https://build-infusion.fluidproject.org/examples/components/pager/markupdriven/:336​
```

        
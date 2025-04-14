---json
{
  "title": "FLUID-6766",
  "summary": "TTS selection reader doesn't work if button included in selection",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2023-04-19T09:12:27.636-0400",
  "updated": "2023-04-24T14:24:42.623-0400",
  "versions": [
    "4.6"
  ],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "FF 112.0.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2023-04-19T12:48:27.303-0400",
      "body": "I filed a related ticket against Firefox at <https://bugzilla.mozilla.org/show_bug.cgi?id=1828956>\n\nI also created a [Pen](https://codepen.io/jobara/pen/oNazJqZ) to illustrate the problem.\n"
    },
    {
      "author": "Daniel Cho",
      "date": "2023-04-24T14:24:42.623-0400",
      "body": "I confirmed that this is not happening on Windows 10 Pro using Edge (version 112.0.1722.58).\n"
    }
  ]
}
---
This appears to be a Firefox specific issue. 

This was initially found in The Accessibility Exchange which uses the Orator component from Infusion for its self voicing. See issue [#1633](https://github.com/accessibility-exchange/platform/issues/1633)

Steps to reproduce:

1. Using Firefox open the [Prefs Framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
2. Open UIO and enable the text-to-speech preference
3. Using the mouse make a selection of text that includes a button
   1. This could be the Page reader's play button or UIO's hide/show button
4. Press the play button
5. Notice the error 

 

Error:

```java
Uncaught TypeError: elm.tagName is undefined    hasTextToRead https://build-infusion.fluidproject.org/src/framework/core/js/TextNodeParser.js:81    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    parse https://build-infusion.fluidproject.org/src/framework/core/js/TextNodeParser.js:130    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    parseElement https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1047    parseRange https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1018    queueSpeech https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:957    invokeListener https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1583    togo https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1598    notifyExternal https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1325    concludeModelTransaction https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1365    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    commit https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2227    fireChangeRequest https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2180    change https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2046    apply https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2730    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    togglePlay https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1212    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    togo https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2855    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    createControl https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1168    jQuery 8    createControl https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1166    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    renderControl https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1179    invokeListener https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1583    togo https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1598    notifyExternal https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1325    concludeModelTransaction https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1365    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    commit https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2227    fireChangeRequest https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2180    change https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2046    setTextFromSelection https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:993    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    togo https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2855    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    bindSelectionEvents https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:967    jQuery 8    bindSelectionEvents https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:965    togo https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2855    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    concludeComponentInit https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:1538    localWorkflowTask https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2212    localWorkflowTask https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2211    invokeNext https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:257    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:237    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218    resumeSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:246    progressSequence https://build-infusion.fluidproject.org/src/framework/core/js/FluidPromises.js:218
```

        
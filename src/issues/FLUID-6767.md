---json
{
  "title": "FLUID-6767",
  "summary": "TTS selection reader doesn't work if an svg is included in selection",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2023-04-19T09:16:33.596-0400",
  "updated": "2023-04-19T13:45:09.444-0400",
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
      "date": "2023-04-19T13:45:09.444-0400",
      "body": "Looks like this might be the same issue as <https://fluidproject.atlassian.net/browse/FLUID-6766#icft=FLUID-6766> and be related to the Firefox issue [#1569211](https://bugzilla.mozilla.org/show_bug.cgi?id=1569211)\n"
    }
  ]
}
---
This appears to be a Firefox specific issue. 

This was initially found in The Accessibility Exchange which uses the Orator component from Infusion for its self voicing. See issue [#1633](https://github.com/accessibility-exchange/platform/issues/1633)

Steps to reproduce:

1. Using Firefox open the [Prefs Framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
2. Open UIO and enable the text-to-speech preference
3. Using the mouse make a selection of text that includes an SVG element
   1. For example the NOAA logo at the top left of the page
4. Notice the error 

 

Error:

```java
Uncaught TypeError: rangeRect is undefined    calculatePosition https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1122    invokeInvoker https://build-infusion.fluidproject.org/src/framework/core/js/FluidIoC.js:2787    renderControl https://build-infusion.fluidproject.org/src/components/orator/js/Orator.js:1177    invokeListener https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1583    togo https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1598    notifyExternal https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1325    concludeModelTransaction https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:1365    fire https://build-infusion.fluidproject.org/src/framework/core/js/Fluid.js:1713    commit https://build-infusion.fluidproject.org/src/framework/core/js/DataBinding.js:2227
```

        
---json
{
  "title": "FLUID-6733",
  "summary": "enhancer builds of UI Options require panels present to initiate",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-05-10T14:53:13.216-0400",
  "updated": "2022-05-10T14:53:13.216-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
With an "enhancer" buildType only an enhancer and store are generated. However, the auxBuilder still attempts to access the preference map for the panels. This will be okay if the panel definition is accessible, but that's likely not always the case. For example in UIO+ the custom preference panel components are not included with the enhancer as they operate in a different context. A work around is to set panel: null in the auxiliary schema. 

error:

AuxBuilder.js:319 Uncaught TypeError: Cannot read properties of undefined (reading 'preferenceMap')\
    at Object.fluid.prefs.expandSchemaComponents (AuxBuilder.js:319:44)\
    at AuxBuilder.js:555:29\
    at Object.fluid.each (Fluid.js:653:13)\
    at fluid.prefs.expandSchema (AuxBuilder.js:549:11)\
    at fluid.expander.invokeFunc (FluidIoC.js:3512:17)\
    at Object.fluid.expandExpander (FluidIoC.js:3417:12)\
    at Object.fluid.expandSource (FluidIoC.js:3263:26)\
    at Array.strategy (FluidIoC.js:3305:22)\
    at strategy (Fluid.js:2505:55)\
    at Array.\<anonymous> (FluidIoC.js:126:16)

Code: 

<https://github.com/fluid-project/infusion/blob/3760d835803711d7834f240e77ec9cc3b47af9fb/src/framework/preferences/js/AuxBuilder.js#L319>

        
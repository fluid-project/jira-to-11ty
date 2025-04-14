---json
{
  "title": "FLUID-6467",
  "summary": "Specification of null as a subcomponent value produces bare diagnostic",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-03-09T17:32:56.697-0400",
  "updated": "2021-06-21T11:36:54.844-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue only affects the in-progress FLUID-6148 branch.

A technique which used to peacefully succeed prior to the FLUID-5614 portion of FLUID-6148 was writing a placeholder value of `null` as a subcomponent value. This appeared, e.g. in the definition of the Nexus CoOccurrence Engine as so:

```java
fluid.defaults("fluid.nexus.coOccurrenceEngine", {
    gradeNames: ["fluid.component"],
...
    components: {
        componentRoot: null, // To be provided by integrators
```

This technique is no longer blessed, but at this point produces an unintelligible bare diagnostic as so:

```java
21:23:10.084:  FATAL ERROR: Uncaught exception: Cannot read property 'expander' of null
TypeError: Cannot read property 'expander' of null
    at Object.fluid.isInjectedComponentRecord (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1512:54)
    at Object.fluid.checkComponentRecord (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1676:20)
    at E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1689:19
    at fluid.mergingArray.forEach (<anonymous>)
    at Object.fluid.checkSubcomponentRecords (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1688:29)
    at E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1833:19
    at Object.fluid.each (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\Fluid.js:622:1
7)
    at Object.fluid.processComponentShell (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1832:15)
    at Object.fluid.operateCreatePotentia (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:1962:23)
    at Object.fluid.operateOneCreatePotentia (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:2135:28)
    at Object.fluid.commitPotentiaePhase (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:2162:27)
    at commitPotentiae (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:2203
:23)
    at Object.fluid.tryCatch (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\Fluid.js:245:24)
    at Object.fluid.commitPotentiae (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\FluidIoC.js:2201:15)
    at Object.fluid.initFreeComponent (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\Fluid.js:2942:28)
    at creator (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\Fluid.js:2233:26)
    at Object.fluid.invokeGlobalFunction (E:\source\gits\co-occurrence-engine\node_modules\infusion\src\framework\core\js\Fluid.js:1304:25)
```

Even if we decide not to bless this technique, this situation should be diagnosed with an intelligible failure explaining what record is in error.

In general the "new framework" needs to be supplied with a comparable density of fluid.pushActivityRecord tracing sites to the old one, that will enable a reasonable traceback of the framework's activity during a failure.

        
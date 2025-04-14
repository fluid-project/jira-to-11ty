---json
{
  "title": "FLUID-6193",
  "summary": "Options distribution with shorter-lived sibling as head causes bare failure on destruction of source",
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
  "date": "2017-09-05T18:52:47.172-0400",
  "updated": "2017-09-20T16:10:10.735-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-09-20T09:57:41.665-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/849) has been merged into the project repo master branch at 1fe914097336a552abeaf298e6175082e2d094dd\n"
    }
  ]
}
---
There's a fault in our bookkeeping of options distributions. The destruction of a target should clear out its entry in "shadow.outDistributions" but this doesn't account for the case where the head of the distribution source selector is shorter-lived than the actual distribution source component. The following configuration:

```javascript
fluid.defaults("gpii.flowManager.pcpChannel", {
    gradeNames: ["fluid.modelComponent"],
    distributeOptions: {
        target: "{lifecycleManager session}.options.modelRelay",
        record: {
            "pcpChannel": {
                "source": {
                    segs: []
                },
                "target": "{flowManager}.pcpChannel.model",
                "singleTransform": {
                    type: "fluid.transforms.identity"
                }
            }
        }
    }
```

will fail, in the sequence where first the lifecycleManager is destroyed, and then the pcpChannel. We get a failure in FluidIoC.js fluid.clearDistribution line 411:

```java
23:44:51.844:  FATAL ERROR: Uncaught exception: Cannot read property 'distributions' of null
TypeError: Cannot read property 'distributions' of null
    at Object.fluid.clearDistribution (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:411:37)
    at E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:421:19
    at Object.fluid.each (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:513:17)
    at Object.fluid.clearDistributions (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:420:15)
    at that.clearConcreteComponent (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1041:19)
    at Object.fluid.each (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:513:17)
    at that.clearComponent (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1087:23)
    at .destroy (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\FluidIoC.js:1234:26)
    at Object.fluid.test.noteTest (E:\Source\gits\gpii\node_modules\universal\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:613:18)
```

In this case, "targetHead" holds the lifecycleManager, which has been destroyed - and we are just in the process of destroying the pcpChannel, which has an "outDistributions" record which holds a reference to it.

        
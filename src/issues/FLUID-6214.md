---json
{
  "title": "FLUID-6214",
  "summary": "Create syntax and implementation for options distribution to refer to its source",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-10-17T17:38:32.133-0400",
  "updated": "2021-04-20T09:59:34.407-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6437/",
      "key": "FLUID-6437"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Gathering further experience on the space of features covered by <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258>, FLUID-5594, we find a crucial requirement is for options distributions material to be able to straightforwardly refer to the source component itself. Since <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258> was filed, we changed the behaviour to always resolve at target, so that at least we are spared the inconsistency between globally resolved and locally resolved material such as invoker and listener arguments. But repeatedly, when working on kinds of highly dynamic applications such as the visible nexus, the embrangler, etc. an annoyingly recurring pattern emerges where some "index" component needs to be advertised globally in order to be resolvable.

Here is the example from the visible nexus - <https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/server/js/VisibleNexus.js#L126>

And from embranglement, we finesse this requirement by making a cruder, less flexible system as well as using <https://fluidproject.atlassian.net/browse/FLUID-5903#icft=FLUID-5903> style recursive context expressions:

```java
fluid.defaults("fluid.embranglement.indexedDynamicComponent", {
    mergePolicy: { // Obviously this will be replaced by a FLUID-6214 scheme
        dynamicComponentIndex: "noexpand"
    },
    listeners: {
        "onCreate.indexComponent": {
            func: "{{that}.options.dynamicComponentIndex}.events.onIndexAdd",
            args: "{that}"
        },
        "onDestroy.indexComponent": {
            func: "{{that}.options.dynamicComponentIndex}.events.onIndexRemove",
            args: "{that}"
        }
    }
});
```

One possibility would be to introduce a special context {`distributionSource`} which resolves onto the component holding the distribution. But in practice, making this work is no easier than solving <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258>, because of the possibility of "local expansion". Whilst we have the capability to attach a "localRecord" to an entire component's options to record special contexts (as we do for dynamic components), we can't refine this enough to just hit material resulting from a single distribution. The solution to this seems to require full-scale provenance structures as alluded to in FLUID-4930 and FLUID-5594, which we're unlikely to be able to afford until some good time after FLUID-6148 is implemented - this structure will be a necessary auxiliary of the "shadow compiler" and is also unlikely to be affordable without it.

        
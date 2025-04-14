---json
{
  "title": "FLUID-6126",
  "summary": "Failure when using fluid.construct to construct component as direct child of root which is target of a distribution",
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
  "date": "2017-02-08T21:22:48.623-0500",
  "updated": "2017-02-09T10:33:02.708-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-02-09T10:32:59.464-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/808> has been merged into the project repo master branch at f830efb6c0d36e505e4372e24cd89939ab79959f\n"
    }
  ]
}
---
An annoying edge case creates a bad interaction between fluid.construct and fluid.computeDistributionPriority -> fluid.getMemberNames.

If there is a global distribution which is capable of hitting components which are directly attached to the root, e.g.&#x20;

```java
fluid.defaults("fluid.authoring.nexus.componentTracker", {
    gradeNames: ["fluid.component", "fluid.resolveRoot"],
    distributeOptions: {
        modelTracker: {
            record: "fluid.authoring.nexus.modelTracker",
            target: "{/ fluid.modelComponent}.options.gradeNames"
        }
    }
});
```

using fluid.construct, say, with a path of "sample-model-component-0" to construct a component directly attached to the root will trigger a failure&#x20;

```java
TypeError: Cannot read property 'id' of undefined
    at Object.fluid.getMemberNames (E:\\source\\gits\\fluid-authoring\\node_modules\\infusion\\src\\framework\\core\\js\\FluidIoC.js:87:73)
```

since we don't handle the case where the path stack is empty. fluid.getMemberNames is pretty suspect anyway and has been ripe for fencepost errors for many years:

```java
fluid.getMemberNames = function (instantiator, thatStack) {
        var path = instantiator.idToPath(thatStack[thatStack.length - 1].id);
        var segs = instantiator.parseEL(path);
            // TODO: we should now have no longer shortness in the stack
        segs.unshift.apply(segs, fluid.generate(thatStack.length - segs.length, ""));

        return segs;
    };
```

        
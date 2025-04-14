---json
{
  "title": "FLUID-6406",
  "summary": "Workflow scheduling algorithm allows an early block of instantiating components to run ahead of successors",
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
  "date": "2019-10-03T18:05:41.645-0400",
  "updated": "2024-07-22T10:35:31.322-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue only affects the FLUID-6148 in-progress branch.\
The original version of the workflow scheduling algorithm, codenamed "ModelComponentQix" did not satisfy the original goals of always proceeding with the workflow of the least advanced component in the instantiating set. \
This was discovered when attempting to reform the GPII app's dialog instantiation workflow by means of an "intermediate dodge" of a lensed component defined purely to hoist the instantiation of the electron BrowserWindow until after model resolution, since its instantiation parameters depended on some model material. \
In outline we had:

```java
fluid.defaults("gpii.app.dialog", {
....
    dynamicComponents: {
        // Resolution for GPII-4147 to defer construction of the dialog until the component's model has been resolved
        dialogLoader: {
            type: "fluid.modelComponent",
            source: "{that}.model",
....
        },
    members: {
        dialog: "{that}.dialogLoader.dialog"
    }
}
```

In theory we should be able to guarantee that in the absence of an observer, evaluation of the shorthand member "dialog" (and any other similar late option observer) could not run ahead of the component. In practice, the algorithm, which we originally named "ModelComponentQix" would stubbornly progress the instantiation of an earlier workflow block even after a the group of "dialogLoader" lensed components had been contributed into the transaction record, by the original implementation

```java
fluid.applyWorkflowPhase = function (transRec, sequencer) {
        var shadows = transRec.outputShadows;
        // Bring any freshly created shadows to the same level as the most currently advanced
        if (shadows.length > transRec.lastWorkflowShadow && transRec.maximumWorkflowStage > 0) {
            return fluid.enqueueWorkflowBlock(transRec, shadows, 0, transRec.maximumWorkflowStage,
                transRec.lastWorkflowShadow, shadows.length, sequencer);
        } else if (transRec.maximumWorkflowStage < transRec.workflowStageBreak) {
            // They must all be level - bring the level of all shadows to final level
            return fluid.enqueueWorkflowBlock(transRec, shadows, transRec.maximumWorkflowStage, transRec.workflowStageBreak,
                0, shadows.length, sequencer);
        }
    };
```

The error is in the first branch, which always enqueues a early block up to the maximum workflow stage. Correctly, it should only enqueue a single strip at the next workflow stage, to ensure that they run ahead of freshly enqueued components to the smallest extent.

        
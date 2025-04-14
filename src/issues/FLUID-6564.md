---json
{
  "title": "FLUID-6564",
  "summary": "Failure when nested modelComponents are created during onCreate",
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
  "date": "2020-10-27T08:46:47.251-0400",
  "updated": "2021-06-21T11:30:03.976-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-10-27T09:32:33.916-0400",
      "body": "Note that the odd compound condition in fluid.commitPotentiae is exercised by a test highly similar to the one we need to write, with a comment referring to <https://fluidproject.atlassian.net/browse/FLUID-6410#icft=FLUID-6410> which shows a different pathological behaviour resulting from the pernicious creation of components during an \"onCreate\"\n"
    }
  ]
}
---
This bug only affects the in-progress FLUID-6148/FLUID-6145 branch of the framework.

In fixing a test case for the rewritten Table of Contents component using the new renderer, the following construct caused an error:

```java
/**
     * #FLUID-5110: refreshView updates headings
     */
    jqUnit.asyncTest("Component test refreshView", function () {
        fluid.tableOfContents("#flc-toc-refreshHeadings", {
            listeners: {
                "onCreate.initialState": {
                    listener: function (that) {
....
                        that.container.append("<h2>test</h2>");
                        that.resourceFetcher.refetchOneResource("documentHeadingsSource");
                    }
                }
            }
        });
    });
```

The call to "refetchOneResource" triggers the construction of further lensed components corresponding to the markup freshly added to the page, i.e. from

```java
fluid.defaults("fluid.tableOfContents.withLevels", {
        gradeNames: ["fluid.newRendererComponent", "fluid.resourceLoader"],
        dynamicComponents: {
            levels: {
                sources: "{that}.model.headings",
                type: "fluid.tableOfContents.level",
                container: "{that}.dom.level",
                options: {
                    model: "{source}"
                }
            }
        },
```

and

```java
fluid.defaults("fluid.tableOfContents.level", {
        gradeNames: "fluid.tableOfContents.withLevels",
....
        dynamicComponents: {
            link: {
                type: "fluid.uiLink",
....
            }
        }
    });
```

This exposes an error in the "ModelComponentQix" in a similar way to that reported in FLUID-6406. The failure received is in fluid.enlistModelComponent for the nested link subcomponent -&#x20;

```java
fluid.enlistModelComponent = function (that) {
        var initModelTransaction = fluid.currentTreeTransaction().initModelTransaction;
        var enlist = initModelTransaction[that.id];
```

On the first line, we find that no model transaction is in progress. This is because of a fault in the implementation of fluid.applyWorkflowPhase which currently reads:

```java
fluid.applyWorkflowPhase = function (transRec, sequencer) {
        var shadows = transRec.outputShadows;
        // Bring any freshly created shadows to the same level as the most currently advanced
        if (shadows.length > transRec.lastWorkflowShadow && transRec.maximumWorkflowStage > 0) {
            fluid.enqueueWorkflowBlock(transRec, shadows, 0, transRec.maximumWorkflowStage,
                transRec.lastWorkflowShadow, shadows.length, sequencer);
            return true;
        } else if (transRec.maximumWorkflowStage < transRec.workflowStageBreak) {
            // They must all be level - bring the level of all shadows to final level
            for (var workflowStage = transRec.maximumWorkflowStage; workflowStage < transRec.workflowStageBreak; ++workflowStage) {
                var workQueued = fluid.enqueueWorkflowBlock(transRec, shadows, workflowStage, workflowStage + 1,
                    0, shadows.length, sequencer);
                if (workQueued) {
                    return workQueued;
                }
            }
        }
    };
```

The error is in the assumption of the first block - that any freshly created shadows can be brought to the level of the most advanced. In this case, since we are still within "onCreate", the existing transaction has not yet concluded, and we have a whole collection of components which have reached the final workflow stage (in this configuration, numbered 8).&#x20;

We receive the construction of the "level" component as a fresh potentia, but it is not appropriate to bring it to the same level 7 as the rest of the transaction in one step because of its own potential to lens further components into existence at workflow stages 0 and 3. For reference, the current workflow cache looks as follows:

```java
fluid.workflowCacheSorted: Array(8)
0: {namespace: "enlistModel", workflowType: "global", workflowName: "enlistModel", gradeName: "fluid.modelComponent", workflowOptions: {...}, ...}
1: {namespace: "fetchTemplates", workflowType: "global", workflowName: "fetchTemplates", priority: {...}, gradeName: "fluid.templateResourceFetcher", ...}
2: {namespace: "renderMarkup", workflowType: "global", workflowName: "renderMarkup", priority: {...}, gradeName: "fluid.newRendererComponent", ...}
3: {namespace: "resolveResourceModel", workflowType: "global", workflowName: "resolveResourceModel", priority: {...}, gradeName: "fluid.modelComponent", ...}
4: {namespace: "evaluateContainers", workflowType: "global", workflowName: "evaluateContainers", priority: {...}, gradeName: "fluid.containerRenderingView", ...}
5: {namespace: "concludeComponentObservation", workflowType: "local", workflowName: "concludeComponentObservation", priority: {...}, gradeName: "fluid.component", ...}
6: {namespace: "notifyInitModelWorkflow", workflowType: "local", workflowName: "notifyInitModelWorkflow", priority: {...}, gradeName: "fluid.modelComponent", ...}
7: {namespace: "concludeComponentInit", workflowType: "local", workflowName: "concludeComponentInit", priority: {...}, gradeName: "fluid.component", ...}
length: 8
```

Why did we implement fluid.applyWorkflowPhase in this way? It is to simplify its record-keeping in order to consider that the workflow progress at any point can be described by two numbers, the width of an initial single "step" and its height. In this way we avoid complex dynamic allocations to track the workflow progress or expensive scans of progress to find the next work item.

However, the fact that components may be created at stage 7 and then cascade down to further creations and lower stages shows that this simple "Qix" geometry is inadequate. We have a couple of ways out -&#x20;

i) Discard the entire transaction at the end of a block of onCreate and start a fresh one - pretty distasteful and will create a lot of upheaval in what is now moderately settled code.\
ii) Go towards a more complex "chain of blocks" representation of Qix progress\
iii) Special-case this situation and add a further integer to Qix tracking which creates a "horizon" ignoring components which have reached concludeComponentInit, and reset lastWorkflowShadow to 0. This is a kind of "lite" version of option i).&#x20;

Note that we are already special-casing components reaching concludeComponentInit by means of this signalling from fluid.enqueueWorkflowBlock:

```java
if (workflowRecord.namespace === "concludeComponentInit") {
                            sequencer.hasStartedConcludeInit = true;
                        }
```

This signalling reaches fluid.commitPotentiae and becomes a further case in which a fresh "sequencer" should be constructed:

```java
if (!topSequencer || topSequencer.hasStartedConcludeInit || topSequencer.promise.disposition) {
            sequencer = fluid.promise.makeSequencer([], {}, fluid.promise.makeSequenceStrategy());
            sequencer.promise.sequencer = sequencer; // So we can reference it from the stack of sources
            rootSequencer.sources.push(sequencer.promise);
        }
```

Presumably the thinking here is that if we have once "started" to issue concludeComponentInit, the top sequencer is going to receive resolution by the time the stack frame returns. It seems that we should, as usual, somewhat abandon the pretence that this is a general-purpose algorithm, although its structure seems to peculiarly recur throughout the design of the system.

In a side note, the huge garbage and stack noise we see amongst these sequencers suggest that we should abandon the use of promises in favour of a "heap o' records" approach. It's unclear that async/await will help with this because these constructs intrinsically appeal to the creation and destruction of promises.

        
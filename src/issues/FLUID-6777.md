---json
{
  "title": "FLUID-6777",
  "summary": "Entire transaction is abandoned if fluid.construct is called from asynchronous resource model workflow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2024-01-11T06:25:12.098-0500",
  "updated": "2024-01-11T07:04:17.460-0500",
  "versions": [
    "4.6"
  ],
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
If component construction is deferred by means of new-style resource model promises, and there is then a direct call to fluid.construct, the entire transaction will be corruptly abandoned in fluid.commitPotentiae. Example was&#x20;

```javascript
fluid.defaults("maxwell.scrollyPage", {
...
    resources: {
        plotlyReady: {
            promiseFunc: "maxwell.HTMLWidgetsPostRender"
        }
    },
    model: {
        plotlyReady: "{that}.resources.plotlyReady.parsed"
    },
...
    members: {
        leafletWidgets: "@expand:maxwell.mapLeafletWidgets({that}, {that}.dom.leafletWidgets, {that}.map.map)",
...
```

with&#x20;

```javascript
// Convert the HTMLWidgets postRenderHandler into a promise
maxwell.HTMLWidgetsPostRender = function () {
    const togo = fluid.promise();
    if (HTMLWidgets.addPostRenderHandler) {
        HTMLWidgets.addPostRenderHandler(function () {
            togo.resolve(true);
        });
    } else {
        togo.resolve(true);
    }
    return togo;
};
```

when we get to maxwell.mapLeafletWidgets via concludeComponentObservation, this call to fluid.construct

```
maxwell.leafletWidgetToPane = function (scrollyPage, map, widget, index) {
    widget.paneHandlerName = widget.data ? widget.data.x?.options?.mx_mapId : maxwell.decodeNonLeafletHandler(widget);
    let paneHandler = widget.paneHandlerName && maxwell.paneHandlerForName(scrollyPage, widget.paneHandlerName);
    if (!paneHandler) {
        // Automatically construct a default scrollyPaneHandler to deal with simple non-interactive vignettes
        const new_id = "auto-paneHandler-" + index;
        widget.paneHandlerName = new_id;
        const options = {
            type: "maxwell.scrollyPaneHandler",
            paneKey: new_id
        };
        paneHandler = fluid.construct([...fluid.pathForComponent(scrollyPage), new_id], options);
    }
```

goes via fluid.commitPotentiae

```javascript
fluid.commitPotentiae = function (transactionId, resumeSequencer) {
    var instantiator = fluid.globalInstantiator;
    var transRec = instantiator.treeTransactions[transactionId];
    ++transRec.commitDepth;
    var lastWorkflowShadow = transRec.lastWorkflowShadow;
    var rootSequencer = transRec.rootSequencer;
    var sequencer = resumeSequencer;
 .....
    --transRec.commitDepth;
    if (transRec.commitDepth === 0 && !resumeSequencer) {
        instantiator.currentTreeTransactionId = null;
    }
    return transRec.outputShadows[lastWorkflowShadow];
};
```

Unfortunately at the start of this call transRec.commitDepth is 0 since we do not guard the execution of each individual workflow task within fluid.enqueueWorkflowBlock - This looks like

```
fluid.enqueueWorkflowBlock = function (transRec, shadows, workflowStart, workflowEnd, blockStart, blockEnd, sequencer) {
    var workQueued = false;
    var instantiator = fluid.globalInstantiator;
    var resumeCurrentTransaction = function () {
        instantiator.currentTreeTransactionId = transRec.transactionId;
    };
...
                var localWorkflowTask = function () {
                    resumeCurrentTransaction();
                    if (workflowRecord.namespace === "concludeComponentInit") {
                        sequencer.hasStartedConcludeInit = true;
                    }
                    workflowShadows.forEach(function (shadow) {
                        workflowFunc(shadow, transRec);
                    });
                };
```

Note that there is a call to resumeCurrentTransaction when starting the entirety of localWorkflowTask but this should probably push 1 onto commitDepth as it starts to execute and pop it off again at the end.

        
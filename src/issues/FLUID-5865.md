---json
{
  "title": "FLUID-5865",
  "summary": "Model relay rules should respond to priority directives",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-02-18T23:37:46.439-0500",
  "updated": "2017-03-11T22:27:46.365-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-19T07:36:09.373-0500",
      "body": "The discussion above isn't enough to resolve all the problems here. We also need some new ways of encoding changes delivered as transactions. In order to deliver the full user experience above, we need to be able to issue the following update as a transactional unit -&#x20;\n\ni) change the value of \"step\" to its new value\\\nii) update all the other coordinates such that the real coordinate that the mouse's current \"x\" position is hovering over stays the same\n\nIt seems unlikely that we'll be in a position to encode the above in any way other than writing a dedicated function to issue \"change\" requests to enact it - the problem currently is even worse in that we can't even express the constraints above as relay rules because of lack of priority control - and also our current idiom for demarking transactions is very cumbersome. Here's the current code managing this:\n\n```javascript\n// a manual model transducer - reacts to changes in chaundleModel's position or dataRange\r\nsouq.chaundles.chaundleToScrollbar = function (scrollbarThat, chaundleThat) {\r\n    var chaundleModel = chaundleThat.model;\r\n    var dataRange = chaundleModel.dataRange;\r\n    var newModel;\r\n    if (!dataRange) {\r\n        newModel = {\r\n            enabled: false\r\n        };\r\n    } else {\r\n        var totalRange = (dataRange.end - dataRange.start) / dataRange.step;\r\n        newModel = {\r\n            enabled: true,\r\n            position: chaundleModel.position,\r\n            range: totalRange,\r\n            lastPosition: totalRange - chaundleModel.screenChaundles, // TODO: blasted PARSER! // TODO why not MINUS ONE!\r\n            thumbSize: chaundleModel.screenChaundles\r\n        };\r\n    }\r\n    scrollbarThat.applier.change(\"\", newModel); // TODO: new \"MERGE\" type coming?\r\n};\r\n\r\n\r\n// Awkward problem - this can't be a relay rule because we can't have it autoinvalidate - a\r\n// relay rule can't depend on any model state in a non-live way! Serious problem with our idiom here.\r\nsouq.chaundles.positionToVis = function (that) {\r\n    var dataRange = that.model.dataRange,\r\n        position = that.model.position;\r\n    // that.model.position holds scrollbar's index, which is between 0 and dataRange width / step\r\n    if (!dataRange || !dataRange.start) {\r\n        return;\r\n    }\r\n    var visStart = dataRange.start + position * dataRange.step;\r\n    var visWindow = {\r\n        start: visStart,\r\n        end: visStart + dataRange.step * that.model.screenChaundles,\r\n        step: dataRange.step\r\n    };\r\n    that.visWindow = visWindow;\r\n};\r\n\r\n// Called on update of grain to recentre new scrollbar position on old view\r\nsouq.rescalePosition = function (that) {\r\n    if (that.visWindow) {\r\n        var dataRange = that.model.dataRange;\r\n        console.log(\"rescalePosition - current step \" + dataRange.step + \" initial position \" + that.model.position);\r\n        var midpoint = souq.getWindowMidpoint(that.visWindow);\r\n        var newStart = midpoint - dataRange.step * that.model.screenChaundles / 2;\r\n        var newPosition = (newStart - dataRange.start) / dataRange.step;\r\n        that.applier.change(\"position\", newPosition);\r\n        console.log(\"rescalePosition got midpoint \" + midpoint + \" new position \" + newPosition);\r\n    }\r\n};\n```\n\nwhere \"rescalePosition\" ends up being notified by the following sequence:&#x20;\n\n```java\nsouq.graph.participantZoom = function (that, grainThat, zoomDelta) {\r\n    console.log(\"participant Zoom delta \" + zoomDelta);\r\n    var newIndex = grainThat.model.grainIndex + zoomDelta;\r\n    grainThat.applier.change(\"grainIndex\", newIndex);\r\n};\n```\n\nthe \"grainIndex\" update eventually feeds through to an update of \"dataRange.step\" which invokes the above:\n\n```javascript\nmodelListeners: {\r\n        \"\": [{ // Terrible - we need to break this out in terms of the things that we really want to react to\r\n            func: \"{that}.events.onRefreshView.fire\",\r\n            args: [\"{that}\"],\r\n            priority: souq.priorities.repaint\r\n        }, {\r\n            funcName: \"souq.chaundles.visToTileManager\",\r\n            args: [\"{that}\"],\r\n            priority: souq.priorities.fetchTile\r\n        }, { // TODO: This should really only react to the things that scrollbar does, but we can't be bothered to write it out - so it self-reacts for one cycle\r\n            funcName: \"souq.chaundles.positionToVis\",\r\n            args: [\"{that}\"],\r\n            priority: souq.priorities.computeVis\r\n        }],\r\n        \"dataRange.step\": {\r\n            funcName: \"souq.rescalePosition\",\r\n            args: [\"{that}\", \"{that}.model\"],\r\n            priority: souq.priorities.updateGrain\r\n        }\n```\n\nand finally the scrollbar subcomponent definition itself:\n\n```javascript\n// TODO: Move this whole component and its relay rules out to top level\r\n        scrollbar: {\r\n            type: \"souq.scrollbar\",\r\n            options: {\r\n                // problem here! position reacts immediately on change, but chaundleToScrollbar gets to act on a \"grain\" change immediately. We\r\n                // REALLY want these to form a transaction.\r\n                modelListeners: {\r\n                    \"{chaundles}.model.dataRange\": {\r\n                        funcName: \"souq.chaundles.chaundleToScrollbar\",\r\n                        args: [\"{that}\", \"{chaundles}\"],\r\n                        priority: souq.priorities.updateScroll\r\n                    },\r\n                    \"{chaundles}.model.position\": { // TODO: comma syntax in paths\r\n                        funcName: \"souq.chaundles.chaundleToScrollbar\",\r\n                        args: [\"{that}\", \"{chaundles}\"],\r\n                        priority: souq.priorities.updateScroll\r\n                    },\r\n                    \"position\": {\r\n                        changePath: \"{chaundles}.model.position\",\r\n                        value: \"{that}.model.position\"\r\n                    }\r\n                }\n```\n\nNote the use of pre-FLUID-5695 style priorities to control repaint vs invalidation model listeners.\n\nWe need to ensure the following:\\\n1\\) The entire update triggered by zoom should trigger as a single transaction.\\\n2\\) We must be able to express \"positionToVis\" as a relay rule\n\nWe need to recover what exactly is being referred to in the comment \"autoinvalidate - a relay rule can't depend on any model state in a non-live way\" but it is believed that this would be solved by having a priority order between relay rules. The issue is that the function body issues a read of \"dataRange\" and \"position\" manually. If this was a relay rule, the reference to \"position\", \"dataRange\" and its \"step\" would be part of its relay specification, and so it could never observe a configuration which hadn't attempted to update the scrollbar-mediated relationships between these.\n"
    }
  ]
}
---
When the model relay system was designed, it was considered adequate that relay rules would flood the skeleton in a purely data-driven way, and that to arbitrate between them would just lead to confusion - and a lack of well-definedness in the final stabilised skeleton state.

However, after FLUID-5361 and more experience, it's clear that this is actually exactly what is required, and it is in fact essential in order to **ensure** that the skeleton can settle to the user-defined state. The disorderliness of dataflow systems when there are multiple valid arcs along which updates can flow is well-known (for example, in user environments such as Quartz Composer, where relative dataflow order cannot be controlled), and since our priority system is now so mature and so well-understood, it is a reasonable economy to extend it to relay rules as well as all the other artefacts to which it applies (model listeners, distributions, context awareness rules, etc.)

Here is the motivating use case. A user component showing a graph has a "viewport", which for the sake of simplicity we will only consider the x-axis component of. This has various model coordinates associated with it, with various constraints:

```java
model: {
        dataRange: {
            step: // interval between data points in ms
            start: // start of available data in ms
        visWindow: {
            start: // start of visible window in ms
            end: // end of visible window in ms
            step: // interval between drawn points in ms
         },
         midPoint: // the midpoint of visWindow in ms
         screenChaundles: // count of data points that will fit into the visible window
         range: // The number of data points available
         position: // scrollbar position - has range from 0 to range - screenChaundles 
    }
```

We have the following constraints:

```java
midpoint = (visWindow.start + visWindow.end) / 2;
range = (dataRange.end - dataRange.start) / dataRange.step;
position = (visWindow.start - dataRange.start) / dataRange.step;
visWindow.step = dataRange.step;
visWindow.end = visWindow.start + visWindow.step * screenChaundles;
```

Now - as a UI action, when the user zooms in or out of the window, we need to maintain the constraint that the value of "midPoint" (or more ambitiously, any chosen real coordinate, for example, the one that the mouse x position identifies) should remain fixed during the zoom. Now, the zoom is actually "honoured" by making a change to the value of one of the "step" entries. But how is the system to determine which of the constraints which get invalidated by this is to be restored first? Choosing the final, visWindow, constraint, will not only produce the wrong result (for example, by causing the window start or end position to be maintained rather than the midpoint) but will also sufficiently pollute the pool of state that the desired configuration could never be recovered.

This implies that we need to be able to signal that, for example, the system is to react to a change in "step" in the first instance with a definitely chosen rule rather than picking a constraint in which the value appears at random. In this case, the "midpoint" rule would result in a custom propagation based on inverting some of the above constraints:

```java
visWindow.start = midpoint - dataRange.step * screenChaundles / 2;
```

After we have successfully updated one determining element in the cooperating set, flooding propagation from this site will inevitably lead to the right result. Without the power to specify that this rule must take priority over all those in which "step" appears when processing an update, we can't ensure that the user receives the correct final model state.

        
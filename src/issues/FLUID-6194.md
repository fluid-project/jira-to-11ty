---json
{
  "title": "FLUID-6194",
  "summary": "Model relay will relay deletes even if transform is not invertible",
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
  "date": "2017-09-15T15:51:23.907-0400",
  "updated": "2017-09-28T11:39:13.979-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-09-28T11:39:09.797-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/851) has been merged into the project repo master branch at 5dd8f82d9237174336c23e9c88c09fdebeab3003\n"
    }
  ]
}
---
The FLUID-5585 behaviour for relaying deletes through relays has been incorrectly implemented. In the case where the transform has no inverse, or the relay rule should otherwise not operate backwards, the deletion clearing will nonetheless be relayed back through the rule, trashing the model at the other end.

The PCP channel work for GPII-2556 in <https://github.com/GPII/universal/pull/549> included the following rule:

```java
// A mixin grade applied to the lifecycleManager's session by the pcpChannel
fluid.defaults("gpii.flowManager.pcpChannel.sessionBinder", {
    modelRelay: {
        pcpChannel: {
            source: { // Not "" because of FLUID-6192
                segs: []
            },
            target: "{flowManager}.pcpChannel.model",
            singleTransform: {
                type: "gpii.flowManager.pcpChannel.sessionToPCP",
                ontologyMetadata: "{ontologyHandler}.ontologyMetadata"
            }
        }
    },
```

No inverse is written for the `sessionToPCP` function so the relay should not operate backwards. However, when a DELETE is triggered at the PCP's end via

```java
gpii.flowManager.pcpChannel.sessionStop = function (pcpChannel) {
    pcpChannel.applier.change("", null, "DELETE");
};
```

the following code in DataBinding.js is triggered:

```java
// TODO: This rather crummy function is the only site with a hard use of "path" as String
    fluid.transformToAdapter = function (transform, targetPath) {
        var basedTransform = {};
        basedTransform[targetPath] = transform; // TODO: Faulty with respect to escaping rules
        return function (trans, newValue, sourceSegs, targetSegs, changeRequest) {
            if (changeRequest && changeRequest.type === "DELETE") {
                trans.fireChangeRequest({type: "DELETE", path: targetPath}); // avoid mouse droppings in target document for FLUID-5585
            }
            // TODO: More efficient model that can only run invalidated portion of transform (need to access changeMap of source transaction)
            fluid.model.transformWithRules(newValue, basedTransform, {finalApplier: trans});
        };
    };
```

This exposes the fact that the generation of the "backward" adaptor is pretty clumsy in its ability to determine when a rule is invertible. It accepts any old rubbish from fluid.model.transform.invertConfiguration which doesn't usefully signal whether it has inverted anything or not.

```java
if (sourcePath !== null) {
                that.backwardHolder.model = fluid.model.transform.invertConfiguration(transform);
                that.backwardAdapterImpl = fluid.transformToAdapter(that.backwardHolder.model, sourcePath);
            }
```

The reliance on "sourcePath" is a bit peculiar. Presumably this excludes "self-sufficient" transforms which source all material from within the transform from being inverted.

        
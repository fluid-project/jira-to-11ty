---json
{
  "title": "FLUID-5869",
  "summary": "Error when reconstructing model relay component during existing transaction",
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
  "date": "2016-02-24T21:12:38.010-0500",
  "updated": "2017-03-11T22:19:57.638-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-24T21:14:15.276-0500",
      "body": "The \"quick fix\" for the headline issue is to wrap the body of \"gpii.firstDiscovery.panel.keyboard.relayEvents\" in a \"fluid.invokeLater\" block. Ensuring that the existing model transaction is completely finished before we attempt to interact with the model again is the most direct way of heading off the problem of \"self-reaction\". Note that many popular reactive frameworks, e.g. Facebook's \"react\", prohibit synchronous bidirectional dataflow precisely for this reason.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-24T21:54:07.760-0500",
      "body": "Investigation of the exact cause of the \"corrupt\" material shows that it consists of the \"init\" model of the root \"fluid.prefs.prefsEditor\". This always contains an entry of \"gpii\\_firstDiscovery\\_stickyKeys: false\", and WHENEVER this component is \"caught up\" in an init transaction (which it will be, whenever any component to which it is joined by relay goes through init - for example, one of the createOnInit \"keyboardInput\" components described in the headline JIRA), this value will be replayed through it. This is relevant, because THIS is the change that links together the two faulty recursive firings of \"gpii.firstDiscovery.panel.keyboard.relayEvents\". The first construction of the keyboardInput causes this change to be relayed into the root model which triggers a further refresh, triggering a fresh reconstruction of the keyboardInput component.\n\nAnother route for this is from the \"init\" transaction of the parent component \"gpii.firstDiscovery.panel.keyboard\" which also holds \"stickyKeysEnabled: false\" for much the same reason. This component isn't itself being reconstructed, but its init model will be replayed whenever it is connected to a component which is.\n\nThis issue hasn't surfaced so clearly before since we have not tested \"reset\" in such a complex context. In this case, the \"undefined\" value of the root model causes numerous links to operate in reverse which normally only operate forwards - as a result of the rule that \"any value takes precedence over undefined\".\n\nAnother form of \"quick fix\" might be to remove any component from an init transaction list when it is destroyed - which is only reasonable after all.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-25T15:49:31.176-0500",
      "body": "It looks like a \"quick fix\" is even more direct than might have been thought - simply guarding the offending access to the shadow is good enough to allow the relay to finish without error. Actively deregistering the component seems problematic in any case since the collection of transaction records is itself being iterated over at the point the component is destroyed.\n"
    }
  ]
}
---
A complex scenario arising during implementation of the First Discovery preferences editor for PGA triggered an obnoxious bare diagnostic from the framework - within     fluid.operateInitialTransaction , the line reading&#x20;

```javascript
shadow.modelComplete = true; // technically this is a little early, but this flag is only read in fluid.connectModelRelay
```

produces a null reference error as the component "keyboardInput" has no shadow - since it has already been destroyed.

Factors contributing to this failure are the following - firstly, "keyboardInput" is a createOnEvent component with the following definition&#x20;

```javascript
fluid.defaults("gpii.firstDiscovery.panel.keyboard", {
        gradeNames: ["fluid.prefs.panel"],
...
        components: {
            keyboardInput: {
                type: "gpii.firstDiscovery.keyboardInput",
                createOnEvent: "onInitInput",
                container: "{that}.dom.input",
                options: {
                    model: {
                        userInput: "{keyboard}.model.userInput",
                        stickyKeysEnabled: "{keyboard}.model.stickyKeysEnabled"
                    },
                    messageBase: "{keyboard}.options.messageBase"
                }
            },
        listeners: {
            "afterRender.relayEvents": {
                funcName: "gpii.firstDiscovery.panel.keyboard.relayEvents",
                args: ["{that}"]
            },
    }
```

is fired by the following definition:

```javascript
gpii.firstDiscovery.panel.keyboard.relayEvents = function (that) {
        var offerAssistance = that.model.offerAssistance;
        if (offerAssistance !== false) {
            that.events.onInitInput.fire();
            if (offerAssistance) {
                that.events.onOfferAssistance.fire();
            }
        }
    };
```

The problem here is that the construction of the keyboardInput component, by virtue of setting up a fresh model relay and init transaction, is capable of "self-reacting" with respect to this definition - triggering a change to the model and refreshView call, whilst still on the same event stack as the original model change (and, by extension, the init transaction associated with the PREVIOUS instance of the keyboardInput component). This creates complete chaos with our current model, that assumes that only one init transaction can be in progress across the component tree at a given moment (clearly a faulty assumption, but one of the few reasonable ones under the "old ginger" model where a fresh participant in the transaction could be discovered at any time). Inspection of "modelTransactions" shows a huge number of transaction elements in progress at the same moment, including participants of both the old and new instance of "keyboardInput".

Removing the "stickyKeysEnabled: "{keyboard}.model.stickyKeysEnabled"" definition seems to make no difference to the outcome.

This is a case which, under the current model relay implementation, we have little choice but to consider in error, and just issue the best diagnostic as early as we can. Until we have the global reimplementation coming as part of FLUID-4982, we can't do much better. In that world, at least we can expect to have multiple, non-interfering init transactions. However, the more fundamental issue here is the lack of implementation feature "lensing components into existence" envisioned as the final implementation stage of the "new renderer". The problem is that the action of the system "hops out" of the model transaction and then attempt to "hop back" in again as a result of listening to the refreshView action triggered by it. Clearly all of this activity really **is** part of the same transaction and there should be a way of expressing it so it is so. The FLUID-5865 work will bring this one step closer, but until we have a relay equivalent of the "createOnEvent" directive the gap will remain unbridgeable.&#x20;

        
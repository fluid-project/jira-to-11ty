---json
{
  "title": "FLUID-6211",
  "summary": "Implement \"vertical transactions\", supporting in-band notification of transaction demarcation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-10-04T19:43:21.502-0400",
  "updated": "2017-10-04T19:44:51.723-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5373/",
      "key": "FLUID-5373"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6209/",
      "key": "FLUID-6209",
      "summary": "Model changes from multiple sources that affect each other can result in race conditions to set the model value."
    }
  ],
  "attachments": [],
  "comments": []
}
---
This feature has been conceived and written up for a while (it is described fairly clearly in the 2015 [New New Notes on the ChangeApplier](https://wiki.fluidproject.org/display/fluid/New+New+Notes+on+the+ChangeApplier) in the section "simplified and more appropriate transaction semantics) but recent work has made this feature seem more urgent than before.

In work on <https://issues.gpii.net/browse/GPII-2556> at <https://github.com/GPII/universal/pull/549> the need for more manifest transactions came to the fore. The consumers of the PCP API requested that the system produce just a single change message in response to the user's context change action - but the architecture of the core GPII and the ChangeApplier combined to make this quite difficult.

The existing (2014) ChangeApplier does include a facility for transactional updates, but it is cumbersome and unmanifest - in the vocabulary of our [2016 PPIG paper](https://github.com/amb26/papers/tree/master/ppig-2016a) it exhibits "high divergence" by being geared to in-memory object references (the "transaction object" dispensed by the `initiate` function). It is also intrusive - whilst the transaction object satisfies the same (programmatic) API as the top-level ChangeApplier it is not possible to retrofit code which is not transactional without rewriting it - violating a core goal of the framework.

We got out of this problem by writing a lot of highly disagreeable, state-laden and fragile code. For example, the "blockage" of an outgoing stream of change requests was encoded by a "self-destructing promise" attached to the component - see

<https://github.com/amb26/universal/blob/13a8f45683f88c6cf5ae6ff68f3eee8dff5cbc05/gpii/node_modules/flowManager/src/PCPChannel.js#L75> - with the implementation

```java
gpii.pcpChannel.updateContext = function (contextManager, pcpChannel, newContext) {
    fluid.log("Received context update from PCP UI of ", newContext);
    // Abominable hack to avoid confusing client with numerous update messages. The ChangeApplier should really support
    // "manifest transactions" / "vertical transactions"
    pcpChannel.outputBlocked = fluid.promise();
    var clearBlock = function () {
        delete pcpChannel.outputBlocked;
    };
    pcpChannel.outputBlocked.then(clearBlock, clearBlock);
    pcpChannel.applier.change([], null, "DELETE");
    var promise = contextManager.contextChanged(newContext);
    if (promise) {
        fluid.promise.follow(promise, pcpChannel.outputBlocked);
    } else {
        pcpChannel.outputBlocked.resolve();
    }
};
```

and then further down at <https://github.com/amb26/universal/blob/13a8f45683f88c6cf5ae6ff68f3eee8dff5cbc05/gpii/node_modules/flowManager/src/PCPChannel.js#L146> we have

```java
gpii.pcpChannel.modelChangeListener = function (handler, pcpChannel, value, oldValue, path, transaction) {
    console.log("## on modelChangeListener, sources are ", fluid.keys(transaction.sources));
    if (!transaction.sources.PCP) {
        console.log("## source is not PCP");
        if (pcpChannel.outputBlocked) {
            // Ensure that we queue just a single outgoing message for when the channel unblocks
            if (!pcpChannel.outputBlocked.queued) {
                pcpChannel.outputBlocked.queued = true;
                pcpChannel.outputBlocked.then(function () {
                    fluid.log("PCPChannel sending unblocked full update message", JSON.stringify(pcpChannel.model, null, 2));
                    handler.sendMessage({path: [], type: "ADD", value: pcpChannel.model});
                });
            }
        }
```

this encodes the fact that one or more attempts to write a change whilst the transaction level is not met must queue a *single* coalesced write once it unblocks. Note that this is essentially the behaviour described at the end of the paragraph "Simplified and more appropriate transaction semantics" at [New New Notes](https://wiki.fluidproject.org/display/fluid/New+New+Notes+on+the+ChangeApplier).

We could write some moderately reusable utilities to automate this kind of work at the modelListener level (this is discussed with @jobara [in IRC on 5/10/17](https://botbot.me/freenode/fluid-work/2017-10-04/?msg=91899210\&page=2) - this has been written up as FLUID-6209) but it's clear that the framework needs to provide a facility to make such a case declarative, transparent and automatic.

In the previous decade, the Spring framework opened the way towards the then cutting-edge [declarative transaction demarcation](https://docs.spring.io/spring/docs/current/spring-framework-reference/data-access.html#transaction-declarative) - but we need to do much better on many fronts. Spring only provides for the encoding of transaction boundaries mapped as architectural boundaries within a codebase - we need to not only do this, but also to make such demarcation *manifest* - that is, for these boundaries to be encodable within a fully externalised change stream and then replayable back into another system (or the same system at another time). This is particularly important with work upcoming in the [Nexus API](https://wiki.gpii.net/w/Nexus_API#Bind_Model).

The system described in "New New Notes" is pretty nearly what is required, with the tweaks that:

i) It is very clear that we need arbitrary levels of user-level transactions - as the GPII PCPChannel example shows. Some clients want to see the details of model evolution, and others (the PCP) just want gross changes in response to user interaction bulked up.\
ii) We should indeed incorporate the model relay system's own transaction levels into this system, to resolve monstrosities such as FLUID-5373.

This system is named "vertical" because the model (signal) system now has an additional coordinate, in addition both to time, and its spatial extent (the extended JSON structure) which we imagine encoding as "height". At any time, the (or a participating replica of the) system has a "transactional level" which encodes the level which an observer needs to meet in order to be able to observe changes occurring at that time. This is slightly reminiscent of the traditional "log priority levels" by which logging messages of different priorities can be hidden from observers who don't meet the current logging priority level. The differences are that, given that models are an integral (rather than differential) system, failing to meet a transaction level doesn't mean that the changes themselves are elided - instead, the user catches up with the changes at a later time, after they have been aggregated together with any further intervening changes. Secondly, the "observer" in this case is a connected ChangeApplier (with its own individual transactional level), rather than the system itself.

This work will also usefully break up the isolated internal world operated by ModelRelay rules and expose it much more visibly - this will help future work in dealing with stateful or streaming relay rules, and put them much more on a common footing with the facilities of modelListeners. Right now a user can never "beat" or "observe" the action of a relay rule since it is operated privately by the system in a world isolated from user-observable time.

The user-visible facilities of the first iteration of this system would be very simple - an extra annotation that could be attached to a modelListener declaration which encoded a "transactionLevel" - either a user level, or more exotically, say, "relay" if the rule wanted to observe at the modelRelay level for debugging or diagnostic purposes. We would also gain the further ChangeEvent types as described in "New New Notes". The reasoning in that section is no longer fully clear - that we need to mark the transactionLevel on each ChangeEvent - it does seem like the punctuation provided by the new events should be sufficient.

        
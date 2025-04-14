---json
{
  "title": "FLUID-5556",
  "summary": "Extend permitted contexts for IoCSS expressions to match those of all standard references",
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
  "date": "2014-11-13T15:49:36.756-0500",
  "updated": "2016-10-15T20:39:47.188-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When at work correcting the action of GPII Integration Tests for <http://issues.gpii.net/browse/GPII-497> , it was required to fish out a deeply nested subcomponent for use at top level. In this case the component was the "variableResolver" attached 5 levels of subcomponents deep below the overall TestCaseHolder. A literal, direct EL reference to the component would have looked as follows:

```java
variableResolver: "{tests}.configuration.server.flowManager.lifecycleManager.variableResolver"
```

Whilst outrageously fragile, this expressions should have been permitted - in fact, it failed, which is a form of bug in itself (possibly covered by FLUID-4930). The system only permitted one round of "ginger name resolution", deciding already that `{tests}.configuration.server` was undefined.

However this isn't the desirable form of this expression that the user would want to write - in fact, we would want to permit any form of FLUID-4873 form expression, in particular this:

```java
variableResolver: "{that lifecycleManager variableResolver}"
```

Naturally, with the implementation of FLUID-5495, such expressions would have their power augmented to be able to match essentially any component anywhere in the tree.

Unfortunately, this implementation is not possible with our current architecture, and must depend on FLUID-4982, the "globally asynchronous ginger world". This raises a number of interesting issues, philosophical and practical:

i) On the face of it, this represents a direct application of our model for "optionally synchronous" promises (implemented for <https://fluidproject.atlassian.net/browse/FLUID-5513#icft=FLUID-5513> "micropromises"). At the initial time of proposing FLUID-4982, it was imagined that the only source of "non-immediately available values" stemmed from direct asynchrony, e.g. triggered by I/O. However, this current issue proposes an entirely new use case where direct asynchrony is not involved. In the "old framework" (implemented for FLUID-4330 during 2012), we were able to completely avoid the need for any "deferred value type" on the basis that given any "demand for a value", the framework could immediately and synchronously transfer its instantiation point to concentrate on the work of delivering that value, with the demand point simply sitting on a stack frame in the conventional way. This was possible since all expressions demanding values encoded the exact address of the value - assuming that the component (context) section of the EL reference had matched already. For general IoCSS expressions, this is clearly not the case - the value could arise at essentially any point in the tree, and may not even arise at all. The framework can perform no "directed" activity which would definitely or deterministically result in the delivery of the demanded value. Our only possibility is for the caller to suspend. Whilst with our current architecture, the value may well be delivered synchronously from the point of view of the caller of the root component constructor, the value will not be delivered synchronously from the point of view of the demanding site.

The issue is raised frequently whether synchronously resolving promises are desirable. They are outlawed as part of the now popular Promises/A+ spec, and there is plenty of fearmongering literature inveighing against them, although providing little in the way of hard evidence. Whilst this use case appears to argue for synchronous resolution, in practice it represents no new argument - the framework could, in theory, be converted over 100% to the use of asynchronously resolving promises. The arguments, such as they are, mostly centre in the areas of i) efficiency, and ii) debuggability, and remain as moderately weak arguments. The efficiency argument appears strongest, currently, in the terrain of browsers which don't support a setImmediate or similar method of immediately deferred execution. Without the ability to "guard the bottom of every stack frame", we can't guarantee to implement a direct scheduler which could compete with what such an API should support if it were present. Although in fact, our framework is sufficiently "totalising" that it is one of the few environments where such a capability is realistic. It's notable that when.js doesn't attempt to provide such a facility, since it must adopt, in keeping with the current climate, a conservative outlook on the kinds of interference in control flow in application code which should be reliably depended on. Its "schedulers" simply defer to some suitable platform-specific source of asynchrony.

The debugging arguments in theory could be dispelled by the use of one or other "long traces" libraries, but I feel there is a lot to be said for techniques which maximise the value of unadorned native debugging techniques. Debugging is by its nature very frequently an opportunistic activity.

ii) The possibility of a) new failure semantics, and b) new reference types is raised by this capability. Firstly, for direct references of this kind, one would like to extend something like the same failure semantics as we currently have for standard references. Unfortunately we have a problem that the time point where this failure could be raised is not as clear cut as it was when we were resolving direct references. In theory, we can appeal to a time point when "the entire component tree housing the reference has been completely constructed" - which we could consider as taking place immediately before the "onCreate" event for the root component. At this point, in this new model, we will have "at the bottom of our bucket" a collection of such "promised" IoCSS values which have not yet resolved, and can now presumably prove that they never will resolve - this would be the time to raise the "unresolved reference failure". Matching multiple components by this point should most likely be also reported as an error in this case - a new failure mode as well as a new timepoint.

However, even in the original FLUID-4873 report, an alternative use case was imagined for these kinds of expressions - rather than intending to bind directly and necessarily onto a single referent, it would be useful to support expressions which bind onto "zero or more" such referents, and possibly into the bargain supporting event notification (using the awaited <https://fluidproject.atlassian.net/browse/FLUID-3504#icft=FLUID-3504> ChangeApplier Array semantic) of the comings and goings of target components from the matched collection. In this case the failure semantic from the previous paragraph would not apply - matching zero components would never represent an error. This looks like it could only be accommodated with a new reference syntax - we must reserve the existing syntax as consistent with the "one and exactly one" referent model described in the previous paragraph. Perhaps something like {that lifecycleManager valueResolver}\*.members etc wouldn't represent a too obnoxious extension of our syntax. This isn't an immediate prospect, since all of this work would need to be synchronised with our "model-directed component construction" idiom in any case (TODO: writeup required for system which "lenses components into existence" linked to "new renderer" in FLUID-5047, FLUID-4260 etc.)

WIDER THOUGHTS

All of this raises the idea that this model might have been a more appropriate implementation substrate for standard IoC references as well as these extended IoCSS ones. A lot of this discussion necessarily centres around efficiency, which, whilst the FLUID-4330 model was motivated by, as we know, has never yet been delivered - the framework so far remains monstrously inefficient, primarily due to the continuing weight of legacy "demands block" code which we are still unable to remove until we have FLUID-4873, but also due to the extremely inefficient implementation for IoCSS itself. It's hard to know how the arguments would stack up in a "fully optimised" framework. In our "new model", it seems unavoidable that we will have to move to the "heap o' records" model, with every piece of state that used to be a loop counter or local variable fully externalised in a giant structure. We could hope to offset the huge loss in locality of reference that this would entail by means of moving over to 100% arg-ism - by ceasing to ever allocate any more closures, it seems quite likely that a substantial amount of the framework code could be inlined.  It appears that our "fully optimised" framework is probably as different from the FLUID-4330 model as our hypothetical "promise-ified 2009 framework" so probably we have not "lost" very much time in the detour through the FLUID-4330 organisation compared to having taken the other route.

In any case, it appears that there will be severe demands placed on the footprint of these mediating promises as well............... one hyper-compressed representation might consist of what could be called "nanopromises" which dispense with the possibility to signal failure, and move to a prototypal model for binding methods. This would reduce the cost of promises to 1) an object plus 2) an array of listeners. HOWEVER.... considering "hyperefficiency", it is still impossible with the use of any form of promises at all to dispense with the garbage required to allocate the closure which houses the callback and its arguments. This suggests a more radical model of dispensing with any formal promise representation at all, and describing framework entry points as what could be called "arrays of very large iterators" - all the arguments to these would be encoded in the "giant heap" as well as their referents, implying that all work does indeed proceed through arg-ist dispatch of global functions. Thus was humanity set back yet once again on the path leading to the 70s.

        
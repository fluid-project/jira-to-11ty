---json
{
  "title": "FLUID-5303",
  "summary": "Review and possibly remove \"link counting system\" for preventing oscillation in model relay",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-04-08T19:24:40.822-0400",
  "updated": "2021-06-21T11:29:55.891-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5293/",
      "key": "FLUID-5293"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-04-08T19:28:47.478-0400",
      "body": "One possible and maybe less intrusive scheme than \"link counting\" might be a \"draw by perpetual check\" detection system. At each participant in a transaction we keep a log of paths and changes, and throw a fatal error on finding ourselves honoring the same update from the same previous value twice in the same transaction - with the logs cleared by a system based on the simple \"external freshness\" criterion. Users could enhance performance by turning this checking off if they were sure that the set of transforms they were using were all good.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-08T19:50:08.763-0400",
      "body": "NB - to fix <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> completely we required a further refinement to delta tracking within a transaction, which was reporting {} as a deltaMap when no changes had occurred. Cheapest way of fixing this is explicitly counting deltas as an int and censoring the return when zero.\n"
    }
  ]
}
---
The version of the Model Relay system delivered for <https://fluidproject.atlassian.net/browse/FLUID-5114#icft=FLUID-5114> etc. implemented what could be called a "belt and braces" approach to oscillation prevention. Firstly SCHEME I there is the inbuilt "caution" of the system in only recognising changes where model values genuinely altered - this was backed up by utilities like "fluid.model.isSameValue" which allows a certain "floating point slop" so that changes are not recognised where they simply result from floating point imprecision in running a transform such as fluid.transform.linearScale backwards and forwards over the same values. Secondly SCHEME II there was a "link counting system" that would update and track update counts associated with each linkage (relay) as well as each applier in the model skeleton. These counts were "per transaction" and were periodically reset when it was determined that "fresh data" had entered the transaction.

Unfortunately a test case supplied for <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> revealed that the link counting scheme in its current form at least is overly aggressive. It propagated a single array value which was mapped by transformation to a set of two booleans. After the updates for the first boolean were processed, all the link counts were saturated and the update relay for the second one would not be processed.

Here is the relevant content of the test case - the relay is set up as follows:

```java
modelRelay: [{
            source: "{that}.model.accessibilityHazard",
            target: "{that}.model.modelInTransit",
            singleTransform: {
                type: "fluid.transforms.arrayToSetMembership",
                options: {
                    "flashing": "flashing",
                    "noflashing": "noflashing"
                }
            }
```

and the requested change is&#x20;

```java
that.applier.requestChange("accessibilityHazard", ["flashing", "noflashing"]);
```

This should relay onto two boolean flags of "true" but after the first relay, the link counts are saturated and the 2nd one is not honoured.

Given that this "explosion" of values occurred internally, during the course of model transformation, it would be hard to express or account for the fact that each exploded value independently represented "fresh data" - the model transform system simply relays a set of changes to fluid.requestChanges and these show up directly in fluid.registerDirectChangeRelay's "sourceListener" - such explosion could occur at any sub-step of propagating a model update through the skeleton and it becomes unclear what this notion of "freshness" could be considered relative to.

In practice it seems that the quality of the relay system has improved sufficiently that we can just defer to SCHEME I for preventing infinite propagation in practice - even though the system may now take a little longer to stabilise when it could rely on link counting. The fix to <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> currently consists of disabling the link count check in "sourceListener" since it seems that everything currently works well without it.

We should rethink whether we can come up with some more subtle notion of "freshness" other than just "a fresh value external to the current model skeleton", or whether we can just remove link counting entirely. The danger is that some new class of model transformation emerges that cannot invert itself properly, and thus causes an infinite loop with the current implementation. The "belt and braces" (SCHEME II) approach was designed to make the system stable in the face of such transforms, but it seems we must disable at least the current version of link counting for now. If we could eliminate it entirely, it would certainly substantially simplify the implementation.

        
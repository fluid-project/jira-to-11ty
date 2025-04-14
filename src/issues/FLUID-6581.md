---json
{
  "title": "FLUID-6581",
  "summary": "Implement \"poor man's immutability\" as stopgap for storing large resources in models",
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
  "date": "2020-11-23T08:34:41.075-0500",
  "updated": "2024-07-17T08:13:42.149-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6396/",
      "key": "FLUID-6396",
      "summary": "Move ChangeApplier over to \"immutable application\" model"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6580/",
      "key": "FLUID-6580",
      "summary": "Thoughts on \"integration constant\" lenses to implement toggle interactions"
    }
  ],
  "attachments": [],
  "comments": []
}
---
As explained on the old <https://wiki.fluidproject.org/display/fluid/New+Notes+on+the+ChangeApplier> (now more than 6 years old) there was an intention to implement "thin models" which didn't get copied on every transaction. Since then our thinking has moved on a lot and the preferred solution to such problems is a combination of the <https://fluidproject.atlassian.net/browse/FLUID-6396#icft=FLUID-6396> "immutable application model" possibly combined with a lightweight immutable array class such as the one in Facebook's "immutable.js" at <https://github.com/immutable-js/immutable-js/blob/master/src/List.js> (now seemingly lightly maintained - is this a case of "it is already perfect so no updates required" or the more usual case of a loss of interest and focus). Note - algorithm behind such a container is illustrated at <https://hypirion.com/musings/understanding-persistent-vector-pt-1>

It has simply become too annoying not to be able to store resources in models (current work - Covid map viz at <https://github.com/amb26/fluid-covid-map-viz/tree/FLUID-6540> ) and we need some kind of stop-gap solution before we can afford the wholesale revolution of implementing the entire ChangeApplier machinery (and indeed wider framework) in terms of <https://fluidproject.atlassian.net/browse/FLUID-6396#icft=FLUID-6396> immutable structures.

A quick hack seems to be to apply the same trick that we used to subvert the framework's options merging pipeline by creating "identifiable arrays" that would not get multiply reduced - e.g.

```java
fluid.mergingArray = function () {};
    fluid.mergingArray.prototype = [];
```

We will create two such fake containers for \[] and \[], which will pass the fluid.isUncopyable check but hopefully be indistinguishable to all other use. Any resource which gets resolved into a model will convert its base container into one of these kinds before storage.

The bad side effect of this is that changes addressed to the inside of this model region become impossible - the "bad kind" of immutability! Since the entire region becomes aliased in the transaction, our check for null transactions before notification concludes that no change has happened:

```java
fluid.notifyModelChanges = function (....
...
        if (!spec.isRelay) {
        var isNull = fluid.model.diff(args[0], args[1]);
        if (isNull) {
            continue;
        }
```

However, this check is pretty isolated and we may be able to produce a simple means of defeating it by spotting such containers along the invalidPath. This aligns with some of the ancient thinking in the wiki document which noted that our path invalidation scheme is somewhat belt-and-braces with respect to our use of diff at the notification point.

In the meantime we will create this as an "opt-in" scheme since the observable effects will be pretty awkward and should be invited with awareness of the tradeoffs.&#x20;

Note that the newest kind of <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> integration constant lenses will not work on such material since they rely on the ability to resolve old model values. So far the use cases for such things seem distinct, but this further creates pressure on moving to the immutable model.

        
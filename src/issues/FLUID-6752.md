---json
{
  "title": "FLUID-6752",
  "summary": "Arguments to listeners are expanded eagerly, inconsistent with strategy for invoker arguments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-10-14T09:57:37.676-0400",
  "updated": "2024-07-17T08:02:21.964-0400",
  "versions": [
    "4.4"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6373/",
      "key": "FLUID-6373",
      "summary": "Cannot resolve reference to {arguments} from \"func\" or \"this\" in listener/invoker records"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6405/",
      "key": "FLUID-6405",
      "summary": "IoC Testing Framework expands listeners early even as it expands events late"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Arguments to listeners are expanded by a custom workflow leading from fluid.instantiateEvents -> fluid.mergeListeners -> fluid.event.resolveListenerRecord using the old-fashioned heavyweight "fluid.expandOptions"" rather than the more modern "fluid.preExpandOptions" seen in fluid.makeInvoker:

```java
fluid.event.resolveListenerRecord = function (lisrec, that, eventName, namespace, standard) {
....
    var transRecs = fluid.transform(records, function (record) {
.... 
        var listener = expanded.listener = fluid.expandOptions(expanded.listener, that);
```

This implies that any volatile references, e.g. to model material will likely cause a workflow failure. We encountered this when writing a dataSource transforming event listener as

```java
"onRead.impl": {
            func: "hortis.sqliteSource.read",
            args: ["{that}.model.db", "{that}.options.readQuery", "{arguments}.0"]
        },
```

which ended up forcing model evaluation far too early, as part of the pseudo-workflow stage 0 attached to "fluid.instantiateEvents" in the transitional framework.

What will this look like in the future? Probably not vastly different - we will still likely have some kind of monomorphisation site attached to these resolution sites, only we will at least have somewhere sensible to cache their results as part of the immutable tree. There will still be "workflow stages" only these will be scheduled as ticks rather than as promise tangles.

Analogous issues are FLUID-6373, noting that the "func" member of listeners/invokers is always evaluated early, and FLUID-6405 noting that the evaluation of "listener" members of IoC testing framework blocks is always eager.

        
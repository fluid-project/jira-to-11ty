---json
{
  "title": "FLUID-4705",
  "summary": "Remove \"trundlers\" from the framework in favour of universal flat schema system",
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
  "date": "2012-05-07T04:24:50.358-0400",
  "updated": "2024-07-22T09:38:04.892-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4563/",
      "key": "FLUID-4563"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-29T02:02:13.342-0400",
      "body": "Work is now concluded. Unfortunately, although it was possible to remove the last object allocation from the \"fast\" fluid.get pipeline, the increased complexity of the implementation has led to something like a 15% slowdown over the old \"fast\" pipeline rescued from an ancient version of the framework. Some sample times on FF 14 for 200,000 runs of fluid.get with path lengths between 1 and 6:\n\nOriginal \"fast\": 1170ms\\\nNew \"fast\": 1340ms\\\nNew \"fast\" without EL parsing: 940ms\\\nNew \"slow\" with only default strategy: 1460ms\\\nNew \"slow\" with standard strategies: 2000ms\n\nNotably, current versions of Chrome are at least 4x faster on this test and show very few significant differences between the different implementations. Note that allowing arrays of EL segments wherever only flat EL path strings were previously permitted should be a good source of architecture-wide speedups, bypassing EL parsing entirely in many cases. 200,000 is coincidentally roughly the number of calls to fluid.get that were seen on a very complex CSpace page, indicating that significant amounts of time may still be being spent on this during page load - it may be worthwhile to roll in a \"hyper-fast\" fluid.get implementation that does nothing but the bare bones of traversal, and roll together the current \"fast\" and \"slow\" implementations into one, since they are now so close together in performance. This depends on where exactly in the architecture these calls are being issued from. Under the new GINGER WORLD model, this may be impossible in any case.\n\nThe new-style \"strategy\" API is much simpler, and permits only plain functions with a standard 4-argument signature, removing the previous complex \"init\" system for stateful strategies. A form of \"micro-trundler\" API has been preserved which allows new-style \"resolvers\" to be expressible in almost exactly the same form as the old ones, but rather than a mini \"object\", the thing trundled is a simple pairing of a value together with a list of EL segments {root: root, segs: segs}, and the \"trundler API\" is just a light wrapper which forwards to a JURIFIED function which deals only in primitive argument types.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-08-30T10:51:07.978-0400",
      "body": "Merged into project repo at 4839ad705ce9e2c1190e439c6630238cbfe02f54\n"
    }
  ]
}
---
"Trundlers" were an experimental feature introduced in "Sneak Peek" mode into the core framework in the 1.4 release. Since then, performance testing work with CollectionSpace as well as various other arguments suggest that they are not the appropriate implementation for this feature and should be removed. The "trundler" concept was for model access to models which enjoyed an additional semantic (for example, a "schema" or other form of path-mapped "metadata") was to be mediated through lightweight objects that would serve as "cursors" to the model. \
These "cursors" were to be "trundled" through the model whenever it was traversed by EL for reading or writing - in particular, by the fluid.set and fluid.get implementations. These accessors were configured by means of an extra final argument supplied to fluid.set and fluid.get, which allowed the user to specify "strategies" (operated sequentially to perform model access) and "resolvers" (custom rules for operating non-string EL path forms).&#x20;

For complex pages, CollectionSpace initial load is a severe test of the model scheme and was found to generate huge amounts of garbage, mostly through the model merging and accessing framework functions. As part of the work for <https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>, "trundlers" were moved back out of the core framework into DataBinding.js, in favour of the much simpler and more performant implementations of fluid.get and fluid.set which appeared in the 1.2 version of Infusion. After further consideration, this work needs to be extended to remove trundlers entirely in favour of a "cursor-free" system which is parameterised simply by EL paths. This swaps some increased complexity in the implementation of schema-aware accessors for the almost total removal of per-model garbage during access.

"trundlers"/"cursors" were an attractive implementation scheme particularly with reference to the kinds of "recursive schemas" which are increasingly popular in the JSON world - for example, JSON schema <http://json-schema.org/> which is currently on a standards track. A "trundler" would at any point be an "instance object" or "iterator" whose state encapsulated the location of a particular point in such a schema. As the iteration/access proceeded, trundlers would be "trundled" along a particular path segment which updated their state. This scheme also seemed attractive for accessing other segmented string-indexed structures, for example the routing tables of a server (these are in general known as "tries" <http://en.wikipedia.org/wiki/Trie> ).&#x20;

However, model access is such a core framework function, frequently finding itself within tight inner loops, that the costs of maintaining such an "instance-based" scheme can't be afforded. In the general case, EL-based traversal needs to complete without the allocation of any more garbage than the components of the EL string segments themselves (which in theory, although it seems not in practice, could be eliminated completely by "string interning" performed by the JS runtime).&#x20;

As it turns out, schema access by accessors is an "exceptional case" at typical runtimes - the standard use of a schema is to guide the allocation of parts of a model which have not yet appeared in concrete form - whether they are "default values" drawn from a schema or fetched by some more exotic scheme (for example using network I/O). The "default case" consists of model state which exists as standard concrete JSON and it is this case which must execute as quickly as possible. Therefore the economics justify shifting runtime expense over to the exceptional cases, and force the schema-aware parts of access to proceed without the benefits of iteration and path-specific state.&#x20;

This implies that, in general, schema traversal would need to begin from the very root of the schema (segment by segment) every time schematic information was required. In practice, as well as being an exceptional runtime case, the expense of this could be mitigated by some form of "caching" or even "compilation" of schemas. This would allow them to be indexed by EL in a much shorter time at the cost of extra runtime state - however, this extra state would only incur costs that were "per-schema" rather than "per-model". In general we expect many fewer schemas than models derived from them, although it is worth noting that CollectionSpace is very schema-rich. All the same, shifting indexing responsibility out into dedicated "schema handlers" allows these costs to be tweaked much more flexibly than the "pay on every access" model which trundlers offered.

The world of "flat schemas" is also more similar to the world of "merge policies" which we were already familiar with in the core framework. We will need to develop more infrastructure to help users work more easily with recursive schemas and manage the caches/compiled forms that they will now involve if we want to accelerate lookup into them.

        
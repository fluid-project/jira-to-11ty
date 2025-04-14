---json
{
  "title": "FLUID-5304",
  "summary": "Implement \"Infusion Compiler\" recognising \"shapes\" of repeatedly appearing components and storing them as \"link-ready\" templates",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2014-04-09T00:03:43.690-0400",
  "updated": "2021-01-08T11:14:09.729-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6457/",
      "key": "FLUID-6457",
      "summary": "Order of expansion with respect to merging is inconsistent in defaults"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6587/",
      "key": "FLUID-6587",
      "summary": "Impossible to override any expanders in defaults"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6219/",
      "key": "FLUID-6219"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-08-24T16:10:26.964-0400",
      "body": "Note that it was recognised during work on the Nexus model binding endpoint at <https://github.com/fluid-project/infusion-nexus/pull/25#discussion_r475864274> that in addition to the compiler spilling its \"shape cache\" when discovering a value of a JSONically different shape that disrupts later merge compositing, it would also do so on discovering an expansion site which varied in asynchrony.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-09-23T12:07:36.251-0400",
      "body": "Note that this work will also have to incorporate moving to a C3-like algorithm as per <https://issues.fluidproject.org/browse/FLUID-5800>\n"
    }
  ]
}
---
Right now the IoC system offers particularly poor instantiation performance. This will become a strongly limiting factor in both server and client-side applications in the relatively near future (c. 1 year). Informally, the system spends most of its time in the "strategy" loops introduced as part of the refactoring for FLUID-4330. These liberated the workflow of the framework to become completely data-driven, but unfortunately ended up "dilating" most of the tightest inner loops in the options merging and expansion pathway. This had a doubly negative effect - firstly since the code locality in these loops is lower, we probably end up spilling many more processor caches during the algorithm - and secondly, this code is probably much less inlineable than the old implementation.

Especially when the "new renderer" begins implementing for FLUID-5047, this will become extremely crucial. Under this new model we will need to instantiate trees of possibly hundreds of simple components very quickly - this is entirely impossible with the current implementation.

We will need to implement a form of "compiler" for the IoC machinery. Since this machinery doesn't perform a task that closely resembles that of a conventional interpreter, this compiler will also differ in many important respects from traditional ones, but the outline of its responsibilities and some of its workflow will be similar - and its output will in some ways be similar to the link-ready "object code" or even DLLs that form the output of late stages of the pipelines of conventional compilers.

As an implementation sketch, the compiler will have to recognise "frequently co-occuring configuration and contexts" - that is, on discovering that a number of similar components are being instantiated in similar contexts, it should be able to short-circuit hopefully large parts of its workflow, in particular avoiding the highly expensive "strategy points" such as "fluid.makeMergeStrategy" and "fluid.makeExpandStrategy". A possibly promising "key" for this identification could be assembled from the "mergeBlocks" which are assembled by the midpoint of fluid.initLittleComponent. Some of these blocks, the ones arising from distributeOptions directives and defaults blocks, already have unique keys, and we could supply some to others - perhaps even through "hashing by force" in the case their source couldn't be labelled. This "list of keys" could then be used as a key into a table of "mostly digested options" - that is, a structure in which "most" of the work of merging and expansion had already been concluded, possibly with a small set of EL paths in which material needs to be injected in the style of a "fixup" similarly to the way that DLLs injected into a fresh address space have a number of locations which need to be filled in with final concrete addresses in order to make the library "ready to go". In lucky cases we may discover that 100% of the work is done already, although in this case it is unlikely that the resulting component has much useful function - one would expect that there needs to be **some** unique contextualisation applied to every useful component.

So, this "list of keys" -> "key to freeze-dried options structure" could be seen as also analogous to the "shape analysis" ( <http://en.wikipedia.org/wiki/Shape_analysis_(program_analysis>) ) done by some modern optimising compilers. Its work will be similarly opportunistic since we couldn't expect to produce efficient lookup universally, but it should be possible to cater for a sufficiently large category of "regular cases" to restore the view that the framework is usually fast.

        
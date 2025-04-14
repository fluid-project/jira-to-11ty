---json
{
  "title": "FLUID-5836",
  "summary": "Rethink the use of \"source\" type options distributions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-12-25T09:04:39.966-0500",
  "updated": "2022-02-17T09:07:11.012-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-11-07T22:43:44.530-0500",
      "body": "Yes - ii) above.\n\nI ran into further bizarre behaviour when working on fluid-authoring, trying to implement a workaround hack for our lack of dynamism in \"components\" for <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028>. This looked as follows:\n\n```java\nfluid.defaults(\"fluid.author.componentView\", {\r\n...\r\n        distributeOptions: {\r\n            // This unreasonable hack is currently our best route around FLUID-5028\r\n            source: \"{that}.options.rowMaterials.options\",\r\n            target: \"{that}.options\"\r\n        },\r\n....\r\n        rowMaterials: \"@expand:fluid.author.componentView.collectRowMaterials({that}, {that}.options.elements)\",\n```\n\nGiven `rowMaterials` just consists of an expander, the code in the dimwitted `fluid.filterBlocks` which looks as follows:\n\n```java\nfluid.filterBlocks = function (contextThat, sourceBlocks, sourceSegs, targetSegs, exclusions, removeSource) {\r\n        var togo = [];\r\n        fluid.each(sourceBlocks, function (block) {\r\n            var source = fluid.get(block.source, sourceSegs);\n```\n\ncompletely elided all of the material since the target path did not match. This attempt to \"process raw materials\" is a ridiculous blunder.\\\nIn theory if we can just fix <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> we could do without this hack completely, but it's then not quite clear what the above code, which attempts to dynamically generate an unbounded set of standard subcomponents, will look like. If we support a proper API to \"potentia II\", the component generator could use it, but this would then be not clearly captured in configuration. There's an awkwardness that dynamic component material currently has to be summarised as a grade. We could use \"nonce grades\" here, although there would then be a cleanup problem.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-02-17T09:07:11.012-0500",
      "body": "Further unexpected behaviour - since \"source\" distribution occurs **before** options merging, it is possible to end up distributing values that have been overridden.\n\nFor example:\n\n```java\nfluid.defaults(\"hortis.sunburstLoaderWithMap\", {\r\n    mapFlavourGrade: \"hortis.leafletMap.withGrid\",\r\n....\r\n        mapFlavourGrade: {\r\n            target: \"{that map}.options.gradeNames\",\r\n            source: \"{that}.options.mapFlavourGrade\"\r\n        }\r\n}\n```\n\noverriding \"mapFlavourGrade\" ends up broadcasting both the values in the defaults as well as the overridden value, with obviously undesirable effects\n"
    }
  ]
}
---
Originally, options distributions of "source" type were the principal (and for a while, even the only) form that was used. Especially aggressive was the use of "removeSource" as an annotation to indicate that the options material distributed should not be resolved at the source site at all, but be "uprooted" in order to resolve at the target. In the light of recent improvements in distribution namespace handling and more finegrained priority resolution (ending in FLUID-5824), as well as a recent tour of the fragility of the "source" system (suffered in FLUID-5835), we should reconsider our widespread use of "source" types in favour of "record" types.

The pending major update of the GPII universal architecture in <https://github.com/GPII/universal/pull/425> for GPII-1318 features a much more aggressive use of "global options distributions". Rather than constantly reaggregating options into locally-named caches, the idea is that the ultimate target site of the distributions is targetted via a global selector. Priority amongst these distributions are then arbitrated by schemes such as FLUID-5824 and FLUID-5621. This allows us to have "global oversight" of a design and easily (especially with the aid of perpetually forthcoming tools) be able to determine all the sites which influence a particular target. The alternative is to create a chaos of "locally forward caches of junk" of which the FLUID-5835 failure is a prime example. Numerous sites try to advise the message bundle of a prefs editor panel, and the result is a mishmash of inconsistently named aliases for the same options (messageResolver, msgResolver, etc. in several different components). The resulting mess is almost impossible to understand and debug.

In addition, the "source" scheme as toured in FLUID-5835 shows that it is liable to many other causes of failure than the particular regression we encountered. The user's expectation is that, when writing

```java
source: "{that}.options.thing"
```

that the target will receive EXACTLY the options that would have arisen at the source's option "thing". In fact, there are numerous reasons that this may be difficult to achieve. "thing" may itself be derived from numerous options source (blocks) which must all be seen at the point of the distribution, and whose priorities must be exactly preserved at the target.

The "block filtering" scheme arose because of our requirement for "removeSource", which in turn was primarily motivated by our "third epicyclic version" for fixing the Uploader's design in advance of our current now almost completely hermetic dynamic grade resolution algorithm. That previous epicycle involved a rather baroque "complete options distribution" where we broadcasted a source of "{that}.options" to a target "real impl" subcomponent with "removeSource: true" and a bunch of exclusions in order to prevent infinite self-inclusion. This requirement, as well as the current rather inflexible workflow for options merging, requires that options distributions work the way they currently do - that is, the result of a source distribution is that "filtered blocks" from the source are added to the target's blocks, rather than the target being able to directly depend on the source's finally resolved options value (which would allow completely consistency to be guaranteed).

As we start planning for the upcoming framework rewrite under FLUID-4982, we should also consider rethinking this widespread (especially in the prefs framework) use of "source" distributions. If we carry on with them, we should consider at least - \
i) eliminating the "removeSource" annotation, which should discourage some of the most confusing cases of "wholesale options forwarding"\
ii) reimplement the scheme to allow the actually resolved option to be forward rather than the raw materials for it, which should be much easier to achieve in the new "promise-like" world\
iii) generally recommend that "record" distributions plus globally resolved selectors be used instead, rather than the "facade"-type pattern we have been continuing to have in our minds under the influence of ancient-type thought received for example from GoF

The "get it right first time" model of resolution has been an abstract goal of the framework for a long while. As our construction process becomes steadily more powerful, use cases which required objects to be constructed initially in only a partially viable condition, or else for options to be constantly cascaded through the system in many steps on their way to their ultimate destination can gradually be subsumed in the framework's workflow in general. The opportunity to get rid of further, specific, framework features (e.g. "removeSource") in favour of general capabilities of the instantiation workflow should be seized if we can.

        
---json
{
  "title": "FLUID-4537",
  "summary": "Failure to expand contextual EL references within prototrees that are not UIBound elements",
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
  "date": "2011-11-13T03:39:31.816-0500",
  "updated": "2012-01-20T16:48:57.655-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-11-17T11:55:49.261-0500",
      "body": "Merged into project repo at 4eae684f5f05c8a937869897fc749c8277c4522d\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:48:57.599-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    }
  ]
}
---
Problem reported by the Jen Bourey: prototree material like the following:

protoTree: {\
expander: {\
type: "fluid.renderer.repeat",\
repeatID: "item",\
controlledBy: "feeds",\
pathAs: "item",\
tree: {\
title: "${{item}.title}",\
link: { target: "${{item}.link}", decorators: { attrs: { title: "${{item}.description}" } } },\
description: "${{item}.description}"\
}\
}\
}

has UIBound members like title, link, description expanded properly, whereas material sent to the attribute decorator via the "expandLight" pathway ends up destroyed.&#x20;

This is as a result of a fault in the prototree expander - the custom "EL concatentation pathway" operated by code handing via "fetchEL" within makeProtoExpander is only operated from "expandBound". Any other material is handed to "expandLight" which just uses the default environmental fetcher (this was actually code hacked out of the IoC system as a kind of "generalisation" of the common requirements of the protoTree expander and the old historical "half-IoC" system in fluid Engage - but is not in fact used directly by any part of Fluid IoC itself despite being defined in that file).

The "default environmental fetcher" needs to be modified to allow the special strategy used in protoTree expansion to transform "parsed" context objects, consistently with the "fetchEL" strategy.

In the long term this pathway needs to be moved out of FluidIoC entirely and further rationalisation provided with context parsing expression.s

In the even longer term the protoTree expansion pathway needs to be "burned to the ground" entirely and replaced with pure IoC definitions.

        
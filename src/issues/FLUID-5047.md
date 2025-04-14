---json
{
  "title": "FLUID-5047",
  "summary": "Implement \"new Renderer\" eliminating renderer component trees and protoTrees in favour of newly graded standard IoC component trees",
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
  "date": "2013-06-11T13:29:30.220-0400",
  "updated": "2021-09-09T08:18:23.057-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982",
      "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5045/",
      "key": "FLUID-5045",
      "summary": "Improve Model Transformation system to support transforms contextualised by IoC expressions"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4261/",
      "key": "FLUID-4261"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4260/",
      "key": "FLUID-4260"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-09-09T08:18:23.057-0400",
      "body": "Note that the work plan listed in this JIRA is extremely old. In practice we did not work by translation and produce old-fashioned renderer trees from new renderer components - instead the new renderer currently in <https://github.com/amb26/new-renderer-demo/blob/FLUID-5047> fabricates the new DOM tree directly from the component tree without any intermediate representation.\n"
    }
  ]
}
---
The Fluid Renderer system, constructed by direct translation from Java code forming the "RSF Renderer", has increasingly come to be seen as a source of confusion and fragility. The JSON dialect(s) that it operates are hard to write, and increasingly we have come to see that facilities provided in the Renderer are more properly, powerfully and usably supplied within the JSON dialect operated by the IoC system and graded defaults scheme for standard Fluid components, which did not exist when the renderer was first written.

We should eliminate the JSON dialects parsed by the Fluid Renderer entirely from direct use in client code, instead providing a facility where arbitrary rendering effect can be achieved by writing standard Fluid components in an IoC tree, some of which will be in direct correspondence with the old Fluid renderer types e.g. UIInput, UISelect etc.&#x20;

Initially this implementation will work by translation - as part of <https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260>, the framework will automatically construct a standard "renderer component tree" which will then be fed to a standard invocation of the old renderer. Over time, we plan to be able to remove the majority of implementation code from the "old renderer" entirely (e.g. primitives for looping and branching through templates, which can be seen as a limited and cumbersome implementation of the more powerful directives available in the IoC system itself - branching -> type/grade resolution for <https://fluidproject.atlassian.net/browse/FLUID-4916#icft=FLUID-4916>, <https://fluidproject.atlassian.net/browse/FLUID-4932#icft=FLUID-4932>, etc., looping -> <https://fluidproject.atlassian.net/browse/FLUID-5022#icft=FLUID-5022>).

This work will allow the resolution of a number of Renderer goals written up separately under various heads - e.g.

<https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260> "Renderer antigen" support\
<https://fluidproject.atlassian.net/browse/FLUID-4261#icft=FLUID-4261> "Tag singularity" problem caused by mismatches between component structure and template structure\
<https://fluidproject.atlassian.net/browse/FLUID-2962#icft=FLUID-2962> Arbitrary allocation of rendering work between server-side and client side\
<https://fluidproject.atlassian.net/browse/FLUID-4189#icft=FLUID-4189> Expanded renderer component workflow

This work will also be assisted by <https://fluidproject.atlassian.net/browse/FLUID-5045#icft=FLUID-5045> which will allow Model Transformations material to appear in a general IoC tree, as well as enabled by <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>, the "asynchronous ginger world" which is required to allow template references to be freely interleaved amongst the component tree for <https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260>.

        
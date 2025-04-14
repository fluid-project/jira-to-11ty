---json
{
  "title": "FLUID-6738",
  "summary": "Create facility using workflow functions to allow dependent singletons to be created in a timely way",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-05-27T06:56:57.411-0400",
  "updated": "2022-05-27T11:01:40.504-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-05-27T11:01:40.504-0400",
      "body": "A \"test balloon\" implementation is available in <https://github.com/fluid-project/infusion/pull/1082/files#> as the grade `fluid.rootMaker` and its accompanying workflow function. Since this is a global workflow function with priority \"first\", this acts early enough to resolve references from any options material or model relays etc., although there is one usage which is not possible, which is referencing the created singleton from a directly injected subcomponent reference - e.g.\n\n```java\nfluid.defaults(\"fluid.tests.fluid6738test\", {\r\n....\r\n    components: {\r\n        webMidi: \"{fluid.tests.fluid6738webMidi}\"\r\n    }\r\n});\n```\n\nwould not be possible, since the gap between initComponentShell and processComponentShell in FluidIoC.js is not covered by the workflow system. If this implementation ended up being useful, we could consider hoisting processComponentShell into a new initial workflow phase so that we could place the rootMaker before it - although this would end up not discovering any literal subcomponents that wanted to create roots. Possibly we could just hoist the resolution of injected component references into a workflow phase.\n"
    }
  ]
}
---
The code exhibiting FLUID-6737 was created as a result of what seems to be a recurrent requirement - that multiple "instances" of something be resolvable against a common singleton (conventionally at the root of the tree), where the construction of the singleton should be timed to be "immediately before" the first of the dependent instances.

FLUID-6737 makes use of the "fluid.resolveRootSingle" directive to mount the singleton, expressed as a subcomponent of the client, at the root, but runs into difficulties because each successive instance reconstructs the singleton as its subcomponent.

The Infusion 4.0 "workflow functions", invented to support the "new renderer", should be able to allow this constructional pattern to be expressed in a declarative way.

        
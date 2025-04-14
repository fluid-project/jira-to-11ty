---json
{
  "title": "FLUID-5976",
  "summary": "Implement \"model visibility model\" allowing strict evaluation of model contents to be avoided",
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
  "date": "2016-09-30T11:31:20.789-0400",
  "updated": "2019-03-22T18:49:29.484-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4928/",
      "key": "FLUID-4928",
      "summary": "Implement \"visibility model\" scheme for directly mapping model state onto state of DOM nodes and others"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-03-22T18:49:13.610-0400",
      "body": "Connection between this and push/pull models of dataflow and/or FRP. Note that a big demander of the MVM will be the \"new renderer\" which will coordinatise all kinds of bits of DOM state that should not be concretified unless there is an active consumer of them - e.g. the standard \"visibility model\" of <https://issues.fluidproject.org/browse/FLUID-4928>\n"
    }
  ]
}
---
As we work more and more heavily with denser models, it becomes important to be able to bypass the strict evaluation of every model element in some cases. These might either i) involve significant computation, ii) occupy significant space, or iii) incur significant I/O, in case the model is peering with some kind of remote system.

In keeping with our generally declarative outlook, a suitable approach to this would be to allocate a separate schematic area paralleling the model area (we already require such a schematic area for numerous other use cases) in which we can specify an evaluation policy aligned with the parallel model contents (either with respect to the exact model peer element, or with respect to its children). This might specify, for example, that the model contents should be only computed on demand, or only realised to a certain depth.

A lot turns on what constitutes "demand" for a model element. Certainly, the registration of a modelListener that has a reaction in the external world counts as such demand. Whilst we still plan to support arbitrary, property-based inspection of models, we have problems which could be addressed by the time-honoured but generally unstable "thick proxies" approaches.

Some use cases:&#x20;

A large UI for which complex tooltips could be displayed on any element. These should only be computed whilst they are being displayed, and then discarded.

A remote debugging UI which is a window onto a very large remote system. Traditionally these work through an idiom of "unfolding" (cf. node-inspector) where the user can explore the remote state piece by piece rather than transferring it all at once.

The "model visibility model" would, unlike other schematic material, be highly dynamic. The system would respond to changes in this structure "in a homeostatic way" - that is, it would make its best efforts to bring the actual concretification of the model into correspondence with the MVM, and support events (promises/etc) which allowed clients to be notified when this correpondence had been achieved.

        
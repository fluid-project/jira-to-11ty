---json
{
  "title": "FLUID-4922",
  "summary": "Investigate performance of existing invoker system and implement \"fast invokers\" which cache arguments",
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
  "date": "2013-02-21T03:55:09.077-0500",
  "updated": "2014-03-03T12:25:51.256-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-09-17T12:29:26.322-0400",
      "body": "Fast invokers were reviewed and merged into master at a725f9d2a56a3ad4753efa12b1cd416b52937d1e.\n"
    }
  ]
}
---
With the resolution of FLUID-4709, the only remaining barrier to universal adoption of invokers as our solution for "methods" attached to the top level of components is their worrying performance issues, which have yet to be characterised, but are likely to be very serious.\
Each call to an invoker causes a complete resolution of all IoC-resolved arguments - if any of them mention components other than "{that}" this will cause a search up the component tree, and even if all non-argument positions resolve onto "{that}" we will still take a very expensive trip through fluid.embodyDemands. We should by default instantiate invokers as "fast invokers" which will cache all material resolved in the component tree (except references into models), and only show changes in argument positions which refer on to {arguments}. This would enable invoker resolution to not be grievously slower than a standard method call after the first successful call. \
A new notation dynamic: true attached to an invoker would restore the old behaviour for invokers which bind onto improperly changing material. \
We should also in the far future consider a system similar to the DOM binder which is able to flush its cache under certain conditions where, for example, we apply some proper ChangeApplier semantics which do indeed support changes to component material outside their models - which we expect to occur on a much slower timescale than model-directed changes.\
We should investigate and compare the performance of "slow" and "fast" invokers after this implementation and circulate guidelines on baseline performance expectations.

        
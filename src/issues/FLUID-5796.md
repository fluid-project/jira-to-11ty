---json
{
  "title": "FLUID-5796",
  "summary": "Improve performance of listener dispatch to the same level as invoker dispatch",
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
  "date": "2015-10-23T14:22:22.403-0400",
  "updated": "2016-07-08T09:04:16.623-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The work on FLUID-5249 very substantially improved the dispatch of invokers, by perhaps a factor of 60, bringing the overhead to perhaps 3-4 microseconds on typical desktop machines. This allowed us to eliminate the so-called "fast invokers" (FLUID-4922) from configuration since all invokers became equivalently and maximally fast. In certain cases (where IoC references are sourced from either {that} or {arguments}) the dispatch is allocation-free.&#x20;

We need to apply the same optimisations in fluid.dispatchListener - to i) apply the two-stage options expansion and ii) guard any logging statements using fluid.defeatLogging

        
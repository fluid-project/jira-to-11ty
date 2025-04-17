---json
{
  "title": "FLUID-6457",
  "summary": "Order of expansion with respect to merging is inconsistent in defaults",
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
  "date": "2020-02-13T08:06:07.847-0500",
  "updated": "2020-02-13T08:08:21.941-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5304/",
      "key": "FLUID-5304"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668",
      "summary": "Corruption when material written for \"members\" requires merging"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This is a very long-standing irregularity in the framework which was introduced as a vital optimisation whilst implementing the UI CollectionSpace around 2010. This was an extremely dense UI consisting of several hundred Infusion widgets in a vast grid. It was found that a very significant proportion of rendering time was spent in merging component defaults. In order to make rendering performance acceptable, the most direct fix at the time was to build a cache of pre-merged defaults for every kind of graded component the framework found itself instantiating. This is the basis of the fluid.mergedDefaultsCache structure that continues in the framework today.

Unfortunately this workflow necessarily inverted the order of expansion and merging for these defaults. In order for the cache to be effective, merging had to be applied first and only then these merged defaults enter the expansion pipeline as a single "expandBlock". They are then finally merged **again** with all other sources of arriving options, especially those from options distributions each of which give rise to a separate expand block.

This optimisation has become the basis for a lot of unstable and confusion behaviour in the framework, especially as more and more work is done with options distributions which by and large work the way users expect and are also the only way certain effects can be achieved. Particular anomalies are FLUID-5668 which, like many areas in which we require stable behaviour, have been hacked in with a kind of "deferring mergePolicy" which simply defeats all framework action during merging and allows parts of the framework to pick up the pieces later.&#x20;

Justin Obara's work on FLUID-6420 has now inherited another of these awkward mergePolicies.

Unfortunately any change in behaviour in this area would be hugely destabilising to people working with the framework, since it amounts to a silent change in the meaning of all configuration so far written, with very little possibility for producing any diagnostics helpful in interpreting the meaning of new failures. In addition, we would be saddled with all the performance problems that this cache was designed to remove. Therefore work on this problem will be impractical until we can combine with the radical change in internal structures and performance improvements required by <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304>.

        
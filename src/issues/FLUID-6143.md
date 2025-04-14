---json
{
  "title": "FLUID-6143",
  "summary": "Very significantly improve performance of component instantiation",
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
  "date": "2017-03-10T22:02:16.249-0500",
  "updated": "2017-03-11T23:07:53.812-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6144/",
      "key": "FLUID-6144",
      "summary": "Bypass huge impact of Chrome deoptimisation of member deletion during scope cleanup"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6145/",
      "key": "FLUID-6145",
      "summary": "Begin the \"immutable revolution\" by causing all finally merged component options to be immutable"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6143/CPU-20170309T031055-original-old-clearChildrenScope.cpuprofile",
      "filename": "CPU-20170309T031055-original-old-clearChildrenScope.cpuprofile"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6143/firefox-old-instantiation",
      "filename": "firefox-old-instantiation"
    }
  ],
  "comments": []
}
---
Our work on invokers, starting with <https://fluidproject.atlassian.net/browse/FLUID-4922#icft=FLUID-4922> "fast invokers" which were then abolished for <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> and <https://fluidproject.atlassian.net/browse/FLUID-5796#icft=FLUID-5796> which brought the performance of invokers and listeners up to the same high standard in all cases, showed how much "air" could be found in our original, simplistically interpreted execution of the framework's declarative directives - this succeeded in improving invoker and listener dispatch by a factor of perhaps 60 by adopting an aggressive "caching and monomorphisation" strategy.

Component instantiation remains at roughly the same dismal speeds as when the "recognisably modern" framework was delivered with FLUID-4330 in early 2013. Increasingly we will run into situations where this represents a really unacceptable burden for the "typical" framework user - especially when we enter a modern era of rendering for FLUID-4260. Work on the "Visible Nexus" for <https://github.com/amb26/fluid-authoring/tree/FLUID-4884/src/> shows very sluggish rendering for component trees holding a few dozen components, and this will only become worse as we author more ambitious applications. Load testing for <https://github.com/fluid-project/kettle> also showed that we are limited by component instantiation speed, having to create at least one Infusion component per request.

On recent Chromes, instantiation of a very minimal Infusion component takes around 1ms, and on recent Firefoxes, it is around 4x slower. The attached profile traces show the results from the manual performance test page at <https://github.com/fluid-project/infusion/blob/master/tests/manual-tests/framework/core/performance-fastInvokers/js/performance-test.js#L125> with the line&#x20;

```java
root.child2.events.createIt.fire();
```

uncommented in order to replace the existing line which tests invoker performance.

These show that options merging currently dominates the cost of component construction. The FLUID-4330 algorithm for this is vastly more complex than its 2010-era predecessor, and its replacement for FLUID-4982 will be more complex still. This style of algorithm can never possibly be sufficiently performant to meet the kinds of use cases we listed above - it represents a form of "interpretation" whereas we need to make the shift to the era of "compilation".

This will use the same kinds of schemes that we applied for <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249>/<https://fluidproject.atlassian.net/browse/FLUID-5796#icft=FLUID-5796>, only the task is hugely more ambitious since we will be "compiling" the action of some thousands of lines of framework code rather than a few tens. The concept will be similar - once the grade content of a component (more specifically, the identity and ordering of its "mergeBlocks" in the FLUID-4330 sense) has been fixed, we should be able to skip to the end of the options merging process by fishing out a previously "memo-ised" representation of the monomorphised final expander block. Because of our insistence that for many cases, expansion must PRECEDE merging this will require some elaborate form of "stencil" structure where we have "symbolically executed" the merging process, assuming that the "shape" of any material fetched by expanders has remained the same. Some aspects of this process are sketched in the wiki page <https://wiki.fluidproject.org/display/fluid/The+State+of+Options+Merging+25-4-16> .

        
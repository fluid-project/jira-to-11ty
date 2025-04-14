---json
{
  "title": "FLUID-6144",
  "summary": "Bypass huge impact of Chrome deoptimisation of member deletion during scope cleanup",
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
  "date": "2017-03-10T22:11:33.533-0500",
  "updated": "2017-03-10T22:12:16.747-0500",
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
      "url": "/browse/FLUID-6143/",
      "key": "FLUID-6143"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Beginning the work for FLUID-6143, inspecting the profile traces of the standard minimal instantiation performance test page at <https://github.com/fluid-project/infusion/blob/master/tests/manual-tests/framework/core/performance-fastInvokers/js/performance-test.js#L125> under Chrome showed a vast proportion of the cost (20-25%) of instantiation consumed by a single line - the scope cleanup in fluid.clearChildrenScope at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidIoC.js#L937> -&#x20;

```java
fluid.clearChildrenScope = function (instantiator, parentShadow, child, childShadow) {
        fluid.each(childShadow.contextHash, function (troo, context) {
            if (parentShadow.childrenScope[context] === child) {
                delete parentShadow.childrenScope[context]; // TODO: ambiguous resolution
            }
        });
    };
```

At first this was dismissed as a profiling artefact, but after some IRC discussion at <https://botbot.me/freenode/fluid-work/2017-03-09/?msg=82164329> we experimented with replacing the line with an assignment to `null` and found that the overall runtime performance amazingly did improve in line with the accounting in the profile trace. After some further thought, we considered that we could mostly likely performantly make this approach real, by shifting "tombstone cleanup" into fluid.resolveContext - <https://botbot.me/freenode/fluid-work/2017-03-09/?msg=82166646&page=2> . Whilst this will be a pretty unstable optimisation, since the V8 team will doubtless be making constant adjustments to the details of their inline cache algorithm, the huge benefits on an important platform suggest that this may well be worth it for now.&#x20;

Whilst there is some lore on <https://github.com/petkaantonov/bluebird/wiki/Optimization-killers> suggesting that one should generally be suspicious of the `delete` operator, there is nothing to suggest the possibility for this incredible performance loss (on the order of 10s of microseconds per operation).

Interestingly this optimisation makes essentially no difference to the performance on Firefox, which in any case is about a clear factor of 4 slower than Chrome's in any case - doubtless because it is not making use of any sufficiently ingenious optimisations that could be defeated by this kind of operation.

        
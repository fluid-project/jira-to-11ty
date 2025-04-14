---json
{
  "title": "FLUID-5021",
  "summary": "Clarify relationship of \"noexpand\", \"nomerge\" and \"replace\" mergePolicies",
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
  "date": "2013-05-19T03:01:25.531-0400",
  "updated": "2015-06-15T10:24:45.610-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current behaviour of the "nomerge" mergePolicy is unintuitive. Since the implementation of FLUID-4330 ginger expansion, the expansion process for component options now obligatorily copies options material as it expands, unless it is advised not to by one of the mergePolicies that it understands. Currently these mergePolicies are "noexpand" and "preserve".

Ignoring for the time being the oddity of having things named "mergePolicies" which are in fact directed at the expansion process, we need to rationalise the behaviour of "nomerge" since the default expectation by a user unfamiliar to the framework is that "nomerge" will leave the options material it is applied to completely untouched. The recent example was of a Float32Array which was being corrupted by the options expansion process, even when "nomerge" was applied. No single mergePolicy was capable of preserving this material, which in fact required the combination of "nomerge, noexpand". The best solution here was to reposition the material as a "member" rather than a piece of the options material but we still need to avoid confounding users in this case.

<https://fluidproject.atlassian.net/browse/FLUID-4706#icft=FLUID-4706> is relevant to this issue, and describes an uncoupling in the opposite direction. While, historically, it seems that "noexpand" used to imply "nomerge", it seems that what we now need post-FLUID-4330 is a "nomerge" that implies "noexpand". It should be possible to position the "replace" mergePolicy as the suitable option for those who DO want expansion but no merging - especially since it has custom short-circuit support within the merging algorithm to avoid costly expansion of references which it can be known will be discarded moving from left to right - it in fact picks the rightmost value of a set of merging values and only dispatches calls into the underlying strategy for that value.

        
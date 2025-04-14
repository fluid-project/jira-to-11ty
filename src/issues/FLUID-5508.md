---json
{
  "title": "FLUID-5508",
  "summary": "Grade resolution algorithm contributes multiple copies of listeners when grade is available through multiple paths",
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
  "date": "2014-09-12T19:19:56.770-0400",
  "updated": "2016-08-18T11:43:10.646-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668",
      "summary": "Corruption when material written for \"members\" requires merging"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5800/",
      "key": "FLUID-5800",
      "summary": "Grade merging algorithm is still incorrect - accumulative linearisation must be abandoned"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-18T20:16:36.890-0500",
      "body": "I felt sure that some work had been done on this issue, but there seems to be none. Note that the framework automatically supplies a synthesized member \"componentSource\" to each listener record, which is currently used only for the relatively worthless requirement of synthesizing soft namespace names. It appears that given this is invoked directly from fluid.rawDefaults, that it is actually suitable for this purpose - the name of the field is slightly misleading. There seems huge scope for confusion with this implementation since the rules for \"collision of soft namespaces\" (which is to behave as if there is no collision and register both listeners) directly conflict with the rules apparently required by this JIRA (collision actually causes replacement). As the JIRA observes, it is the exact listener record itself which must be tagged, and in an entirely unique way - as opposed to the human-readable \"woolly\" way which leads to the soft namespace string.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T16:11:07.867-0400",
      "body": "Listeners are now fully tagged with \"componentSource\" annotations as part of the <https://fluidproject.atlassian.net/browse/FLUID-5733#icft=FLUID-5733> work - this should be easy to resolve if it is not already\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-07T16:07:22.066-0400",
      "body": "A further and more intractable version of this issue has transpired with respect to \"members\". The user has a grade (ironically the same one as in this headline JIRA) named \"flock.synth\" which contains a highly expensive \"members\" definition. This definition is contributed twice, which is undesirable. This has regressed as a result of the stopgap fix for <https://fluidproject.atlassian.net/browse/FLUID-5668#icft=FLUID-5668>. \"members\" no longer follow the default workflow for grade merging, which operates MERGING BEFORE EXPANSION. Instead, especially since the \"model\" area of components we still attempt to implement as a standard \"member\", we needed to take control of the expansion behaviour manually. Also, a case emerged (the <https://fluidproject.atlassian.net/browse/FLUID-5668#icft=FLUID-5668> case) where a kind of \"proto model\" was assembled from various contributions - where merging after expansion was clearly required.\\\nIt's hard to see a clear way out of this - perhaps only by significantly improving both the \"members\" workflow as well as our support for mergePolicies which will allow user's policies in this respect to be expressed clearly.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-07T16:19:43.398-0400",
      "body": "As a current experiment, adding a mergePolicy of \"members.synthDef\": \"replace\" had no effect on the double contribution\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-18T10:01:01.228-0400",
      "body": "This was effectively fixed with the <https://fluidproject.atlassian.net/browse/FLUID-5800#icft=FLUID-5800> fix in <https://github.com/fluid-project/infusion/pull/648> although we still have a good deal of work required in this area for <https://fluidproject.atlassian.net/browse/FLUID-5668#icft=FLUID-5668> and related issues\n"
    }
  ]
}
---
The current implementation of the grade merging algorithm (as specified and resolved in <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>) leads to incorrect results in the case of listener contribution, where the same grade is available through multiple paths in the grade hierarchy. For example, the following definitions inherit multiple times from "flock.synth":

```java
fluid.defaults("colin.greenwichPark.mutedSynth", {
        gradeNames: ["flock.synth", "autoInit"],
        synthDef: {
            id: "main"
        }
    });

            ukeClock: {
                type: "colin.greenwichPark.ukeClock",
                options: {
                    gradeNames: ["colin.greenwichPark.mutedSynth"]
                }
            }
```

where flock.synth has

```java
fluid.defaults("flock.synth", {
        gradeNames: ["flock.node", "flock.ugenNodeList", "autoInit"],
....

        listeners: {
            onCreate: {
                funcName: "flock.synth.addToEnvironment",
                args: ["{that}", undefined, "{that}.options", "{that}.enviro"]
            },
```

In this case, instantiation of the "ukeClock" subcomponent will end up contributing two copies of the "addToEnvironment" listener to its onCreate event.

This is what the current <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085> algorithm requires - since each additional copy of the grade's definition must indeed be added to the end of its merging grade chain. In the case of plain values this has a reasonable effect - later copies of the grade's values simply override the earlier values, which in most cases leaves them unchanged. In the case of listeners without a namespace, the effect is undesirable - our semantic requires these to be additive.

The only clear way which currently appears to resolve this situation is to special-case it in the framework (this is undesirable, but listener merging already involves a considerable amount of custom code). The framework should generate unique ids for each listener record as they enter the grade definitions (as it currently does for the synthesized "componentSource" field) and the listener record merging algorithm should discard any such duplicates.&#x20;

Other cases where such problems could arise involve the use of custom mergePolicies which could create other sites with "accumulative" semantics. It's unclear we can solve this issue any more generally without thinking even harder about the <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085> semantics.&#x20;

However, one route by which we can aid users to create such "mixin" grades is to create a standard "fluid.component" grade with absolutely no contents, which is used wherever we apply "unbound" or other such mixins to make a grade "as empty as possible" of possibly re-overriding material (for example, "fluid.littleComponent" harbours a danger, since it might overwrite an argumentMap contributed by a "fluid.viewComponent" earlier in the chain).

        
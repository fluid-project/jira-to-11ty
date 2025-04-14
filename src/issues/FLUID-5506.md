---json
{
  "title": "FLUID-5506",
  "summary": "Implement constraint-based priority scheme to compute order of notifying listeners",
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
  "date": "2014-09-04T09:00:04.358-0400",
  "updated": "2020-02-14T07:18:30.564-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5578/",
      "key": "FLUID-5578"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:01:54.345-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:06:48.377-0400",
      "body": "Note that the \"partial sorting\" idea was a very long-term red herring. User's don't want, when they designate one item \"before:another\", to simply designate a \"general constraint that it is before another\" - and to be otherwise happy with any ordering consistent with this constraint. What they actually mean to say is, \"in the absence of any specifically intervening item requesting to be placed in the interval between me and another, I should be placed DIRECTLY before another\". Thus the so-called \"constraints\" are not actually \"constraints\", they are actually \"disposition designators\" or some other such unrecognisable term. This is not dissimilar to the kinds of designators accepted by the ancient \"fluid.permuteDom\" utility implemented as part of the Reorderer.\n"
    }
  ]
}
---
Our current "fixed number" based listener priority system is creaking at the seams somewhat, and will soon result in outright failures. One source of stress, for example, is the fixture sequencing performed in the IoC testing framework, in which elements of a sequence can register listeners attached to the implementation under test, whose purpose is to determine when the next fixture is to execute. Some of these can be quite destructive in their effects - for example, when the next fixture requires the component tree to be destroyed and then recreated in order to run a new test suite. For this reason it's important that these listeners have very low priority and execute only after the implementation's own listeners have run, in order to avoid corrupting the tree.

For this reason, for example, in this situation we will apply these sequence listeners with priority "last". This is only unproblematic if the underlying implementation is not using this low priority value itself. So far we have got away with this, but problems are most likely just around the corner.

Another similar situation has arisen with respect to notification of failure handlers. Our "pushSoftFailure" system applies one semantic for interaction of multiple handlers for a "failure event" - they can be added to a stack, of which only the top member is active. This was found useful in test cases which need to test the action of a failure handler and then restore the system default. However, a more complex setup of citizens competing to register failure handlers fails. For example, we have jqUnit - which requires to register a failure handler which causes any current test to fail. Then we have kettle - which requires to register a failure handler which aborts any current request, as well as triggering custom logging. We have the superposition of these two cases - and then finally we have the original case of an individual test fixture registering a custom error handler which must then be undone at the end of the fixture.

Currently our system fails in the "superposition" case - since via pushSoftFailure, kettle's failure handler trumps jqUnit's. It would be useful to be able to augment this system which fires a global failure "event" operating our standard semantics for namespacing, which would allow citizens to replace other handlers in a targetted way. What would be even better is if namespaced listeners followed the same "stack" semantics as pushSoftFailure - in that the unregistration of a namespaced listener which had displaced a predecessor in the same namespace, restored it rather than, as would currently happen, leaving no handlers after being unregistered. Finally, to complete support, we would like to be able to make explicit assertions about the relative ordering of notifying listeners amongst each other, rather than relying on an arms race involving "guessing fixed numbers".

This proposal would allow the use of namespace values within priority values, as follows:

```java
listeners: {
    myEvent: [{
        name: "listenerOne",
        namespace: "namespaceOne"
    }, {
        name: "listenerTwo",
        namespace: "namespaceTwo",
        priority: "after:namespaceOne"
        }
    ]}
```

Here the "after:" prefix allows the use of any namespace applied to a listener to this event in order to provide a constraint that, in this case, listenerTwo should always be notified after listenerOne. The "before:" prefix would operate analogously. We would retain the use of the old "last" and "first" names, but rather than being an alias for gigantic numbers, they would instead have the semantic of, for example, "notify me after all listeners that have not explicitly requested to be notified after me using 'after:'" (and the converse for "first").&#x20;

Implementation hint: this would finally require an explicit algorithm to operate partial sorting of the kind described in <https://en.wikipedia.org/wiki/Partial_sorting> to be introduced back into the system. These were initially believed to be implied by any IoC system but in practice any implementation avoided an explicit sort by use of a simple "demand-based" scheme - since the only constraint ever used was of the "after" kind, and the construction only occurred once. We retain the first simplification (probably) - since it is still overwhelmingly likely that users will apply "after:" rather than "before:" - however, in practice, we expect events to be fired many more times than listeners will be registered (except in cases of the still unimplemented "latched events" for FLUID-4883) and so it will be useful to be able to externalise the results of the sort for quick reuse.

That said, we could considerably simplify the algorithm if we were to, for now, only implement "after:" and continue to use the "demand-led" system in order to use it to compute a set of numbers having the current semantic of our priority numbers - but just now in a "event-specific" form. This would also involve the least disturbance to current implementation code.

        
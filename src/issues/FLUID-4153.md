---json
{
  "title": "FLUID-4153",
  "summary": "Create declarative scheme for deferring IoC-driven subcomponent instantiation to time of issuing an event",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-18T01:55:53.336-0400",
  "updated": "2014-03-03T13:13:00.652-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-29T23:12:08.016-0400",
      "body": "Now implemented in trunk, using the syntax described. This might only be really useful in rendering scenarios, however, other use cases have been subsumed by \"priority\" annotation, and possibly in future, by TYPE FOUNTS.\n"
    }
  ]
}
---
The new signature for "fluid.initDependent" introduced as part of the work for FLUID-4055 now provides the affordance for users to create IoC driven subcomponents at arbitrary later times, but this puts them to the responsibility of a lot of "plumbing" - they need to inject an "instantiator", find a "special place" to store component configuration so it is not inadvertently instantiated by the system, and then fish it back from this place when calling initDependent. Much more ideal would be a syntax and semantic which allows deferred component instantiation to be specified purely declaratively. A successful implementation would also bridge the way to "renderer antigen" work - it is an important requirement there that subcomponents are reinstantiated not only ONCE at some future time, but repeatedly, according to the rendering event cycle for the parent component.

A proposed syntax simply involves introducing an extra entry into the subcomponent record, named "createOnEvent" - for example,&#x20;

fluid.defaults("fluid.tests.initFunctions", {\
gradeNames: \["fluid.eventedComponent", "autoInit"],\
events: {\
mainEvent: null\
},\
components: {\
eventTimeComponent: {\
type: "fluid.tests.recordingComponent",\
createOnEvent: "mainEvent",\
options: {\
...\
} \
}\
}\
});

defines an component of the "evented grade" with one subcomponent, a "deferred subcomponent". The entry "createOnEvent" may mention one or more names of events attached to the component, such that when the component fires them, the subcomponent will be constructed - that is, its construction is deferred until this time, rather than occuring synchronously with the fluid.initDependents() call as part of the component's main construction.

        
---json
{
  "title": "FLUID-4191",
  "summary": "Implement \"type founts\", which allow the definition of components which \"unexpectedly\" produce type tags to be automated to a declarative form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-22T22:40:02.145-0400",
  "updated": "2011-07-08T16:21:52.558-0400",
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
      "author": "Justin Obara",
      "date": "2011-05-17T10:11:49.379-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-18T16:52:21.933-0400",
      "body": "Implemented with the described features in 1.4\n"
    }
  ]
}
---
Three use cases have now emerged, motivating the creation of a "small framework feature" to help component writers who write components which "unexpectedly" produce fluid.typeTag instances to guide IoC resolution. In actual fact, most practical uses of fluid.typeTag() could be considered "unexpected" in this way - by which we mean, creation of a type tag whose tag name is NOT visible in the IoC tree as it stands in its declarative form. Since tags themselves should not appear in unexpanded trees (since they really actually constitute components) this means the framework feature should actually cater also for **all** cases where a type tag is created.

The three use cases were:\
i) Use of the progressiveChecker for progressive enhancement (by Uploader)\
ii) Use of the "cspace.tab" tag for marking out CSpace pages by JURA\
iii) Use of a "version" tag within a test case for model transformation (and presumably by other users of options chewing in the future too)

The feature introduces a "micro component" named fluid.typeFount, together with a grade name of the same name. The component has the feature of accepting an option named "targetTypeName" and returning a type tag with that name. The grade and the component both enjoy the following "development courtesy feature", that if no "priority" annotation has been placed on a subcomponent definition in the IoC tree of one of these types, the value "first" will be supplied - this is to ensure that no non-determinism occurs in the instantiation of subcomponents due to a "type fount" (which was presumably placed there for the purpose of guiding the instantiation of OTHER components) being instantated too late.

The option is named "targetTypeName" rather than plainly "typeName" to make sure that it is never possible to mistake configuration material for components - a component is directly defined as being an object enjoying the property "typeName" at top level.&#x20;

        
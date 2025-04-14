---json
{
  "title": "FLUID-4335",
  "summary": "Add possibility for \"proleptic binding\" in declarative listener binding specifications",
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
  "reporter": "Cindy Li",
  "date": "2011-07-12T15:56:28.566-0400",
  "updated": "2014-03-03T13:05:42.458-0500",
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
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4873/",
      "key": "FLUID-4873",
      "summary": "Introduce downward-matching CSS-like context selectors for options forwarding and other IoC use cases"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4257/",
      "key": "FLUID-4257",
      "summary": "Add \"destruction\" lifecycle point and semantics into component system and IoC"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-10T22:46:04.712-0500",
      "body": "This issue is subsumed by the \"IoCSS\" or \"Luke Skywalker options\" work package described in <https://fluidproject.atlassian.net/browse/FLUID-4873#icft=FLUID-4873>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-25T05:41:40.675-0400",
      "body": "There should now be enough framework in existence to support this use case - however, we need explicit tests and an exercise of the functionality in the upcoming UIOptions refactoring.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-09-19T03:39:38.424-0400",
      "body": "This issue has most likely been resolved by improvements to the framework in the last two years. The so-called \"proleptic binding\" can be achieved via IoCSS distribution, and the automatic deregistration of listeners referred to now occurs.\n"
    }
  ]
}
---
This is analogous to the facility supplied by jQuery.live() and jQuery.delegate() event binding functions: When a listener or event binding specification refers to a component which does NOT YET EXIST via "{component}.events.Xxxxx" type specification, this should be converted into a specification to supply the relevant configuration to such a component that WILL BE MATCHED when it is constructed via "createOnEvent".&#x20;

ALSO - further interaction is required between the IoC system and the "clearComponent" function - when a component is cleared from the tree, any listeners that were bound WITHIN it on its behalf by the IoC system should be removed. This implies that there needs to be a standard "destroyComponent" lifecycle point.

        
---json
{
  "title": "FLUID-4170",
  "summary": "Interaction between lifecycle functions is uncoordinated, resulting in unpredictable action and unexpected loss of grade-specific defaults",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-01T04:43:51.286-0400",
  "updated": "2014-03-03T13:11:42.593-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
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
The action of the "graded lifecycle functions" named preInitFunction, initFunction, postInitFunction and finalInitFunction has been implemented in an "ad hoc" way, which makes it unlikely that the action of multiple lifecycle functions registered at different grades or at the same grade can be successfully coordinated. In particular, a "plain preInitFunction" registered for a particular component right now will destroy the action of the grade-specific default for "fluid.modelComponent". Likewise, users may wish to override the action of grade-specific lifecycle functions in a controlled way.\
The best way to resolve this situation is to appeal to the existing Fluid events system. Although lifecycle functions execute exactly once, all of the same protocol for priority and namespacing as well as interaction across options merging is precisely that required to operate the coordination we require.\
Furthermore, adopting the same mechanism and semantics as the event system will allow users who are familiar with it to transfer their knowledge to lifecycle functions, and vice versa.\
A slight change in syntax for the model-bearing grade's "preInitFunction" will be required to accommodate this change.

        
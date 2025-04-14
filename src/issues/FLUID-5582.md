---json
{
  "title": "FLUID-5582",
  "summary": "Improve flexibility of fluid.fail handling further",
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
  "date": "2014-12-19T09:14:41.279-0500",
  "updated": "2017-02-27T15:49:11.958-0500",
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
      "type": "Duplicate",
      "url": "/browse/FLUID-5518/",
      "key": "FLUID-5518"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:36:09.157-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
With <https://fluidproject.atlassian.net/browse/FLUID-4842#icft=FLUID-4842> we introduced a system of allowing an arbitrary function to be accepted into the a stack of fluid.fail() handlers. This bought us some flexibility, but now we are working across multiple projects in multiple environments (e.g. with or without jqUnit, with or without node.js) we need yet further flexibility. With <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506> we started to introduce the "namespace stacking" system, and this was used to "break out" the node.js uncaught exception handler into individually named, individually schedulable units. We need to do the same for fluid.fail() itself now, to allow different aspects of its handlers to be named and addressed separately. For example, in node-jqUnit, we would like to override just the fail behaviour to throw an exception rather than perform the peculiar hard error triggering that we do in the browser environment. The error produced on the node console by the latter is needlessly confusing, and node's behaviour (and its debuggers') is adequate on receiving a standard uncaught exception.

        
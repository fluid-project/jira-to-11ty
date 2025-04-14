---json
{
  "title": "FLUID-5032",
  "summary": "Allow forward reference to material in a grade hierarchy which has not yet been defined",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-06-03T17:21:22.510-0400",
  "updated": "2014-03-03T11:49:25.609-0500",
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
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-30T01:28:23.716-0400",
      "body": "Merged into trunk at revision ba09d84\n"
    }
  ]
}
---
Debugging into FLUID-5030 exposed an annoyance in the framework - when creating an "autoInit" function for a component which contains a reference to a grade which has not yet reached fluid.defaults, the graded material will simply be ignored. We should adjust the timings of constructing defaults such that it occurs only on the first actual construction of a component. This is particularly helpful since we now permit cyclic grade references, and in the face of this there is no "correct" order to issue fluid.defaults statements.

This unfortunately makes harder another requirement, the ability to clear the cache of material depending on a particular grade which came to light during Colin's visit in considering use cases for Flocking.

        
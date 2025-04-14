---json
{
  "title": "FLUID-3276",
  "summary": "Enclosing branch nodes within markup which has \"headers\" attribute causes them to become invisible to the renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-10-09T13:28:45.000-0400",
  "updated": "2014-04-02T15:16:28.830-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:16:28.829-0400",
      "body": "We will be rewriting the renderer instead of fixing this.\n"
    }
  ]
}
---
Resulting in the "headlumps is undefined" message when the renderer attempts to resolve a reference from the component tree to a markup section which should be seen as nested. This occurs because the "scr=null" ID is applied to any node which has "for" or "headers" attributes since these need to be rewritten by the renderer. Unfortunately this interrupts the containment relationship between the upper and lower container.

This error should also be upgraded to be more meaningful.

Originally reported by James AINGG.

        
---json
{
  "title": "FLUID-3491",
  "summary": "Improve renderer diagnostics to help explain cases where markup is not rendered",
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
  "date": "2010-02-09T14:01:50.000-0500",
  "updated": "2014-07-14T09:42:25.742-0400",
  "versions": [
    "1.1.2",
    "1.3",
    "1.4",
    "1.5"
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
      "author": "Justin Obara",
      "date": "2010-10-04T15:23:19.422-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    }
  ]
}
---
It is quite easy to supply trees and markup to the renderer which render nothing at all - and the existing "debugMode" diagnostic does not currently explain all of these cases. In the short term, improve this capability so that helpful diagnostics are emitted in as many cases as possible, and in the long term, provide a form of "renderer app" which helps to visually explain and debug the rendering process.

        
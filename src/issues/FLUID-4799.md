---json
{
  "title": "FLUID-4799",
  "summary": "More than one event listener registered by global function name will be ignored",
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
  "date": "2012-09-24T03:45:06.557-0400",
  "updated": "2024-07-22T09:36:17.085-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-10-09T17:23:29.203-0400",
      "body": "Merged into project repo at 64a0a0a7f4df2e4d3a689960602003d3b0721c97\n"
    }
  ]
}
---
The event optimisation work committed as part of FLUID-4776 introduced a regression. Where more than one listener for an event is supplied as a "bare global function name" (with no namespace record or literal function handle, etc.), only the last such listener will be honoured.

This problem was encountered in videoPlayer work, where a grade structure for fluid.videoPlayer.languageMenu accumulated two such listeners.

        
---json
{
  "title": "FLUID-5112",
  "summary": "Composite events will fire multiple times if only one of it's events are fired multiple times",
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
  "reporter": "Justin Obara",
  "date": "2013-08-08T16:16:34.003-0400",
  "updated": "2015-06-17T10:31:22.230-0400",
  "versions": [],
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
      "author": "Justin Obara",
      "date": "2013-08-08T16:22:32.452-0400",
      "body": "Pull request with an unit test demonstrating the issue has been sent.\\\n<https://github.com/fluid-project/infusion/pull/385>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-11-18T20:25:33.031-0500",
      "body": "Fix merged into trunk at revision cfc51e89663d73524663c8591e65af1a74ff6830 - Aug 19 2013\n"
    }
  ]
}
---
If you register a composite event and all of its aggregated events are fired, firing one of those events again will trigger the composite event to also fire. What should happen is that the composite event should only fire once all of it's aggregated events have all fired again.

        
---json
{
  "title": "FLUID-4684",
  "summary": "Upgrade framework to work with jQuery 1.7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2012-04-02T16:51:35.147-0400",
  "updated": "2024-07-22T09:38:48.394-0400",
  "versions": [
    "1.4"
  ],
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
      "date": "2012-06-29T16:11:08.795-0400",
      "body": "Merged into project repo at 1f04a22ae5f3520c4939cfbc3fced034e02743e0\n"
    },
    {
      "author": "Chris Hubick",
      "date": "2014-07-07T17:14:09.646-0400",
      "body": "It would be great if whatever limited time Infusion developers have for project maintenance could be directed towards at least remaining compatible with current JQuery releases.  As I'm sure is the case with most clients, I use JQuery in my project for a lot of purposes besides just the Fluid Reorderer, and this bug has been preventing me from upgrading, which is starting to impact compatibility and features in other areas.\n\nIt's nice that Infusion will now work with at least JQuery 1.7, but they've since moved up to the 2.1.x release series.  Has the forthcoming Infusion 1.5 release at least been smoke-tested against JQuery 2.1?\n\nI'm glad to hear the 1.5 release is at least now imminent - Much Thanks :warning: for your continued work on this project.\n"
    }
  ]
}
---
Reports are coming in of serious failures with the latest jQuery (1.7.2 at time of writing)

FLUID-4682: Failure with Layout Reorderer\
<https://fluidproject.atlassian.net/browse/FLUID-4683#icft=FLUID-4683>: Failure with Inline Edit

        
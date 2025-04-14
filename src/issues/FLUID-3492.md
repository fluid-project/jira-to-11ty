---json
{
  "title": "FLUID-3492",
  "summary": "fluid.stringTemplate inserts undefined if it is passed an integer in the args.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-02-09T14:49:47.000-0500",
  "updated": "2014-03-03T14:11:59.936-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-12-06T02:26:38.366-0500",
      "body": "I believe this was really a fault in the renderer's UIMessage resolution system, rather than in stringTemplate, which has had test cases for number substitution since inception. This should have been resolved in the 1.3 release.\n"
    }
  ]
}
---
fluid.stringTemplate inserts undefined if it is passed an integer in the args.

        
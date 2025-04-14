---json
{
  "title": "FLUID-4789",
  "summary": "Pager does not support optional templates.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2012-09-05T10:28:26.667-0400",
  "updated": "2014-03-03T12:41:26.650-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:16:27.791-0400",
      "body": "Merged into trunk at revision acf4633 - Page now uses standard (old-style) RendererComponents throughout\n"
    }
  ]
}
---
Pager does not support optional templates. It also has issues when template that contains rsf:id's is being injected into markup dynamically.

        
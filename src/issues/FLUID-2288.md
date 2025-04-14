---json
{
  "title": "FLUID-2288",
  "summary": "OSDPL: Workflow may be executing more than one rule per action.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-02-23T11:55:58.000-0500",
  "updated": "2009-02-23T12:20:20.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-23T12:20:20.000-0500",
      "body": "Turns out Save and Update appear to do the same thing, except that with update you can affect either the updated or original content.\n\nFor now, I have removed all Update rules and now using only Save rules.\n"
    }
  ]
}
---
When content is modified to "Review" state, duplicate log messages being generated and inserted into the workflow\_ng\_log\_node table.

This could be an indication that multiple rules are being executed per user action.

        
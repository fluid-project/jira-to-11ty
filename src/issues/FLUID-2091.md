---json
{
  "title": "FLUID-2091",
  "summary": "OSDPL Front Page: Remove \"Welcome to the OSDPL\" title.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-08T10:55:03.000-0500",
  "updated": "2009-01-26T09:05:07.000-0500",
  "versions": [
    "0.6"
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
      "date": "2009-01-22T13:52:37.000-0500",
      "body": "iteration25\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-22T13:52:51.000-0500",
      "body": "Fixed using Panels.\n"
    }
  ]
}
---
Remove "Welcome to OSDPL" line, replace it with the description of what the OSDPL is, reduce what is a design pattern is so everything moves up a bit.&#x20;

Sounds easy however this means we will need to suppress the title for the Main Page which requires customization or a node title supression module.

An alternative to this would be to compose the front page entirely by blocks and not use a node to contain everything.

        
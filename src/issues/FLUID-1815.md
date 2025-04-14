---json
{
  "title": "FLUID-1815",
  "summary": "OSDPL: Browse All View no longer working.",
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
  "date": "2008-11-17T15:40:27.000-0500",
  "updated": "2011-02-22T16:27:58.082-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-11-17T15:40:49.000-0500",
      "body": "iteration22\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:58.080-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
After cloning the "patterns\_by\_category" View for another feature, the patterns by category View no longer works properly without an argument.

Example:\
doing /design-patterns/10 would list all nodes under vocabulary ID 10.\
but doing /design-patterns/ would display a "No patterns found" message instead of all the design patterns in the library.

        
---json
{
  "title": "FLUID-1814",
  "summary": "OSDPL: Top rated patterns displaying unpublished content.",
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
  "date": "2008-11-17T15:37:45.000-0500",
  "updated": "2009-02-18T09:34:40.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.8"
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
      "date": "2008-12-03T10:18:30.000-0500",
      "body": "iteration27\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-18T09:34:39.000-0500",
      "body": "Fixed. The Top Patterns view was not filtering unpublished content.\n"
    }
  ]
}
---
The Top patterns block in right sidebar also displays unpublished content. To fix this, add a "Node: Published" filter to the View. But when you do this, you get an mySQL error. You will need to fix this too.

        
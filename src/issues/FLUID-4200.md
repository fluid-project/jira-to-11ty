---json
{
  "title": "FLUID-4200",
  "summary": "Renderer component's tree falls into infinite recursion (due to the implementation of withEnvironement).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2011-05-03T17:34:03.023-0400",
  "updated": "2014-03-03T13:09:22.619-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-05-23T16:09:58.050-0400",
      "body": "Insufficient detail on this issue to characterise and fix. Please re-report if still causing problems.\n"
    }
  ]
}
---
There are 2 causes:

* composePath does not accept "undefined" but ""
* change applier should be used with configuration set to thin

        
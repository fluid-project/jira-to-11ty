---json
{
  "title": "FLUID-204",
  "summary": "Portlet layout wrapper should take in and return id's of items.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2008-02-04T18:13:22.000-0500",
  "updated": "2011-02-22T16:27:57.638-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.637-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, the portletayout object's functions sometimes takes an element (a portlet), and sometimes takes an element's id.  Also, some functions return an element while others return an element id.  The data that the wrappers use know only about id's.  Hence, the wrapper should consistently deal in id's.

        
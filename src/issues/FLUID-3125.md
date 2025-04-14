---json
{
  "title": "FLUID-3125",
  "summary": ".fluid-vertical-order and .fluid-horizontal-order dont conform to conventions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-08-21T14:18:16.000-0400",
  "updated": "2015-06-26T10:15:55.878-0400",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-09T11:09:43.000-0500",
      "body": "These class names have been deprecated in favour of the following, fl-reorderer-horizontalLayout .fl-reorderer-dropMarker, but still remain for backwards compatibility.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T15:32:58.000-0400",
      "body": "There are class names in place that conform to conventions, as well as those for backwards compatibility\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:28.012-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
.fluid-vertical-order and .fluid-horizontal-order  class names need to be renamed

        
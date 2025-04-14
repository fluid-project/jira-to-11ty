---json
{
  "title": "FLUID-2349",
  "summary": "Data binding fails to propagate \"false\" values from individual checkbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-03-13T16:30:49.000-0400",
  "updated": "2011-02-22T16:27:54.990-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-03-16T14:10:44.000-0400",
      "body": "Fixed at revision 6749 with test case\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.989-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
On unchecking an individual checkbox rendered with autobind, a "false" value is not propagated to the model

        
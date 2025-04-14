---json
{
  "title": "FLUID-847",
  "summary": "As a convenience, consider also passing back a string with the value of the changed text as the second argument.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-01T16:17:35.000-0400",
  "updated": "2011-02-22T16:27:57.032-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:13:59.000-0500",
      "body": "Appeared at revision 5965, along with general reform of event and model idiom.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.030-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
It might be nice to give the user the raw text in String form that changed when an InlineEdit has finished.

        
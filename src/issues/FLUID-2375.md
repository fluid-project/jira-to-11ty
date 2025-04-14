---json
{
  "title": "FLUID-2375",
  "summary": "Implement support for \"fluid\" decorator in renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Antranig Basman",
  "date": "2009-03-17T14:38:22.000-0400",
  "updated": "2011-02-28T16:45:15.780-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-13T18:26:59.000-0400",
      "body": "Implemented at revision 7113 - \\\nInlineEdit test cases expanded to test construction and retrieval of custom InlineEdit control via a renderer decorator.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.778-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Planned functionality, for which implementation was forgotten, was to support the "fluid component" decorator for the renderer. This is now necessary to complete implementation for UIOptions

        
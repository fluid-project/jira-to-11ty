---json
{
  "title": "FLUID-3485",
  "summary": "Renderer supplies \"headlumps is undefined\" message on request for a particular suffix which is missing from a prefix set",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-01-25T23:42:55.000-0500",
  "updated": "2014-07-14T09:41:41.644-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:41:02.394-0400",
      "body": "Antranig Basman was this changed in the refactoring done for 1.5? If not, could you please provide more information about what the specific error is and how to reproduce it?\n"
    }
  ]
}
---
This should be highlighted with a more specific message indicating the nature of the missing markup.&#x20;

        
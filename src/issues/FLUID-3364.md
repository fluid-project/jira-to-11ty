---json
{
  "title": "FLUID-3364",
  "summary": "HTML parser considers that attribute names terminate at hyphen character",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-11-05T16:55:38.000-0500",
  "updated": "2009-11-13T10:02:18.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
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
      "date": "2009-11-05T17:13:39.000-0500",
      "body": "Fixed at revision 8598 with test case... parsing of attribute names now conforms to XML standard.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:45:21.000-0500",
      "body": "Interesting that sveto ran into this problem <https://fluidproject.atlassian.net/browse/ENGAGE-179#icft=ENGAGE-179>, but we had assumed that it was just an issue with the structure of the code. I assume we won't often run into this issue in our own implementations as we tend to add aria programatically, but this should solve any issues for our integrators. Did a quick test and it seems.\n"
    }
  ]
}
---
In particular, modern aria attributes take the form "aria-readonly", "aria-disabled" etc. These are not properly handled by the parser and are considered duplicates.

        
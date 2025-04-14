---json
{
  "title": "FLUID-975",
  "summary": "Correct \"container\" semantics to use selectors throughout, rather than by Id",
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
  "date": "2008-07-22T18:20:47.000-0400",
  "updated": "2011-02-22T16:27:49.146-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Framework",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-22T18:21:33.000-0400",
      "body": "Fixed at revision 5250, test cases and samples updated\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.145-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
It has determined that it is desirable to improve global consistency by accepting ordinary selectors as instantiation arguments to components, and in particular as the String argument to fluid.container(). This requires updates to Fluid.js, its own tests, as well as all components using it and their tests (currently just InlineEdit).

        
---json
{
  "title": "FLUID-1108",
  "summary": "Implement merging algorithm for component options, allowing fine-grained declarative policy objects",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-08-06T13:31:17.000-0400",
  "updated": "2011-02-22T16:27:57.315-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-06T13:40:33.000-0400",
      "body": "Committed at revision 5328.\n\nDocumentation page for options merging is at <http://wiki.fluidproject.org/display/fluid/Options+Merging+for+Fluid+Components>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.314-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Many Fluid components are accumulating heaps of scattered manual "options merging code" which is designed to resolve priority between defaults registered with the framework and immediate user options. We should implement a central algorithm for managing options merging, with its policy stored in a declarative "merge policy object".

        
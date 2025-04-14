---json
{
  "title": "FLUID-3969",
  "summary": "Repeatable expander does not expand valuebinding.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2010-12-20T15:17:58.583-0500",
  "updated": "2014-04-02T15:46:47.015-0400",
  "versions": [
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3969/valuebinding.tests.patch.txt",
      "filename": "valuebinding.tests.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-12-20T15:18:55.715-0500",
      "body": "Broken test case attached.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-02T15:46:47.014-0400",
      "body": "The new implementation of the renderer will do away with this functionality.\n"
    }
  ]
}
---
Currently if valuebinding is explicitly specified inside the repeat expander and it uses a pathAs value as the value for valuebinding it will not be expanded.&#x20;

        
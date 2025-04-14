---json
{
  "title": "FLUID-138",
  "summary": "Fluid 0.1 ships with the full distribution of JSUnit, rather than a minimal set of the files we actually depend on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-12-01T02:32:47.000-0500",
  "updated": "2011-02-22T16:27:56.622-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-12-22T11:53:30.000-0500",
      "body": "I removed the entire bin and java folders, as well as build and properties files in the project root. This leaves us with only the licenses, test runner, and app folder.\n\nIdeally, we should move this out of the repository and into our maven repo instead.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.620-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, we distribute the entire JSUnit release package along with Fluid 0.1, despite only depending on a handful of files. We will need to cut our distribution of JSUnit down to a minimal core.

        
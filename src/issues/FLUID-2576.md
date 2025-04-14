---json
{
  "title": "FLUID-2576",
  "summary": "Dependency declaration JSON files should only be included in the src distribution, not in the production version.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-04-08T17:17:28.000-0400",
  "updated": "2011-02-28T16:45:15.183-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.133-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
At the moment we ship the dependency declaration files for the build system alongside our JavaScript code in both the src and production bundles. Since we want the production release to only include essential files, we should prune them out for the releaseBuild and customBuild targets.

        
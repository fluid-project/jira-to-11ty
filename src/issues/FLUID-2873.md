---json
{
  "title": "FLUID-2873",
  "summary": "Release 1.1: Generate and test release bundles",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-06-01T13:00:45.000-0400",
  "updated": "2011-01-14T10:37:17.530-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:20.747-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Compare the production bundle to the repository and ensure everything is present. Compare the two bundles - the only difference should be that the source bundle does not have a war file, the production bundle has minified javascript and the source bundle does not have minified javascript.

1.1-release-process

        
---json
{
  "title": "FLUID-2550",
  "summary": "Release 1.0: Generate and test release bundles",
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
  "date": "2009-04-06T23:01:54.000-0400",
  "updated": "2011-01-14T10:37:18.370-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2550/infusion-1.0.zip",
      "filename": "infusion-1.0.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2550/infusion-1.0-src.zip",
      "filename": "infusion-1.0-src.zip"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-04-09T15:18:58.000-0400",
      "body": "Bundles for Fluid 1.0\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-09T16:57:08.000-0400",
      "body": "Attempt 2 at a Fluid Infusion 1.0 Release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-09T18:39:43.000-0400",
      "body": "attempt number 4, please only use the files called infusion-\\<version>\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-10T13:43:27.000-0400",
      "body": "Tested, Released\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:21.248-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Compare the production bundle to the repository and ensure everything is present. Compare the two bundles - the only difference should be that the source bundle does not have a war file, the production bundle has minified javascript and the source bundle does not have minified javascript.

1.0-release-process

        
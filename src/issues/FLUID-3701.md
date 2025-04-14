---json
{
  "title": "FLUID-3701",
  "summary": "Generate and test release bundles",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Golam Chowdhury",
  "date": "2010-09-03T13:16:00.840-0400",
  "updated": "2011-01-14T10:37:20.446-0500",
  "versions": [],
  "fixVersions": [
    "1.2.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-09-08T13:52:26.917-0400",
      "body": "1.2.1 release tested on Uploader and SwfObject using Flash 6,9, and 10.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:20.342-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Compare the production bundle to the repository and ensure everything is present. Compare the two bundles - the only difference should be that the source bundle does not have a war file, the production bundle has minified javascript and the source bundle does not have minified javascript.&#x20;

        
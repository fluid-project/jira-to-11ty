---json
{
  "title": "FLUID-2236",
  "summary": "Release 0.8: Generate and test release bundles",
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
  "date": "2009-02-12T19:56:46.000-0500",
  "updated": "2011-01-14T10:37:17.821-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2272/",
      "key": "FLUID-2272",
      "summary": "Release 0.8: Missing Fluid dependency for InlineEditIntegrations.js"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2276/",
      "key": "FLUID-2276",
      "summary": "[Uploader] DemoUploadManager.js missing from the build dependencies"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2237/",
      "key": "FLUID-2237"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2236/fluid-0.8.zip",
      "filename": "fluid-0.8.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2236/fluid-0.8-src.zip",
      "filename": "fluid-0.8-src.zip"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-20T12:00:56.000-0500",
      "body": "Attaching bundles from the second fluid-0.8 tag\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-20T12:37:01.000-0500",
      "body": "Bundles have been built and have been tested\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:20.410-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Compare the production bundle to the repository and ensure everything is present. Compare the two bundles - the only difference should be that the source bundle does not have a war file, the production bundle has minified javascript and the source bundle does not have minified javascript.

0.8-release-process

        
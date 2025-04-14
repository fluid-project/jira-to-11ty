---json
{
  "title": "FLUID-2276",
  "summary": "[Uploader] DemoUploadManager.js missing from the build dependencies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-02-19T19:44:02.000-0500",
  "updated": "2011-02-22T16:27:54.376-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2236/",
      "key": "FLUID-2236"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2276/fluid-0.8.zip",
      "filename": "fluid-0.8.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2276/fluid-0.8-src.zip",
      "filename": "fluid-0.8-src.zip"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-19T19:55:18.000-0500",
      "body": "Here are the bundles which fix this bug. This would be the latest testing bundle for the 0.8 Release created at 4:54pm (PST)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-20T08:28:01.000-0500",
      "body": "I have set up a testing task list for this at the following wiki page.\\\n<http://wiki.fluidproject.org/display/fluid/Release+Package+QA+Test++Plan>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.374-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The DemoUploadManager.js file was left out of this line:

fluid\_uploader\_order\_of\_dependencies=FileQueue.js,SWFUploadManager.js,Scroller.js,Progress.js,Uploader.js

        
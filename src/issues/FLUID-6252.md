---json
{
  "title": "FLUID-6252",
  "summary": "MessageResolver.js missing from infusion-all.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-02-27T13:24:26.979-0500",
  "updated": "2018-02-27T13:56:39.110-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-02-27T13:56:34.955-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/878) has been merged into the master branch at 08741e8440484b42675bd5bb97941380a35bee27\n"
    }
  ]
}
---
The MessageResolver.js is not included in the frameworkDependencies.json file, and as such, is not included in builds of infusion. To fix this, the path to MessageResolver.js needs to be added to the files block of the frameworkDependencies.json file.

        
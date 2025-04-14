---json
{
  "title": "FLUID-6310",
  "summary": "Upgrade gpii-grunt-lint-all to address the missing infusion dependency in fluid-publish",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-07-26T08:58:27.875-0400",
  "updated": "2018-07-26T09:09:25.679-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-07-26T09:09:25.667-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/fluid-publish/pull/13> ) into the project repo at f9a4e173e27b906364992b7d6661c3b8e554d84e\n"
    }
  ]
}
---
In the current version (v1.0.0) of gpii-grunt-lint-all has a bug (<https://issues.gpii.net/browse/GPII-3233>) which prevents it from running if the project it is running in doesn't already include Infusion. Fluid-publish itself does not require infusion, so this results in an error being thrown when trying to run the lint task. 

 

A dev release has been cut to address the issue in gpii-grunt-lint-all 1.0.1-dev.20180726T123617Z.19bce0e

        
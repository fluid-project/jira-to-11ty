---json
{
  "title": "FLUID-3905",
  "summary": "De-lint the framework and renderer code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-15T12:40:40.378-0500",
  "updated": "2011-08-12T11:17:49.161-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3757/",
      "key": "FLUID-3757",
      "summary": "Code cleanup for release 1.3"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-12T10:41:51.569-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-12T11:17:14.132-0400",
      "body": "In the future we may want to create a jslint option to specifically handle the comments in the arguments instead of using jslint:ok.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-12T11:17:42.227-0400",
      "body": "Pushed pull request <https://github.com/fluid-project/infusion/pull/132/files> into the project repo at 284a423e6f8a4885c13a50c1e3656dead3334dce\n"
    }
  ]
}
---
For the 1.3 release, we did not commit a final de-linting of the framework and renderer files. Patches were attached to FLUID-3757 for this, but they were not reviewed and committed. We should apply those files and get the framework lint-free before 1.4

        
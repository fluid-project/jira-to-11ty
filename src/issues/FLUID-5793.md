---json
{
  "title": "FLUID-5793",
  "summary": "need to update the bugs and repository urls in fluid-publish's package.json file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-10-21T10:38:21.378-0400",
  "updated": "2016-07-08T09:03:48.073-0400",
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
      "date": "2015-10-21T10:48:18.046-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/fluid-publish/pull/2>\n"
    }
  ]
}
---
Currently the package.json file for the fluid-publish module contains some default urls for the repository and bugs url from the call to npm init. These should be updated to the appropriate fluid-project urls.

        
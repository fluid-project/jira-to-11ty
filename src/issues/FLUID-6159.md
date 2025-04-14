---json
{
  "title": "FLUID-6159",
  "summary": "ignore .vagrant directory for npm package",
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
  "date": "2017-05-29T08:43:19.965-0400",
  "updated": "2017-05-29T10:05:46.394-0400",
  "versions": [
    "2.0"
  ],
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
      "date": "2017-05-29T10:05:42.860-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/829) has been merged into the project repo master branch at aa043f795c830c7004490df1c692d4b603d69595\n"
    }
  ]
}
---
The .npmignore file is missing ".vagrant" which is created by the vagrant provisioning when setting up a VM for automated testing. This file should be ignored as it is not useful to share ( it is in .gitignore ).

        
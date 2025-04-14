---json
{
  "title": "FLUID-6401",
  "summary": "add an .editorconfig file to Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2019-09-23T15:29:06.106-0400",
  "updated": "2024-07-22T10:35:10.327-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6403/",
      "key": "FLUID-6403"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-23T15:30:11.798-0400",
      "body": "An example from C2LC <https://github.com/simonbates/c2lc-coding-environment/blob/C2LC-14/.editorconfig>\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2019-09-24T10:17:48.813-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/961>\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-25T14:54:29.137-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/961> ) at 78ce879d8ed1f27c8d1b392c4203827eb1891452\n"
    }
  ]
}
---
To go along with our linting rules, it would be good to add an editorcofig file ( [https://editorconfig.org](https://editorconfig.org/) ) as well so that the code environments could automatically set some of the coding conventions that we want to maintain.

        
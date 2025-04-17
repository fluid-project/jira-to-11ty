---json
{
  "title": "FLUID-6358",
  "summary": "Create flexible classification for governance of codebases",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Gregor Moss",
  "date": "2018-12-05T15:41:51.857-0500",
  "updated": "2024-07-22T10:35:26.896-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-01-20T13:24:43.615-0500",
      "body": "I've created a wiki page with my initial thoughts at <https://wiki.fluidproject.org/display/fluid/Project+Governance+Options>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-24T10:15:24.162-0400",
      "body": "Should also consider creating 1 or more repository templates to make creating new repos easier.\n\n<https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-24T12:39:48.375-0400",
      "body": "Ned Zimmerman has also suggested adding default community health files in GitHub.\n\n<https://help.github.com/en/articles/creating-a-default-community-health-file-for-your-organization>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-12-12T06:49:15.145-0500",
      "body": "The [Electron Governance](https://electronjs.org/governance) page has a nice layout.\n"
    }
  ]
}
---
"Community governance à la carte"

Put together a set of codebase requirements that can be mixed and matched according to the particular needs of said codebase for the purposes of review and merging into organizational projects on GitHub.

E.g. for Infusion, our prerequisites for merging involve detailed pull requests with complete test coverage and no direct pushing of the code into master. The Storytelling Tool, in contrast, may have less stringent requirements until it has fully "matured".

        
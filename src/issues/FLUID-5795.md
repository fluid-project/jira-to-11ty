---json
{
  "title": "FLUID-5795",
  "summary": "fluid-publish should commit and push a git tag for standard releases.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-10-21T12:49:30.141-0400",
  "updated": "2016-07-08T09:04:05.166-0400",
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
      "date": "2015-10-21T12:50:11.682-0400",
      "body": "This use case arose when publishing fluid-publish itself to NPM, tags were added after the fact.\n\n<https://botbot.me/freenode/fluid-work/2015-10-21/?msg=52429743&page=2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-22T12:22:45.730-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/fluid-publish/pull/4>\n"
    }
  ]
}
---
When publishing a standard release, it would be helpful if fluid-publish would tag the latest commit with the package.json version and push that tag to the upstream repository.

<https://git-scm.com/book/en/v2/Git-Basics-Tagging>

        
---json
{
  "title": "FLUID-6237",
  "summary": "Add code coverage artifacts to .npmignore",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-01-17T11:03:49.878-0500",
  "updated": "2018-03-01T10:31:39.060-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Release",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-03-01T10:31:35.557-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/870> ) into the repo at 420dd5d9853f1121ad500e1acf02a185eaaa6b81\n"
    }
  ]
}
---
The code coverage (added in <https://github.com/fluid-project/infusion/pull/822> ) adds some artifacts (coverage, instrumented, and reports directories). These should be excluded from the npm packages by adding them to .npmignore.

 

See channel conversation: <https://botbot.me/freenode/fluid-work/2018-01-17/?msg=95855037&page=1>

        
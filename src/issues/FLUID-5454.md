---json
{
  "title": "FLUID-5454",
  "summary": "The commit of \"html5shiv\" library introduces some 755 mode files into the infusion repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-06-23T09:54:53.382-0400",
  "updated": "2014-06-23T10:23:53.931-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-23T10:23:48.708-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/538> ) into the project repo at d4bca2deeca4e25ab1055a9a77e4b73a97441f5a\n"
    }
  ]
}
---
The infusion repo has two files with 755 access mode:

src/demos/prefsFramework/lib/html5shiv/js/html5shiv.js\
src/demos/prefsFramework/lib/html5shiv/readme.md

The proper access mode should be using 644.

        
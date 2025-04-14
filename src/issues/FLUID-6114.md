---json
{
  "title": "FLUID-6114",
  "summary": "Generate minified versions of JS and CSS in /dist directory in NPM",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-01-17T15:23:16.457-0500",
  "updated": "2024-07-22T09:18:07.413-0400",
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
      "author": "Justin Obara",
      "date": "2017-02-07T09:25:15.337-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/801> ) into the project repo at 5764b3e8c7e71ca4dfa3f1c850bc1737ba36424a\n"
    }
  ]
}
---
Part of getting onto CDNJS (<https://github.com/cdnjs/cdnjs/pull/10309>) is having minified versions of the CSS and JS as part of the distribution; at the moment, we only produce non-minified ones.

I've minified the files manually for now but this should be done as part of the buildDists process.

        
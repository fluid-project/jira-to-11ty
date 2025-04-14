---json
{
  "title": "KETTLE-43",
  "summary": "Improve test coverage for Kettle",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-05-10T20:58:18.862-0400",
  "updated": "2016-05-10T20:58:18.862-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The KETTLE-32 review at <https://github.com/fluid-project/kettle/pull/21/files> highlighted many spots where Kettle lacks test coverage, using the powerful and easy-to-use "Istanbul" project - <https://github.com/gotwarlost/istanbul> . The pull made significant progress in filling in these spots with new tests, getting the per-branch coverage above 90%, but several remain, particularly in the area of request wrapping. Whilst we don't necessarily advocate moving projects to 100% test coverage, we can make more progress for Kettle, especially since many test cases reveal correlated implementation flaws.

It looks like the Karma test runner is one of the prevalent ways of getting coverage information in the browser - <https://github.com/karma-runner/karma-coverage>

        
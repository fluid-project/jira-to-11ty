---json
{
  "title": "FLUID-6567",
  "summary": "Only run test suites when relevant code is changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-10-28T07:53:27.912-0400",
  "updated": "2020-10-29T14:09:18.340-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-28T09:43:32.853-0400",
      "body": "A potential further improvement: linting results should not differ based on platform, so we can probably remove all platforms except \\`ubuntu-latest\\` from the test matrix for the linting job. (I also wonder if linting results would differ based on Node version; I suspect not.)\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-28T09:50:21.501-0400",
      "body": "Reference to paths syntax: <https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-29T14:09:15.203-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1023> ) into the project repo at fa21180c08becc8be94c6fd333ef331226a473f5\n"
    }
  ]
}
---
As [discussed in Matrix](https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$d6qZpxyofOE0Vw64pi9uqPSHeXRScFYVQUDjPQcl8Hw?via=matrix.org) it would be helpful to only run the full test suite in Github Actions if Infusion code is modified. Skipping tests for docs updates (for example) would significantly reduce our usage of Github Actions minutes.

        
---json
{
  "title": "FLUID-5875",
  "summary": "Update node-jqUnit to the latest version of Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2016-03-13T13:25:30.703-0400",
  "updated": "2022-07-28T22:08:56.387-0400",
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
      "author": "Colin Clark",
      "date": "2016-03-13T13:34:13.745-0400",
      "body": "Pull request here: <https://github.com/fluid-project/node-jqunit/pull/9>\n"
    }
  ]
}
---
node-jqunit is currently using an older version of Infusion, which lacks the self-deduping functionality that was recently added. It should be upgraded to the latest version.

        
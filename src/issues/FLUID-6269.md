---json
{
  "title": "FLUID-6269",
  "summary": "Ansible error output is hard to read",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-03T13:36:57.286-0400",
  "updated": "2018-04-28T22:26:08.491-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6267/",
      "key": "FLUID-6267"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-04-03T18:30:46.323-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/893> ) into the project repo at 63281e3c6e0f30d0261fc52e3cb4bb64fe175efe\n"
    }
  ]
}
---
When a task that is running a command fails in Ansible, it adds that information to the "stderr" member of a JSON object and all newlines becomes items in a list, which makes it very hard to read.

Example: <https://buildkite.com/fluid-project/fluid-infusion/builds/166#52fa9dbc-db86-4f10-8191-ebabf5a3b522/18-235>

        
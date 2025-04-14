---json
{
  "title": "FLUID-6375",
  "summary": "Priority records parsed by fluid.parsePriorityRecords will have non-relative priorities corrupted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-04-15T09:32:30.784-0400",
  "updated": "2024-07-19T08:05:50.846-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-04-23T13:59:27.458-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/955) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/4b5fa743378a61806934c0856f5212280537d562).\n"
    }
  ]
}
---
The utility fluid.parsePriorityRecords will corrupt the priorities of any non-relative priorities (i.e. extremal priorities such as "first", "last" and any fixed or default priorities) since their string keys are sent into fluid.parsePriority as "index" rather than a numeric index. This, for example, will cause ContextAwareness records and adaptations to be misparsed in this way.

        
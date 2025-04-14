---json
{
  "title": "FLUID-4375",
  "summary": "The relative indentation should be the default for ToC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-28T14:21:15.670-0400",
  "updated": "2013-04-11T16:12:02.528-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:21:30.991-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-28T16:53:59.976-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/123>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-29T14:19:12.850-0400",
      "body": "Pull request merged into proejct repo at 172e7a56ec65233c8847d5ce12b5c1d34672fc0a\n"
    }
  ]
}
---
The fluid.tableOfContents.modelBuilder.gradualModelLevelFn should be the default model generation function used by the table of contents. This is the one that will generate the relative indentation.

        
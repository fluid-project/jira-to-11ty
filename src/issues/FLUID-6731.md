---json
{
  "title": "FLUID-6731",
  "summary": "Run CI on pulls against all institutional branches",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-05-09T09:15:30.396-0400",
  "updated": "2024-07-17T08:06:02.783-0400",
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
      "author": "Justin Obara",
      "date": "2022-05-09T09:33:53.822-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1076> ) into project repo at 4dec83d052b4a5a06d92ef02346702888661aa9e\n"
    }
  ]
}
---
Now we have started issuing pulls against maintenance branches such as 3.x and shortly 4.x, it would be helpful to have CI run on these branches. As per conversation in #fluid-tech on 2022-09-05 <https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$aSwHMWw8wNdoou9HrP5l6fZJRJDbCsKFjHIC-aKKGB0?via=matrix.org> we should adjust ci-build.yml to run on all pulls against institutional branches

        
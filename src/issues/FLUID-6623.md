---json
{
  "title": "FLUID-6623",
  "summary": "Backport KETTLE-49 system for writable DataSources to Infusion 3 branch",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2021-05-19T08:35:01.481-0400",
  "updated": "2021-05-19T14:35:29.881-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-19T14:35:24.661-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1050> ) into the project repo at f6b333fcefd391e2fbcddc2a5b1b9a2d544bfe41\n"
    }
  ]
}
---
As part of the docs work by @jobara for FLUID-6209 on <https://github.com/fluid-project/infusion-docs/pull/142> we noticed that fluid.dataSource will be a new API for Infusion 3.x so we may as well take the opportunity to backport the version which improves the writable configuration originally written up as KETTLE-49 which was currently only implemented in the FLUID-6580/FLUID-6148 or Infusion 4.x branches to avoid a breaking API change in two successive releases.

        
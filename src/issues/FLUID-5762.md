---json
{
  "title": "FLUID-5762",
  "summary": "Improve diagnostic when unrecognised priority constraint is supplied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-09-11T13:55:46.806-0400",
  "updated": "2017-02-27T15:49:18.182-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-09-11T14:22:38.326-0400",
      "body": "Antranig's pull request (<https://github.com/fluid-project/infusion/pull/635>) has been merged into the master branch @ 435c1b0aa5032772602c0c88f282e3c9b52be83d\n"
    }
  ]
}
---
As well as there being a typo (fluid.priorityTypes -> fluid.priorityType) the diagnostic for a faulty priority such as "10" should also indicate that numeric values are required/possible. See <https://github.com/cindyli/first-discovery/blob/FLOE-416/tests/js/firstDiscoveryEditorTests.js#L89> , see discussion in #fluid-work at <https://botbot.me/freenode/fluid-work/2015-09-11/?msg=49520809&page=1>

        
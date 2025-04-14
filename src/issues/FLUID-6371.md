---json
{
  "title": "FLUID-6371",
  "summary": "Dynamic components leak options record registered in parent",
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
  "date": "2019-03-21T10:50:55.379-0400",
  "updated": "2024-07-19T08:06:14.525-0400",
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
      "date": "2019-03-28T10:44:03.554-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/954) has been merged into the project repo at [this commit](https://github.com/fluid-project/infusion/commit/ec44dbfabe873c011a348919e1948a97c4ef1af7).\n"
    }
  ]
}
---
Testing with the GPII cloud-based flow manager at <https://issues.gpii.net/browse/GPII-3766> suggested a slow but persistent leak associated with request handling. Investigating with the heap inspector revealed a few pseudo-leaks in fluid.makeInvoker which will leak the most recently used arguments list. These are an annoyance in the heap inspector but not the cause of the true leak since they can't accumulate over time.

However, there is a genuine leak in fluid.registerDynamicRecord - <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidIoC.js#L679> which constructs an entry in the parent's "options.components" record for each contructed dynamic component, which is not cleared up. The heap inspector showed that this will leak 272 bytes per component which is broadly consistent with the observed rate of leakage.

Whilst the options records may be useful for introspection during the lifetime of the component, they should be cleared up on destruction.

        
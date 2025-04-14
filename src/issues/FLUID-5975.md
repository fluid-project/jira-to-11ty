---json
{
  "title": "FLUID-5975",
  "summary": "Document the fluid.contextAware.getCheckValue utility",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-09-30T11:22:32.279-0400",
  "updated": "2016-09-30T11:22:32.279-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This utility lies in a grey area given it is not marked as NON-API but does not have docs. \
<https://github.com/fluid-project/infusion/blob/master/src/framework/enhancement/js/ContextAwareness.js#L134>

This utility is primarily of interest to those implementing pieces of "proto-framework" but recently came up as of interest in <https://github.com/fluid-project/infusion/pull/757> for FLUID-5973 implementing improvements to condition test execution.

        
---json
{
  "title": "FLUID-6430",
  "summary": "Reconsider escaping rules for IoC references",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-11-19T11:56:51.830-0500",
  "updated": "2024-07-19T07:51:22.051-0400",
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
For long-standing and probably no longer valid reasons based on performance considerations during the CSpace era, Infusion does not support escaping rules when resolving general IoC selectors. Whilst we apply the "full" rules which, for example, encode "." as "\\." and "{" as "{" in ChangeApplier selectors, selectors used in general options are sent to the simplistic implementation in fluid.model.parseEL which simply applies String.split("."). This came to light in <https://issues.fluidproject.org/browse/FLUID-6429> where some test fixtures were written using an attempt to escape a CSS class selector. The escaping written was faulty, but because of this issue, there is probably no valid configuration that could have been written.

        
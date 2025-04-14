---json
{
  "title": "FLUID-6409",
  "summary": "Writing expander at top level in component options causes silent corruption",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-10-09T07:49:36.526-0400",
  "updated": "2024-07-19T08:01:02.679-0400",
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
The following construction should error out since a top-level expander is meaningless (in addition to encoding a free component)

```java
fluid.defaults("fluid.tests.fluid6408root", {
        gradeNames: "fluid.modelComponent",
        expander: {
            func: "fluid.component"
        },
        someLateOption: 42
    });
```

        
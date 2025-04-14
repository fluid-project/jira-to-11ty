---json
{
  "title": "KETTLE-50",
  "summary": "Remove \"kettle.dataSource.file\" from grade content of \"kettle.dataSource.file.moduleTerms\"",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-11-18T18:24:38.892-0500",
  "updated": "2020-09-30T12:15:29.356-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Still not having learned the general lesson of being very conservative when writing mixin grades. One can never anticipate the usage pattern of these and so should commit the user to nothing unnecessary. In this case, this caused the reuse failure at <https://github.com/GPII/universal/pull/457/files#diff-9102800a1302e572e6a60424aa2569e4R83> and duplication of the whole grade definition (admittedly just one line).

```java
/** A mixin grade for `kettle.dataSource.file` which automatically expands any %terms corresponding to module names registered in Infusion's module database */
fluid.defaults("gpii.flowManager.solutionsRegistry.dataSource.moduleTerms", {
    gradeNames: "gpii.flowManager.solutionsRegistry.dataSource",
    termMap: "@expand:fluid.module.terms()"
});
```

We can take the opportunity to rename this to something more suitable - "kettle.moduleTermMap" or so.

        
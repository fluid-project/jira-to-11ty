---json
{
  "title": "FLUID-6156",
  "summary": "Impossible to implement \"defaultable\" values in defaults via expanders returning undefined",
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
  "date": "2017-05-12T10:53:34.894-0400",
  "updated": "2021-01-08T11:14:26.615-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6219/",
      "key": "FLUID-6219",
      "summary": "Options expansion workflow for defaults is anomalous through performing merging before expansion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6587/",
      "key": "FLUID-6587"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Our irregular defaults merging algorithm (which performs merging before expansion, unlike the system used for distributions, subcomponents, etc.) leads to the impossibility of a useful feature - it would be useful to be able to override values in derived grades by values which may (via an expander return) be `undefined`, and as a result, retaining the original value. This would ordinarily be possible, but, for example, the following code fails:

```java
fluid.defaults("fluid.tests.undefinedMergeBase", {
    gradeNames: "fluid.component",
    option6: "OPTION6"
});

fluid.defaults("fluid.tests.undefinedMergeOver", {
    gradeNames: "fluid.tests.undefinedMergeBase",
    option6: "@expand:fluid.tests.returnUndefined()"
});

fluid.tests.returnUndefined = function () {};

jqUnit.test("FLUID-6156: Test ignoring of undefined values during merge", function () {
    var that = fluid.tests.undefinedMergeOver();
    jqUnit.assertEquals("Undefined value should have been ignored", "OPTION6", that.option6);
});
```

});

        
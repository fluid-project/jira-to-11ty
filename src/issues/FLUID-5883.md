---json
{
  "title": "FLUID-5883",
  "summary": "Add \"adaptationPriority\" field in contextAwareness API",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-04-01T12:02:50.032-0400",
  "updated": "2024-07-22T09:27:33.027-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Writing our "Onward" paper exposed a hole in our "convenience" encoding methods for the ContextAwareness API. There needs to be an "adaptationPriority" field accepted by the fluid.contextAware.makeAdaptation field to feed into the "true field" named priority attached to an adaptation record. The paper example reads:

```java
fluid.contextAware.makeAdaptation({
    distributionName: "onward.adaptations.antarcticDoubling",
    targetName: "onward.imageRenderer",
    adaptationName: "scaleDoubling",
    adaptationPriority: "before:yInversion", // no effect - just for priority demonstration
    checkName: "antarctic",
    record: {
        contextValue: "{onward.contexts.antarctic}",
        gradeNames: "onward.rendererAdaptation.doubleScale"
    }
});
```

        
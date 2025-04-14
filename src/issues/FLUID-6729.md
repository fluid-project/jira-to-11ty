---json
{
  "title": "FLUID-6729",
  "summary": "Attempt to store {sourcePath} in a component model provokes exception",
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
  "reporter": "Tony Atkins",
  "date": "2022-05-06T05:50:05.761-0400",
  "updated": "2024-07-22T10:35:08.552-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.1"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<https://github.com/fluid-project/infusion/pull/1072/files> actually harbours two distinct issues. As well as FLUID-6728, the exception "Cannot read property 'composeSegments' of undefined" is received when attempting to store any {sourcePath} value in the model. fluid.parseValidModelReference is unprepared for the case where the context target is not a component, and instead assumes that it must be a component with an applied.

```java
fluid.parseValidModelReference = function (that, name, ref, permitNonModel) {
....
    parsed.path = target && target.applier.composeSegments.apply(null, parsed.modelSegs);
}
```

We get here and target has been fully resolved to the referent of sourcePath, e.g. in the test case "coffee", so we have parsed.that of "coffee" and parsed.path = "". Since parsed.nonModel is correctly set to true, there won't be a further problem passing this odd reference out of the system.

        
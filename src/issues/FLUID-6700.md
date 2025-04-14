---json
{
  "title": "FLUID-6700",
  "summary": "Materialised binding makes validation workflow impossible due to backwash protection",
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
  "date": "2021-11-25T06:58:37.685-0500",
  "updated": "2022-02-03T10:40:05.344-0500",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The initial implementation of the "domOutput" materialiser makes it impossible to implement workflows which validate/reject updates originating from the DOM, since the backward leg of the materialiser was written with a source exclusion matching its own source. As a result of the "source globbing" we implemented in the ChangeApplier (described by <https://fluidproject.atlassian.net/browse/FLUID-5498#icft=FLUID-5498>), the update is considered sourced from the original DOM update triggered by the user, even if it is interrupted by a modelListener. We should probably just remove the guard from the implementation of fluid.materialisers.domValue which currently reads

```java
that.applier.modelChanged.addListener({segs: segs, excludeSource: "DOM"}, modelListener);
```

        
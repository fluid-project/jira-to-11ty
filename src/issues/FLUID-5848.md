---json
{
  "title": "FLUID-5848",
  "summary": "Detect indirect model references from IoC-qualified relay rules and model listeners",
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
  "date": "2016-01-23T15:32:10.386-0500",
  "updated": "2016-07-08T09:06:33.828-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The algorithm for parsing IoC-qualified model references in a modelRelay block isn't of sufficiently high quality.&#x20;

Firstly, when referring to a context which is not resolvable, we get no helpful diagnostic - just a raw exception inside fluid.enlistModelComponent.

Secondly, references to models by paths where the model is not directly nested in the context are not recognised as references to models - for example the following block

```java
modelRelay: {
                    target: "disabled",
                    singleTransform: {
                        type: "fluid.transforms.binaryOp",
                        operator: "===",
                        left: "{chaundles}.model.position",
                        right: "{chaundles}.scrollbar.model.lastPosition"
                    }
```

The reference to `right` is not recognised as a live model reference.

        
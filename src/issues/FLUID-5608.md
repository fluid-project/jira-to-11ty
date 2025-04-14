---json
{
  "title": "FLUID-5608",
  "summary": "fluid.transforms.valueMapper does not support \"false\" literal target values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Simon Bates",
  "date": "2015-03-26T10:37:09.354-0400",
  "updated": "2024-07-22T10:35:04.235-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5891/",
      "key": "FLUID-5891"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The fluid.transforms.valueMapper function contains the following logic:

```java
var indexed = deref(value);
if (!indexed) {
    // if no branch matches, try again using this value - WARNING, this seriously
    // threatens invertibility
    indexed = deref(transformSpec.defaultInputValue);
}
if (!indexed) {
    return;
}
```

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L258-L266>

If deref() finds a "false" literal value, it will be treated as no value found. This results in code like the following being necessary:

```java
singleTransform: {
    type: "fluid.transforms.valueMapper",
    inputPath: "",
    defaultInputValue: "otherwise",
    options: {
        "checked": true,
        "indeterminate": true,
        "otherwise": { outputValue: false }
    }
}
```

The use of "{ outputValue: false }" is necessary to give deref() a non-falsey value.

        
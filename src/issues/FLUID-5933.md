---json
{
  "title": "FLUID-5933",
  "summary": "fluid.transforms.literalValue does not allow failing over from inputPath to input...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-07-21T06:25:45.378-0400",
  "updated": "2024-07-22T09:23:38.329-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the [wiki entry for ](https://wiki.gpii.net/w/Architecture_-_Available_transformation_functions#Example_3:_Like_all_transforms_-_will_fall_back_from_path_to_direct_value)`fluid.transforms.literalValue`, we give an example of using `input` as a fallback if there is no value found at `inputPath`.  This is not actually the case, at least not for `literalValue`.  For example, here is a wrapper around the actual example code:

```java
/* eslint-env node */
"use strict";
var fluid = fluid || require("infusion");

var rules = {
    "": {
        transform: {
            type: "fluid.transforms.literalValue",
            input: "balloon",
            inputPath: "some.path"
        }
    }
};

console.log("Empty Object Produces:");
console.log(fluid.model.transformWithRules({}, rules));

console.log("Non-empty Object Produces:");
console.log(fluid.model.transformWithRules({ some: { path: "*POP*"}}, rules));
```

That produces the following output:

```java
Empty Object Produces:
balloon
Non-empty Object Produces:
balloon
```

The `input` value always wins, which is not at all what the docs suggest.  However, if we use `fluid.transforms.value` instead of `fluid.transforms.literalValue`, the results are as expected:

```java
Empty Object Produces:
balloon
Non-empty Object Produces:
*POP*
```

The wording there specifically says "like all transforms", `fluid.transforms.literalValue` will fallback, so if `literalValue` is not meant to support this, the example should be moved under `fluid.transforms.value` and the wording should be changed to "like most transforms" or something more accurate.

        
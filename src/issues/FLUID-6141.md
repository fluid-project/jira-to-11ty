---json
{
  "title": "FLUID-6141",
  "summary": "The auxBuilder maps all model properties in a preferenceMap object to the same relayed model property",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-03-02T13:29:27.945-0500",
  "updated": "2024-07-22T10:35:26.658-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently if you specify a prefernceMap on a panel, the auxbuilder will loop through and pull out the paths that start with "model." and create a model relay to a model value keyed by a "safe" version of the preferenceMap key it is defined in.&#x20;

Example:

```java
preferenceMap: {
            "fluid.prefs.textSize": {
                "model.textSize": "default",
                "model.range.min": "minimum",
                "model.range.max": "maximum",
                "model.step": "divisibleBy"
            }
        },
```

In this case all of the model paths specified on the left side will be assigned the exact same model relay value on the right side.

Each preference is expected to be a single model path, which could have various types of values. ( see the primary schemas ). However there are cases where the panel itself may want to operate with a different model structure. We should allow for the other values to be mapped to any model path within the panel component, and use "default" as a keyword to define what will be assigned the model relay to the preference value.

        
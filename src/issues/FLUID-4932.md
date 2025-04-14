---json
{
  "title": "FLUID-4932",
  "summary": "Add support for a wildcard mergePolicy.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2013-03-12T16:08:27.848-0400",
  "updated": "2018-11-01T10:47:58.762-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently there's not support for a wildcard mergePolicy.

For example we would like to be able to declare the following policy:

```json
mergePolicy: {
    "*.someObject": "noexpand"
}
```

Which would result in no expansion for every second level (in the tree) "someObject" object.

The issue first arose in GPII's lifecycle manager where we used now removed non-api function fluid.resolveEnvironment. We switched to using fluid.expand that acts almost in the same way. The noticeable difference between the two was that the latter one actually knows how to handle expanders (unlike the former).\
The object that was expanded with fluid.expand contains expanders but in the path that should not be expanded by the utility. Thus we were required to write an optional mergePolicy that would indicate that that particular path doesn't need to be expanded.

Currently in order to do that we have to express it with an expanded version of the mergePolicy:

```java
mergePolicy: {
    someParent: {
        someObject: {
            "*": { "noexpand": true // "noexpand" }
        }
    }
 }
```

Example of the expanded material:

```json
[ {
     "capabilities": [
         "applications.org\\.gnome\\.desktop\\.a11y.magnifier.id"
     ],
     "settings": { 
         "mouse-tracking": "centered"
      }
    "capabilitiesTransformations": {
        "mag-factor": "display.screenEnhancement.magnification",
        "mouse-tracking": {
            "expander": {
                "type": "fluid.model.transform.valueMapper",
                "inputPath": "display.screenEnhancement.tracking",
                "options": {
                    "mouse":
                        { "outputValue": "centered" }
                    }
                }
            }
        }
     }
 ]
```

        
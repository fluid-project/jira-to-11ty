---json
{
  "title": "FLUID-5705",
  "summary": "fluid.linearScale transform is not permissive with respect to input types",
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
  "date": "2015-07-10T13:32:39.422-0400",
  "updated": "2021-08-08T13:55:01.215-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The initial phase of fluid.linearScale operates an aggressive type check before operating its arithmetic:&#x20;

```java
if (typeof(value) !== "number" || typeof(factor) !== "number" || typeof(offset) !== "number") {
            return undefined;
        }
```

This prevents the transform from operating in many cases where the native JS operation would permit it to proceed - where the values are encoded as strings, for example. This check is also inconsistent with all of our other numeric transforms such as limitRange. The best plan, as well as removing this, might be to start operating new semantics for return values of transforms and treat a NaN output value in the same way as undefined - that is, representing "no output". This would also allow us to remove boilerplate from other numeric transforms such as a hypothetical transforms.sqrt or transforms.log etc.

        
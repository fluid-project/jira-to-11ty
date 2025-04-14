---json
{
  "title": "FLUID-6778",
  "summary": "Error message on omitting subcomponent type is incomplete ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2024-03-26T07:07:48.685-0400",
  "updated": "2024-03-26T07:07:49.188-0400",
  "versions": [
    "4.6"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The error message in fluid.operateCreatePotentia, currently at line 2085

```
    } else {
        fluid.fail("Unrecognised material in place of subcomponent " + memberName + " - could not recognise the records ",
            potentia.records, " as designating either an injected or concrete component");
    }
```

refers to “potentia.records” which no longer exists and logs undefined - this should instead refer to lightMerge.toMerge

        
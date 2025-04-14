---json
{
  "title": "FLUID-6130",
  "summary": "Cannot resolve context name {arguments} for invoker arguments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-02-13T20:05:35.586-0500",
  "updated": "2024-07-22T10:35:18.283-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.1",
    "3.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-02-13T20:08:00.755-0500",
      "body": "Other than the argument of efficiency - this case is extremely rare, whereas the cost of resolving the function via the whole machinery of fluid.recordToApplicable etc. is very large.\n"
    }
  ]
}
---
The following definition is invalid, whilst there is no good argument against it:

```java
invokers: {
            destroyTargetComponent: {
                func: "{arguments}.0.destroy"
            }
        }
```

        
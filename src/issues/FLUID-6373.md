---json
{
  "title": "FLUID-6373",
  "summary": "Cannot resolve reference to {arguments} from \"func\" or \"this\" in listener/invoker records",
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
  "date": "2019-03-23T09:22:52.026-0400",
  "updated": "2024-07-19T08:06:03.808-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6752/",
      "key": "FLUID-6752"
    }
  ],
  "attachments": [],
  "comments": []
}
---
It's impossible for the target object of a listener or invoker record to be resolved from its arguments - e.g. definitions of the following kind

```java
listeners: {
            reportIt: {
                "func": "{arguments}.0.destroy"
            }
        }
```

are not possible - also, one can't get around this by trying to use the "this-ist" syntax for binding on to "this": "{arguments}.0" . This is because these main referents are resolved statically using fluid.expandOptions at the time of instantiating the invoker/listener, rather than during argument resolution time when {arguments} is available.

        
---json
{
  "title": "FLUID-6753",
  "summary": "Framework error messages which attempt to dump the entire component are unreadable",
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
  "date": "2022-10-17T10:58:47.357-0400",
  "updated": "2024-07-22T10:35:14.622-0400",
  "versions": [
    "4.4"
  ],
  "fixVersions": [
    "4.5"
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
Some old-style framework error messages attempt to dump the entire component to the console using the ", that, " pattern. A candidate is in fluid.instantiateEvents&#x20;

```java
return ["Error constructing component ", that, " - the listener for event " + error.name + " with namespace " + error.namespace + (
```

These should be rewritten using the fluid.dumpComponentAndPath utility instead.

        
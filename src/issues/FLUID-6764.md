---json
{
  "title": "FLUID-6764",
  "summary": "Infusion's jquery.standalone file throws an error when loaded in an AudioWorkletGlobalScope",
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
  "reporter": "Colin Clark",
  "date": "2023-03-12T12:47:03.537-0400",
  "updated": "2024-07-22T10:34:59.844-0400",
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
When Infusion's jquery.standalone.js file is used with an AudioWorkletProcessor, an error occurs on line 35. This is because we refer to "global" without checking first to see if the "global" global variable is actually present. AudioWorkletGlobalScope (and I assume other Worklet scopes, though I haven't tested with any other) are extremely minimal environments that don't even provide a reference to a global scope.

The following refinement to our global scope detection on lines 34-5 solved the problem for me:

```javascript
var globalScope = typeof window !== "undefined" ? window :
        typeof self !== "undefined" ? self :
        typeof global !== "undefined" ? global : {};
```

        
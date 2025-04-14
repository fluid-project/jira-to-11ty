---json
{
  "title": "FLUID-6698",
  "summary": "Allow model relay from constant values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-11-19T12:13:31.668-0500",
  "updated": "2021-11-22T13:49:18.898-0500",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-11-22T13:49:18.893-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1065> ) into the project repo at a52671122fdc3d34c3b029b0e294823a9bfc454d\n"
    }
  ]
}
---
When writing "new-style" integral bindings, it can often be useful to relay from constant values. Historically we wrote these inline in the initial model definition - however, not only is this not targettedly overrideable via namespaces, but also it is inconvenient when the model path becomes deeply nested.

We would like to write definitions like the following:

```java
modelRelay: {
         type: {
            value: "range",
            target: "dom.container.attrs.type"
        }
```

but instead we need a bizarre locution like

```java
modelRelay: {
        type: {
            source: "",
            target: "dom.container.attrs.type",
            func: () => "range"
        }
```

since we must have a populated "source" definition. Note we can't simply reuse "source" for this since it interprets all bare string values as model paths.

        
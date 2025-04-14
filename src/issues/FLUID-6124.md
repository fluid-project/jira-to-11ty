---json
{
  "title": "FLUID-6124",
  "summary": "Diagnostic when registering faulty modelRelay record is unhelpful",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-02-06T17:32:51.101-0500",
  "updated": "2021-06-21T11:36:54.161-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When a modelRelay record refers to a nonexistent function or has misnamed members, the triggered diagnostic is unhelpful. When given the following record:

```java
modelRelay: {
        target: "keyedInUser.label",
        singleTransform: {
            type: "free",
            funcName: "gpii.app.menu.createNameLabel",
            args: ["{app}.keyedInUserToken", "{that}.options.menuLabels.keyedIn", "{that}.options.menuLabels.notKeyedIn"]
        }
```

the framework produces a bare diagnostic

```java
"TypeError: Cannot read property 'listenerId' of undefined"
```

        
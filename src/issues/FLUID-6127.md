---json
{
  "title": "FLUID-6127",
  "summary": "Model change listeners are not notified in the case of a DELETE change when they listen on a wildcard path",
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
  "date": "2017-02-09T08:36:52.919-0500",
  "updated": "2017-02-10T11:49:32.775-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.1",
    "3.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-02-10T11:49:29.324-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/809> has been merged into the project repo master branch at 00f931479c38605f16106e474695e9eb624748e5\n"
    }
  ]
}
---
Model listeners which listen on a wildcard path ending in \* are not notified when a DELETE change removes one of the leaves of interest - for example, with this definition:

```java
modelListeners: {
            updateComponentView: {
                path: "idToPath.*",
                funcName: "fluid.author.componentGraph.updateComponentView",
                args: ["{that}", "{change}.path", "{change}.value"]
            }
```

a change of that.applier.change("idToPath.thing", null, "DELETE") will not trigger the notification. The logic in fluid.matchChanges is faulty and is not prepared for this case.

        
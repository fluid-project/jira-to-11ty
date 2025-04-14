---json
{
  "title": "FLUID-6699",
  "summary": "Resource refetching produces failure due to attempted fetch of unrelated resource",
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
  "date": "2021-11-25T06:55:04.480-0500",
  "updated": "2024-07-22T10:35:34.380-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The implementation of that.resourceFetcher.refetchOneResource causes a failure through attempting to reload an unrelated resource which has not been reinitialised. This occurred in the following test case code for the Infusion 5.x TableOfContents component -&#x20;

```java
jqUnit.asyncTest("Component test refresh rendering", function () {
....
    fluid.tableOfContents("#flc-toc-refreshHeadings", {
        listeners: {
            "onCreate.initialState": {
                listener: function (that) {
                    var renderer = fluid.resolveContext("fluid.renderer", that, true);
                    renderer.events.render.addListener(function () {
....
                    that.resourceFetcher.refetchOneResource("documentHeadingsSource");
                }
            }
        }
    });
});
```

The failure is received through attempting to reload the component's messageLoader too - we receive

```java
Wed Nov 24 2021 15:51:18 GMT+0000 (Greenwich Mean Time):   ASSERTION FAILED:  Resource spec  Object
    dataType: "json"
    immutableModelResource: true
    key: "messages"launched: true
    loader: {loader: ƒ, pathKey: "path"}
    locale: undefined
    options: {path: "%fluid-table-of-contents/src/messages/tableOfContents.json"}path: "%fluid-table-of-contents/src/messages/tableOfContents.json"
    resourceText: "{
        "label": "Table of Contents",
        "description": "Create a table of contents",
        "switchOn": "ON",
        "switchOff": "OFF"
}
 is ambiguous because it has fields for multiple resource loaders filled out: at most one of the fields ["resourceText", "path"] can be used
```

        
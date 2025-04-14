---json
{
  "title": "FLUID-4189",
  "summary": "Expand renderer component workflow in order to supply interception points for model transformation and tree expansion",
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
  "date": "2011-04-18T22:52:29.534-0400",
  "updated": "2021-01-11T19:10:58.316-0500",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently CollectionSpace "RecordList" contains code like the following:

```java
cspace.recordList.produceTreeTabs = function (that) {
        var tree = cspace.recordList.produceTree(that);
        tree.expander[1].trueTree.expander[0].tree.expander.push({
            type: "fluid.renderer.condition",
            condition: that.options.showDeleteButton,
            trueTree: {
                deleteRelation: {
```

In order to allow code reuse between different rendering conditions, this raw protoTree manipulation code is packaged in pure logic. We need to supply a toolkit of techniques to make such code go away. In the first instance, this problem can be ameliorated by supplying interception points within a single renderer component's rending pipeline to allow modification and compositing of multiple protoTrees in their expanded form. The more sound long-term approach to this problem involves renderer antigens (FLUID-4260).

        
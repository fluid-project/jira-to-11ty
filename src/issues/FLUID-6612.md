---json
{
  "title": "FLUID-6612",
  "summary": "Create \"selectionToFlags\" transform to parallel arrayToSetMembership",
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
  "date": "2021-04-19T10:42:17.885-0400",
  "updated": "2021-04-19T10:42:17.885-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of the work in dealing with panel visibility in <https://github.com/inclusive-design/covid-data-monitor/pull/10/files> repeated uses appeared of structures like 

```java
{
     "citiesList": false,
     "resultsPage": false,
     "filterPanel": true,
     "hospitalPanel": false
 }
```

These clearly represent a "single selection" idiom that should be mappable via a single field

```java
visiblePanel: "citiesList"
```

etc. and a transform like the existing fluid.transforms.arrayToSetMembership - however this transform will only accept an array (representing multiple selection) and not a single value.

We should add a further transform pair, e.g. fluid.transforms.selectionToFlags to handle this case, and perhaps consider renaming/aliasing arrayToSetMembership as arrayToFlags or so.

These transforms will be crucial for the new "in-model" data binding idiom, paralleling the various kinds of UISelect that used to do this in the view layer in "old RSF" - <https://github.com/rsf/rsf/blob/master/rsf-core/core/src/uk/org/ponder/rsf/components/UISelect.java>

        
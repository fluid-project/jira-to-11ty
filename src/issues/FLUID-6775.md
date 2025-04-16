---json
{
  "title": "FLUID-6775",
  "summary": "Model relay definitions with internal namespace key do not override correctly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2024-01-09T17:13:13.237-0500",
  "updated": "2024-01-09T17:13:13.701-0500",
  "versions": [
    "4.6"
  ],
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
As reported by Tony Atkins in the following codepen <https://codepen.io/duhrer/pen/mdoVxdo?editors=1111> and in Element at <https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$uBQoihUnLhDpOaIUixVmBYshye3PEC3AQdL6VronYJI?via=matrix.org&via=sibnsk.net> , model relay definitions where the namespace is supplied as an internal key, rather than as a hash level, do not override correctly in derived grades. This doesn’t affect model listeners (which use the same mergePolicy) because of the programmatic way they get registered - we could do the same for model listeners as a stopgap. The workaround is to use a hash key for the relay definition instead.

```javascript
var my = fluid.registerNamespace("my");

fluid.defaults("my.underlying.grade", {
  gradeNames: ["fluid.modelComponent"],
  model: {
    inputA: "chocolate"
  },
  modelRelay: {
    namespace: "pipe",
    source: "inputA",
    target: "{child}.model.childVariable"
  },
  components: {
    child: {
      type: "fluid.modelComponent"
    }
  }
});

fluid.defaults("my.derived.grade", {
  gradeNames: ["my.underlying.grade"],
  model: {
    inputB: "vanilla"
  },
modelRelay: {
    namespace: "pipe",
    source: "inputB",
    target: "{child}.model.childVariable"
  }
});

var component = my.derived.grade();

component.child.applier.change("childVariable", "strawberry");

console.log("parent, input A (original grade):" + component.model.inputA);

console.log("parent, input B (derived grade):" + component.model.inputB);
```

Console output is

```
"parent, input A (original grade):strawberry"
"parent, input B (derived grade):strawberry"
```

        
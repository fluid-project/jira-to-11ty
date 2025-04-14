---json
{
  "title": "FLUID-6737",
  "summary": "Using `fluid.rootResolveSingle` as a subcomponent does not result in a single instance of the grade.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins",
  "date": "2022-05-19T09:46:54.010-0400",
  "updated": "2024-07-17T08:03:38.839-0400",
  "versions": [],
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
I have put [an example up on CodePen](https://codepen.io/duhrer/pen/JjpNZXx), which is:

```java
fluid.defaults("examples.rootComponent1", {
    gradeNames: ["fluid.modelComponent", "fluid.resolveRootSingle"],
    singleRootType: "examples.rootComponent1",
    model: {
      value: "root component defaults"
    }
});


fluid.defaults("examples.rootHolder", {
    gradeNames: ["fluid.modelComponent"],
    components: {
      rootComponent: {
        type: "examples.rootComponent1"
      }
    },
    model: {
      value: "{rootComponent}.model.value"
    }
});

var that1 = examples.rootHolder();

console.log("Component model value before change: " + that1.model.value);

that1.applier.change("value", "change applied by first parent");

console.log("Root model value following relayable change: " + that1.model.value);

var that2 = examples.rootHolder();

console.log("Root model value of first component following creation of second parent: " + that1.model.value);
console.log("Root model value of second component following creation of second parent: " + that2.model.value);


that2.applier.change("value", "change applied by first parent");

console.log("Root model value of first component following change by second component: " + that1.model.value);
console.log("Root model value of second component following change by second component: " + that2.model.value);


that1.rootComponent.applier.change("value", "change applied from root subcomponent");

console.log("Root model value of first component following change by root component: " + that1.model.value);
console.log("Root model value of second component following change by root component: " + that2.model.value);

that1.destroy();
that2.destroy();
```

This outputs:

```java
"Root model value of second component following creation of second parent: root component defaults"

"Root model value of first component following change by second component: change applied by first parent"

"Root model value of second component following change by second component: change applied by first parent"

"Root model value of first component following change by root component: change applied from root subcomponent"

"Root model value of second component following change by root component: change applied by first parent"
```

From these examples it seems like each subcomponent that uses \`fluid.resolveRootSingle\` becomes in essence like an ordinary \`fluid.modelComponent\`.  The second one instantiated does not replace the first, and each only relays to and from its parent in its own component tree.

As we've discussed in the chats, I want to have a \`fluid.resolveRootSingle\` grade as a subcomponent to ensure that the first component that needs the grade causes it to come into existence.

        
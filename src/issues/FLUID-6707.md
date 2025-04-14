---json
{
  "title": "FLUID-6707",
  "summary": "Speculative instantiation of components must begin before they are created",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-12-19T10:18:29.490-0500",
  "updated": "2021-12-19T10:18:29.490-0500",
  "versions": [
    "5.0"
  ],
  "fixVersions": [
    "6.0"
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
When working on the Sliding Panel integration for the Infusion 5.x preferences framework, I found that the renderer's "lookahead" to find the containers of upcoming renderer components wasn't faithful enough. It was introspecting on what is really a private scrawl of the framework, the "lightMergeDynamicComponents" record in the parent shadow of upcoming lensed components.

```java
fluid.renderer.findRendererSelectors = function (that, dom) {
    var shadow = fluid.shadowForComponent(that);
    fluid.each(shadow.modelSourcedDynamicComponents, function (record, key) {
        var lightMerge = shadow.lightMergeDynamicComponents[key];
        var containers = fluid.getMembers(lightMerge.toMerge, ["options", "container"]).concat(fluid.getMembers(lightMerge.toMerge, "container"));
        var lastContainer = fluid.renderer.lastValue(containers);
        if (lastContainer) {
```

I had then written an options distribution in a further parent that was attempting to override the container -&#x20;

```java
distributeOptions: {
        "withSlidingPanel.prefsEditor": {
            record: {
                gradeNames: "fluid.prefs.prefsEditor.withSlidingPanel",
                container: "{weaver}.dom.slidingPanelPanel"
            },
            target: "{that prefsEditor}.options"
        }
    },
```

Since, naturally, at this point there is no component, there is nothing for a distribution to hit. But it's very clear that these kinds of "lightMerge" structures represent a kind of "speculative execution" in the framework. Since it "ceased to be classical" around 2015, we reduced the interval of time between component construction and being assigned an address in the tree to the shortest possible - but now it's clear we need to formalise these "lightMerge" structures and have them allocated in the tree **before** the component ever constructs, even if it never will. This is the kind of reform that will only be possible in Infusion 6.x, when components and grades have a common footing in a sea of lazily merged immutable structures.

        
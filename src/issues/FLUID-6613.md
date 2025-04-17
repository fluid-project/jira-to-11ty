---json
{
  "title": "FLUID-6613",
  "summary": "Framework design challenge: Expand button which expands multiple targets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Design",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-04-20T07:20:07.886-0400",
  "updated": "2024-07-17T08:10:08.096-0400",
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
In pull request underway at <https://github.com/inclusive-design/covid-data-monitor/pull/10/files>, Cindy Li has implemented an "expand button" which necessarily has a rather unintegral design. Its mission is to implement a button with two states, "expanded", "collapsed", which then controls the visibility of a number of other DOM elements provided in configuration. The current implementation is&#x20;

```java
fluid.defaults("fluid.expandButton", {
    gradeNames: "fluid.button",
    // Supplied by integrators. An array of DOM element to expand or collapse.
    domElements: [],
    styles: {
        hiddenOnMobile: "fl-mapviz-hidden-on-mobile"
    },
    model: {
        // The initial state of all panels on the mobile view is collapsed.
        expanded: false
    },
    modelRelay: {
        toggleOnActivate: {
            source: "activate",
            target: "expanded",
            singleTransform: "fluid.transforms.toggle"
        },
        ariaExpanded: {
            source: "expanded",
            target: "dom.container.attrs.aria-expanded",
            func: x => !!x
        }
    },
    modelListeners: {
        expandContent: {
            path: "expanded",
            funcName: "fluid.expandButton.toggleClass",
            args: ["{that}.options.domElements", "{that}.options.styles.hiddenOnMobile", "{that}.model.expanded"]
        }
    }
});
```

with a highly non-integral impl

```java
fluid.expandButton.toggleClass = function (domElements, style, toggleFlag) {
    fluid.each(domElements, function (element) {
        element.toggleClass(style, !toggleFlag);
    });
};
```

This is a challenge to integral design since the "target" of a model relay rule can only be a single path. Also, there is no facility in the "old framework" to operate machinery like expanders within the scope of such rules - and in any case we risk semantic confusion since the modelRelay target is **already** a path expression, and there is no clear way to express the idea, even if this were desirable, that an expression should be expanded in order to produce a set of paths.

Right now we could use a slightly clunky-seeming dynamic component, e.g. sourced from the elements:

```java
fluid.defaults("fluid.expandButton.expandBinding", {
    gradeNames: "fluid.modelComponent",
    linkPath: <user>,
    modelRelay: {
        binding: {
            source: "{expandButton}.model.expanded",
            target: "{expandButton}.options.linkPath"
        }
});
```

But we face the same issue again. What can we write in the "target"?

Note that as noted in FLUID-6214 we support "recursive context expressions" such as "{{that}.options.dynamicComponentIndex}.events.onIndexRemove" but this isn't sufficient since the result of this resolution is still a value. In theory we need a way to "quote" a reference - but this is just the kind of LISP-like thing we always wanted to avoid in Infusion. But note that Boxer doesn't avoid this with all of its boxing and unboxing primitives, and its "flavoured inputs".

        
---json
{
  "title": "FLUID-6615",
  "summary": "Investigate problematic relay of initial model values to parent in data monitor app",
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
  "date": "2021-04-22T10:07:55.905-0400",
  "updated": "2024-07-17T08:09:10.440-0400",
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
The defaults in "fluid.covidMap.visiblePanel" at <https://github.com/inclusive-design/covid-data-monitor/blob/main/src/js/covidMap.js#L1165> have to use a clunky workaround of applying an initial default value of "null" since otherwise their initial value of "false" ends up getting relayed back into the parent regardless of an excludeSource directive.

The problematic code currently looks like

```java
fluid.defaults("fluid.covidMap.visiblePanel", {
    gradeNames: "fluid.viewComponent",
    styles: {
        hiddenOnMobile: "fl-mapviz-hidden-on-mobile"
    },
    model: {
        // Use the initial value "null" to prevent the component applies the value false at the page load
        visible: null
    },
    modelRelay: {
        expandPanel: {
            source: "visible",
            target: "{expandButton}.model.expanded",
            backward: "never"
        }
    },
    modelListeners: {
        toggleCssClass: {
            path: "visible",
            func: "fluid.covidMap.visiblePanel.toggleClass",
            args: ["{that}"]
        }
    }
});

fluid.covidMap.visiblePanel.toggleClass = function (that) {
    // Use "null" as the initial visibility value in order not to programmatically apply any visibility control
    // at the initial page load. The initial page template has all visibility css applied properly for the mobile
    // view. This is to work around the issue that using `excludeSource: "init"` doesn't help in this case.
    if (that.model.visible === null) {
        return;
    }
    that.container.toggleClass(that.options.styles.hiddenOnMobile, !that.model.visible);
};
```

This looks like it is a further elaboration of init relay priority problems like those in <https://fluidproject.atlassian.net/browse/FLUID-6517#icft=FLUID-6517>, <https://fluidproject.atlassian.net/browse/FLUID-6429#icft=FLUID-6429>

        
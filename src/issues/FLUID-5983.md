---json
{
  "title": "FLUID-5983",
  "summary": "expanders can execute more than once if their value is specifically demanded during ginger process",
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
  "date": "2016-10-17T00:38:18.645-0400",
  "updated": "2016-10-26T12:40:22.749-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-10-26T12:40:22.749-0400",
      "body": "This was found not to be the bug it was thought. The problem is that the line var containerMarkup = renderMarkup() is reentrant into the system, causing a re-evaluation of the same container whose evaluation was responsible for the current stack. Whilst in normal conditions we will not evaluate expanders more than once, we need to improve diagnostics (and the use of our \"currently in evaluation\" marker) to report this condition earlier with a hard failure.\n"
    }
  ]
}
---
This issue will take a while to characterise, but there are situations where an expander can execute more than once if the value it delivers is specifically demanded during options evaluation. For example, using the "new viewComponents" with this definition:

```java
fluid.defaults("fluid.newViewComponent", {
        gradeNames: ["fluid.modelComponent"],
        members: {
            dom: "@expand:fluid.initDomBinder({that}, {that}.options.selectors, {that}.container)",
            container: "@expand:fluid.container({that}.options.container)"
        }
    });
```

and&#x20;

```java
fluid.defaults("fluid.author.containerRenderingView", {
        gradeNames: "fluid.newViewComponent",
        invokers: {
            renderMarkup: "fluid.identity({that}.options.markup.container)"
        },
        container: "@expand:fluid.author.renderContainer({that}, {that}.renderMarkup, {that}.options.parentContainer)",
        // The DOM element which to which this component should append its markup on startup
        parentContainer: "fluid.notImplemented" // must be overridden
    });

    fluid.author.renderContainer = function (that, renderMarkup, parentContainer) {
        var containerMarkup = renderMarkup();
        var container = $(containerMarkup);
        parentContainer.append(container);
        return container;
    };
```

A demand via the dom binder of a nested component caused the rendering expander to execute twice - which, since it is stateful, caused two copies of the markup to be generated:

```java
fluid.defaults("fluid.author.componentView", {
        gradeNames: ["fluid.newViewComponent", "fluid.author.containerRenderingView", "fluid.indexedDynamicComponent", "fluid.author.domPositioning"],
        selectors: {
            modelView: ".fld-author-modelView"
        },
        components: {
            modelView: {
                type: "fluid.author.JSONView",
                options: {
                    parentContainer: "{componentView}.dom.modelView"
                }
            }
        },
```

        
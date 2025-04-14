---json
{
  "title": "FLUID-6234",
  "summary": "Sorting of application of model values init transaction does not respect relay propagation directives",
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
  "date": "2017-12-16T13:22:33.992-0500",
  "updated": "2024-07-22T10:35:16.928-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6234/aconite-init-failure.png",
      "filename": "aconite-init-failure.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-12-16T13:25:58.144-0500",
      "body": "It appears that the crucial element tipping the framework into the incorrect sorting is the nested default value supplied from the test environment, since the gist at <https://gist.github.com/colinbdclark/5b92588349bb1430fa74853256e72757> attempting to isolate the problem doesn't exhibit it.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-12-16T13:29:37.885-0500",
      "body": "It's been known for a while that this was an area in which the framework's behaviour was underdetermined and underimplemented - see comment at <https://github.com/fluid-project/infusion/blob/5dd8f82d9237174336c23e9c88c09fdebeab3003/src/framework/core/js/DataBinding.js#L346>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-12-16T13:38:49.785-0500",
      "body": "Useful screenshot showing incoming model values during the init transaction. Note that since none of the instantiating components have been marked as \"completeOnInit\" since they are all currently in construction, the sort done on the previous line has no stable effect, whereas we need to arrange to sort the the record for the \"aconite.video\" component to the last position.&#x20;\n\n<!-- media: file fbc86116-5464-4a14-8057-8798a670a86a -->\n"
    },
    {
      "author": "Colin Clark",
      "date": "2018-01-22T12:15:18.811-0500",
      "body": "I reviewed and merged this fix at 350441a9bd6dfc8fbb8a1753bfbb8fadd6c2dcc9, and published a dev release, version 3.0.0-dev.20180122T170655Z.350441a9b, to npm.\n"
    }
  ]
}
---
Even if the user attempts to express a preference for which components should have their initial model values take priority during the "init transaction" by using directives such as

```java
forward: { excludeSource: "init"}
```

, the framework may sort the application times of these initial values into an ordering which leads to a final set of resolved values around the model skeleton that does not respect this preference.

For example, this test environment taken from a branch of @colin 's Aconite project at <https://github.com/colinbdclark/aconite/blob/gh-9/tests/unit/video-performer-tests.js#L19> specifies an initial value for a component which participates in a relay with two subcomponents: 

```javascript
fluid.defaults("aconite.test.videoPerformer.testEnvironment", {
        gradeNames: "fluid.test.testEnvironment",

        components: {
            videoPerformer: {
                type: "aconite.videoPerformer",
                options: {
                    model: {
                        loop: true
                    }
                }
            }
```

The subcomponents have been each set up in <https://github.com/colinbdclark/aconite/blob/gh-9/src/video-performer.js> with a relay directive as follows which should prevent child values from propagating up to the parent:

```javascript
fluid.defaults("aconite.videoPerformer.relayingChild", {
        gradeNames: "fluid.modelComponent",

        model: {},

        // Note: this relay is required to prevent
        // initial model values from propagating back
        // from this component up to the parent,
        // overriding the user's desired value.
        modelRelay: {
            source: "{videoPerformer}.model",
            target: "{that}.model",
            backward: {
                excludeSource: "init"
            },
            singleTransform: {
                type: "fluid.transforms.identity"
            }
        }
    });
```

The definition does indeed stop the propagation of the child values during the init transaction, but the final resolved value across the skeleton is not the one that the user desires - during the process of resolving the init transaction, the parent's value is applied first and the children's later, leading the children to have the default value of `loop: false` and only the parent with the inconsistent, desired value of `loop: true`.

It is finally time to bite the bullet and introduce a topological sorting algorithm that guarantees to respect such one-way directives during the init transaction - that is, the directed graph induced by such directives needs to be parsed out of the total configuration and used to induce a topological sorting order which applies "most depended-on values" last.

        
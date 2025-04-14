---json
{
  "title": "FLUID-6580",
  "summary": "Thoughts on \"integration constant\" lenses to implement toggle interactions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-11-13T10:48:11.103-0500",
  "updated": "2024-07-22T10:35:28.432-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6581/",
      "key": "FLUID-6581"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6580/integration constant lens - 20201113_143046.jpg",
      "filename": "integration constant lens - 20201113_143046.jpg"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-11-16T07:26:16.876-0500",
      "body": "Last recorded form of \"pocket lenses\":\n\n```java\n/** Toggle transformer which maps an increasing integer count into the space true/false - suitable for mapping\r\n     * e.g. a stream of click counts onto a toggle state.\r\n     */\r\n\r\n    fluid.defaults(\"fluid.transforms.toggle\", {\r\n        gradeNames: [\"fluid.standardTransformFunction\", \"fluid.pocketLens\"],\r\n        invertConfiguration: \"fluid.transforms.toggle.invert\",\r\n        relayOptions: {\r\n            forward: {\r\n                excludeSource: \"init\"\r\n            },\r\n            backward: {\r\n                includeSource: \"init\"\r\n            }\r\n        }\r\n    });\r\n\r\n    /** @param {Number} source - Numeric value to be converted\r\n     * @param {Boolean} target - Current value in target \r\n     * @param {Object} pocketHolder - State allocated to hold \"pocket\" by previous operation of other leg of lens\r\n     * @return {Boolean} Updated target value \r\n     */\r\n    fluid.transforms.toggle = function (source, target, pocketHolder) {\r\n        return (source + pocketHolder.phase || 0) % 2 === 1;\r\n    };\r\n\r\n\r\n    fluid.transforms.toggle.invert = function (transformSpec) {\r\n        transformSpec.type = \"fluid.transforms.inverseToggle\";\r\n        return transformSpec;\r\n    }\r\n\r\n    fluid.defaults(\"fluid.transforms.inverseToggle\", {\r\n        // This transform is only expected to arise as the inverse of fluid.transforms.toggle and so it does not\r\n        // produce an inverse.\r\n        gradeNames: [\"fluid.standardTransformFunction\", \"fluid.pocketLens\"]\r\n    });\r\n\r\n    /** @param {Boolean} source - Boolean toggle value to be converted \r\n     * @param {Number} target - Numeric count currently in target\r\n     * @param {Object} pocketHolder - State allocated to hold \"pocket\" by previous operation of other leg of lens\r\n     * @return {Number} Updated target count\r\n     */ // We expect this leg to only run during startup to acquire phase, as per relayOptions of \"fluid.transforms.toggle\"\r\n    fluid.transforms.inverseToggle = function (source, target, pocketHolder) {\r\n        target = target || 0;\r\n        var updatedTarget;\r\n        // Boolean value corresponding to current target - \"source\" should match this\r\n        var pullback = fluid.transforms.toggle(target, pocketHolder);\r\n        // Store phase which will cause match\r\n        pocketHolder.phase = pullback === source ? 0 : 1;\r\n        // We never update the target\r\n        return target;\r\n    };\n```\n"
    }
  ]
}
---
Following <https://fluidproject.atlassian.net/browse/FLUID-6570#icft=FLUID-6570> and <https://fluidproject.atlassian.net/browse/FLUID-6576#icft=FLUID-6576>, we have for a while sketched an idea for a form of "integral relay" allowing the expression of a click-to-toggle interaction. Following the sketches of materialised DOM relay rules in <https://fluidproject.atlassian.net/browse/FLUID-6570#icft=FLUID-6570>, we would like to write a rule like

```java
modelRelay: {
            source: "{that}.model.dom.button.clicked",
            target: "{that}.model.enabled",
            singleTransform: "fluid.transforms.toggle"
        }
```

This immediately extends the contract for model transformations in a dramatic way. The original conception was for what could be called an "integration constant" relay - bearing in mind that the value in the materialised DOM field {that}.model.dom.button.clicked was an integration of a series of differential events (clicks), the job of the lens would be, at the point the relay is set up, to take up the slack of the [constant of integration](https://en.wikipedia.org/wiki/Constant_of_integration) resulting from this integration process as an internal "phase".

This idea may have stemmed from a creative misunderstanding of a seminar presented at University of Boulder on Pierce-ist lenses in which it seemed that these kinds of putbacks were intended to be honoured by kinds of "pockets" in which lenses held parts of previously imaged state. However, consulting the actual Pierce-ist diagram that we have been reproducing in talks for many years (on page 6 of <https://www.seas.upenn.edu/~harmony/manual.pdf> ) this is clearly not the way they are actually meant to work. As anyone might expect from this tradition, lenses are intended to be functional - as expressed in this idiom, the putback action is achieved by the lens accepting an additional argument, being a pure function of the "old source", the "updated target/view", and yielding the "updated source".

This Pierce-ist view is clearly what we were intending to follow when we wrote point ii) on <https://fluidproject.atlassian.net/browse/FLUID-6576#icft=FLUID-6576>. However, looking at the machinery that we have in the model relay system, as well as our actual use case, this route appears prohibitive. In the attached diagram, we show the expected state updates for two expected initial values of the target.

<!-- media: file 68cb6dc2-608e-4fac-990c-5dd24c2a233c -->

&#x20;

Correlating this with the traditional lens diagram, we position the lossy direction of the lens as aiming to the right. However, our update isn't in the traditional direction because in our case it is the source which is getting updated again - therefore we need to flip the direction of all the arrows attached to the "put" lens. So what we require access to in this case in the Pierce-ist view is the old version of the target, and not the source. However, in order to be able to compute what needs to be output, we need to be able to determine what the change in source value has actually been. There is no provision for this and would require the lens to be improbably be made a function of THREE things, the old source, the updated source, and the old target.

A big mismatch between our use of the lens idiom in model relay and Pierce-ism is the fact that we allow relay updates to slosh around in the graph of models in an essentially unordered way. All we track is the initial snapshot of the entire model state, and its "in-progress" value, and keep propagating until the graph stabilises. This implies that lenses may be activated numerous times along the same leg in the same transaction, if it's determined there is a change in their source.

\[Note - an idea for making this process much more efficient for <https://fluidproject.atlassian.net/browse/FLUID-6396#icft=FLUID-6396> is to always pass the old source to a lens so that it can return it unchanged if it is an acceptable part of its inverse image - this was already called for in FLUID-5337]

Well - perhaps it's not so onerous to supply old source and old target too - let's investigate

        
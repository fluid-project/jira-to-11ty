---json
{
  "title": "FLUID-6625",
  "summary": "Consider implementing \"afferent polymorphism\" supporting markup-dependent markup bindings",
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
  "date": "2021-05-21T13:23:30.185-0400",
  "updated": "2021-05-24T11:25:12.031-0400",
  "versions": [],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6625/afferent-polymorphism.txt",
      "filename": "afferent-polymorphism.txt"
    }
  ],
  "comments": []
}
---
An insight last week following renewed recognition of the central importance of markup-driven strategies to the renderer was what could be called "afferent polymorphism" (aka "Kazuo Ichiguro insight") whereby we restore the behaviour of old-fashioned "leaf components" such as UIInput, UILink as implemented in the "old new renderer" (the 2020 implementation targetted at a virtual DOM). This behaviour dates back even further to RSF's components of the same name, with their rendering logic implemented at <https://github.com/rsf/rsf/blob/master/rsf-core/core/src/uk/org/ponder/rsf/renderer/html/BasicHTMLComponentRenderer.java#L126-L144>

A scheme for doing this in Infusion working with the new-style "DOM materialisation strategy" would involve contributing dynamic grades holding modelRelay definitions into the component by inspecting the incoming markup with a range of selector-based rules. This seemed barely possible until building out most of an implemention revealed an insurmountable circularity. Infusion 4.x breaks some model-dependent cycles by recognising an "early model" which can be used to contextualise the fetch of resources. In this way, for example, we can have resources whose localisation is dynamic. Unfortunately even if we special-cased the template fetch and made it strictly precede the "early model" -> optionsReady special case in the Infusion 4.x ResourceLoader, there is still no scope for recognising entire modelRelay definitions after the point we have initialised the model as part of fluid.enlistModelWorkflow . In the sketch implementation this already required synthesizing a fresh mergeOptions block and bypassing the update of gradeNames that is baked into fluid.computeDynamicGrades .

We could bash on the fluid.parseModelRelay function to connect the endpoints after the fact, but this would do nothing to deal with initial values - in short it would be quite a mess and provide an unstable scheme for some polymorphism which perhaps we don't have a great use for right now, and at the cost of the essential facility of being able to localise markup templates.

This is something we could consider for the <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304> Infusion compiler, although we would still likely need special cases to deal with modelRelay rules which appear after the model has started to initialise.

The maximal diff showing the state where we had implemented the split-phase DOM binding, which then ran into a stall because "{that}.applier.earlyModelResolved" never fired to kick off the launch of the template URL is attached.

        
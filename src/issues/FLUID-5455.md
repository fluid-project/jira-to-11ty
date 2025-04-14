---json
{
  "title": "FLUID-5455",
  "summary": "Update infusion-docs framework API links to point to GitHub",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Simon Bates",
  "date": "2014-06-23T15:25:50.364-0400",
  "updated": "2014-07-04T13:40:07.298-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5452/",
      "key": "FLUID-5452",
      "summary": "Review the converted docs for links to framework API wiki pages"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-25T08:48:41.844-0400",
      "body": "Submitted the pull request: <https://github.com/fluid-project/infusion-docs/pull/19>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2014-07-04T13:39:59.002-0400",
      "body": "Has been merged\n"
    }
  ]
}
---
Replace the links to framework APIs in infusion-docs with links to the appropriate function in the Infusion 1.5 source code on GitHub.

Pages that need to be updated:

* Builder.md
* fluid.invokeGlobalFunction
* ComponentGrades.md
* fluid.defaults
* ComponentOptionsAndDefaults.md
* fluid.defaults
* Cutpoints.md
* fluid.renderer.selectorsToCutpoints
* fluid.rendererComponent
* Enactors.md
* fluid.viewComponent
* HowToUseInfusionIoC.md
* fluid.defaults
* HowToUseTheRenderer.md
* fluid.fetchResources
* fluid.reRender
* fluid.render
* fluid.selfRender
* ModelRelay.md
* fluid.defaults
* ProtoComponentTypes.md
* fluid.formatMessage
* RendererComponents.md
* fluid.fetchResources
* fluid.renderer.createRendererSubcomponent
* SubcomponentDeclaration.md
* fluid.defaults
* UnderstandingInfusionComponents.md
* fluid.defaults

tutorial-gettingStartedWithInfusion:

* BasicComponentCreation-LittleComponents.md
* fluid.defaults
* DefineANamespaceAndCreateAClosure.md
* fluid.registerNamespace

Link targets for functions:

* fluid.defaults\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L1519-L1539>

- fluid.fetchResources\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidRequests.js#L24-L50>

* fluid.formatMessage\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/JavaProperties.js#L93-L115>

- fluid.invokeGlobalFunction\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L930-L944>

* fluid.registerNamespace\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L957-L966>

- fluid.render\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1551-L1570>

* fluid.renderer.createRendererSubcomponent\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L62-L100>

- fluid.renderer.selectorsToCutpoints\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L268-L285>

* fluid.rendererComponent\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L139-L141>

- fluid.reRender\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1480-L1527>

* fluid.selfRender\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1572-L1588>

- fluid.viewComponent\
  <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidView.js#L34-L36>

        
---json
{
  "title": "FLUID-5461",
  "summary": "Review framework API source code comments and compare to wiki pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2014-07-04T14:19:49.942-0400",
  "updated": "2015-10-13T16:29:06.016-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-5329/",
      "key": "FLUID-5329"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5791/",
      "key": "FLUID-5791"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2014-07-04T16:05:56.589-0400",
      "body": "* fluid.defaults\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L1519-L1539>\n* <http://wiki.fluidproject.org/display/docs/fluid.defaults>\n* wiki page includes a description of the return value and an example\n\n- fluid.fetchResources\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidRequests.js#L24-L50>\n- <http://wiki.fluidproject.org/display/docs/fluid.fetchResources>\n- wiki page contains a lot more information; more than would likely fit into a source code comment\n\n* fluid.formatMessage\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/JavaProperties.js#L93-L115>\n* <http://wiki.fluidproject.org/display/docs/fluid.formatMessage>\n* source code and wiki page are equivalent\n\n- fluid.invokeGlobalFunction\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L930-L944>\n- I could not find a wiki page for this function\n\n* fluid.messageResolver\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L2441-L2475>\n* <http://wiki.fluidproject.org/display/docs/fluid.messageResolver>\n* the source code comment is empty\n* the wiki page contains quite a lot of information; more than would likely fit into a source code comment\n\n- fluid.registerNamespace\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/Fluid.js#L957-L966>\n- <http://wiki.fluidproject.org/display/docs/fluid.registerNamespace>\n- the source code comment is empty\n- the wiki page content should be moved to the source code\n\n* fluid.render\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1551-L1570>\n* <http://wiki.fluidproject.org/display/docs/fluid.render>\n* wiki page contains a lot more information; more than would likely fit into a source code comment\n\n- fluid.renderer.createRendererSubcomponent\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L62-L100>\n- <http://wiki.fluidproject.org/display/docs/fluid.renderer.createRendererSubcomponent>\n- the source code comment is empty\n- the wiki page contains quite a lot of information; more than would likely fit into a source code comment\n\n* fluid.renderer.selectorsToCutpoints\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L268-L285>\n* <http://wiki.fluidproject.org/display/docs/fluid.renderer.selectorsToCutpoints>\n* the source code comment is empty\n* the wiki page documents the parameters, return value, and contains some examples\n\n- fluid.rendererComponent\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/RendererUtilities.js#L139-L141>\n- the source code comment is empty\n- I could not find a wiki page\n\n* fluid.reRender\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1480-L1527>\n* <http://wiki.fluidproject.org/display/docs/fluid.reRender> \\[empty]\n* wiki page exists but is empty\n\n- fluid.selfRender\n- <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/renderer/js/fluidRenderer.js#L1572-L1588>\n- <http://wiki.fluidproject.org/display/docs/fluid.selfRender>\n- source code and wiki page are equivalent\n\n* fluid.viewComponent\n* <https://github.com/fluid-project/infusion/blob/infusion-1.5/src/framework/core/js/FluidView.js#L34-L36>\n* the source code comment is empty\n* I could not find a wiki page\n"
    }
  ]
}
---
Review the source code comments for the framework API functions that we are linking to and compare to the existing wiki pages. Identify cases where there is significantly more information in the wiki pages than in the source code.

In these cases, we should convert the wiki page to markdown, add to infusion-docs, and link to the converted page from the source code.

        
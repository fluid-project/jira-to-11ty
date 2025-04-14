---json
{
  "title": "FLUID-4261",
  "summary": "\"Tag Singularity Problem\" prevents expression of some component trees, especially in recursive cases",
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
  "date": "2011-05-23T01:36:58.330-0400",
  "updated": "2015-06-09T13:26:07.978-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Renderer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5047/",
      "key": "FLUID-5047",
      "summary": "Implement \"new Renderer\" eliminating renderer component trees and protoTrees in favour of newly graded standard IoC component trees"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4260/",
      "key": "FLUID-4260",
      "summary": "Implement system for multi-phased (per component), \"one-pass\" rendering of complex component trees (formerly, \"antigens\")"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3681/",
      "key": "FLUID-3681",
      "summary": "Create \"renderer components\" infrastructure, together with \"component grading\" building on createRendererFunction approach"
    }
  ],
  "attachments": [],
  "comments": []
}
---
A recent valiant attempt to refactor the UIOptions table of contents control to become fully declarative ran into a (very) long-standing renderer issue, the "tag singularity problem". In its current form, the renderer is unable to abstract over the difference between the cases where two cutpoints (as they now are) match two different markup nodes, and when they match the same one. Support has been provided for the "tag elision syntax" where a markup node whose renderer component had an ID beginning with the tilde character \~ would be elided from the finally rendered markup - however, this is somewhat cumbersome and still can't cover all the cases where singularity arises. \
This version of TableOfContents.js <https://github.com/jobara/infusion/blob/fb9a364e4b5640ed667cc47cdbb1e76c28e11fc5/src/webapp/components/tableOfContents/js/TableOfContents.js> part of a branch for <https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209>, contains a "moral implementation" which should be possible to be supported. However, under the current system, the recursive call to "fluid.tableOfContents.level" fails - the markup appearing as follows:

\<ul class="flc-tocLevel-headingLevel">\
\<li class="flc-tocLevel-headingContainer">\
\<a class="flc-tocLevel-headingText">\</a>\
\</li>\
\</ul>

The intended effect is that a fresh instance of "level" can appear nested immediately after the "headingText" link, nested within the "headingContainer". Even with the "tag elision syntax" (which would require, for a start, some corruption of the markup with an unnecessary tag) this cannot be supported - since in this non-one-pass rendering case, the elided placeholder container could not then be the target of a decorator issued against the markup.&#x20;

The best plan is to try to add explicit workflow for cases like these as part of the "Renderer antigens" work FLUID-4260, rather than complicate the core workflow of the renderer any further.

        
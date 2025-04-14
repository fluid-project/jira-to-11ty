---json
{
  "title": "FLUID-4260",
  "summary": "Implement system for multi-phased (per component), \"one-pass\" rendering of complex component trees (formerly, \"antigens\")",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-05-23T01:16:18.892-0400",
  "updated": "2021-06-21T12:37:13.174-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5046/",
      "key": "FLUID-5046",
      "summary": "Rewrite fluid.rendererComponent to modern framework standards, preparing for more fundamental changes to renderer"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982",
      "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5047/",
      "key": "FLUID-5047",
      "summary": "Implement \"new Renderer\" eliminating renderer component trees and protoTrees in favour of newly graded standard IoC component trees"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2578/",
      "key": "FLUID-2578"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4261/",
      "key": "FLUID-4261"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The final portion of framework work left over from the implementation of <https://fluidproject.atlassian.net/browse/FLUID-3681#icft=FLUID-3681> involves the implementation of what has come to be called a "phased renderer component". This is a renderer component which participates in an overall rendering workflow, which in one pass of an invocation of the fluid renderer, renders the markup for all such components participating in the tree. This requires new lifecycle points (phases) for the components which participate - in the initial phase, they are instantiated with no container in the DOM, and respond only to requests for component tree fragments and I/O requests they require before rendering can proceed. Once rendering is complete, they are then attached to the renderer tree and DOM as fluid decorators. \
This workflow will also execute on the server, with phase 2 occuring on the client after markup is produced on the server.

        
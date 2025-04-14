---json
{
  "title": "FLUID-5674",
  "summary": "Renderer should rewrite ALL ids in markup it injects into the document, not just that associated with components",
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
  "date": "2015-06-02T13:44:30.543-0400",
  "updated": "2015-06-02T13:45:54.284-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Today we encountered a very hard-to-debug issue in the first discovery tool, which was caused by the fact that we had attempted to insert two DOM nodes into the document with the same ID. Although these two panels (speech rate, and text size) were using the (old) Renderer, the particular nodes (increase and decrease size buttons) were not bound to renderer components - and so the renderer ignored them. Instead, they had a manual workflow for binding their "click" events onto model changes, and for rendering tooltips attached to them.

The bug related to the accumulation of tooltips. Whilst one cause of tooltip accumulating was fixed with FLUID-5673, this second cause was much more pernicious and almost impossible to debug. It appeared that there were two instances of the DOM node being created for each re-render - which, given that in the implementation at the time, all panels re-render, both visible and invisible, was actually the case.

This was discussed today in IRC at <https://botbot.me/freenode/fluid-work/2015-06-02/?msg=40798496&page=2>

When we reimplement the renderer, we should ensure that it manages ALL ids in markup, not just those which have components attached. In particular, we need to ensure that the FLUID-1676 id relation rewrite support also functions for these component-less nodes.&#x20;

        
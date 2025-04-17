---json
{
  "title": "FLUID-6602",
  "summary": "Continued workflow failure with multiple createOnEvent model components constructed by ResourceLoader",
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
  "date": "2021-03-13T18:50:16.595-0500",
  "updated": "2021-03-13T18:50:16.595-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Yet a further and presumably final in the dreary series of edge cases afflicting the enormous over-complex "workflow" system, in the tradition of FLUID-6585, FLUID-6588 and the like, in some imperfectly characterised case involving a set of several createOnEvent model components created back to back after resource resolution.

This has been checked in for inspection at <https://github.com/amb26/bagatelle/tree/FLUID-6602> - the symptoms are, when loading, e.g. indexWithMap.html, that the sunburst and map views pretty much load completely, and the datasetControls area gets as far as an initial render with the expected 7 rows, in reverse order, and with all colours as red and empty text. One then receives an exception "Cannot get transaction record without transaction id" as we try to enter fluid.notifyInitModelWorkflow. Mysteriously shadow\.initTransactionId has not been set - mysteriously the component appears to have totally bypassed model initialisation, since no model or modelRelay material is set (even in options) despite the fact it has reached "treeConstructed".&#x20;

This is probably a workflow scheduling bug such as FLUID-6585, but we will very likely make no attempt to fix this given that intricate uses of onCreate are not idiomatic, and the entire current framework is expected to be benched after we have managed to stabilise some kind of renderer. Rewriting the old-fashioned datasetControl as a lensed component should allow that work to move on.

        
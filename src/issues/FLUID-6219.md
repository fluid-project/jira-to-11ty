---json
{
  "title": "FLUID-6219",
  "summary": "Options expansion workflow for defaults is anomalous through performing merging before expansion",
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
  "date": "2017-11-02T11:22:37.411-0400",
  "updated": "2024-07-22T09:01:26.183-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5304/",
      "key": "FLUID-5304",
      "summary": "Implement \"Infusion Compiler\" recognising \"shapes\" of repeatedly appearing components and storing them as \"link-ready\" templates"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6156/",
      "key": "FLUID-6156"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6235/",
      "key": "FLUID-6235"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-11-06T07:55:10.136-0500",
      "body": "Note that this is not practical without implementing the \"local mergePolicy\" scheme referred to on <https://fluidproject.atlassian.net/browse/FLUID-5668#icft=FLUID-5668>\n"
    }
  ]
}
---
This long-standing behaviour was an optimisation implemented for Infusion 0.6 back in 2009... the "merged defaults cache" made a big difference between the framework performance being acceptable and unacceptable on the browsers of the day. The performance of the framework has regressed in many ways since then, whilst browsers have got much better - so this represents a smaller proportion of our runtime costs. However, changing this behaviour will subtly alter the semantic of all Infusion code, and should be done at a time when we are making related disruptive changes - and preferably also implementing optimisations, as with <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304>, that will compensate the user for costs of breakage.

        
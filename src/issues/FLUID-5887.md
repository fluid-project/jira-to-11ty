---json
{
  "title": "FLUID-5887",
  "summary": "Model component apparatus may initialise multiple times on the same component",
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
  "date": "2016-04-12T17:55:53.130-0400",
  "updated": "2024-07-22T09:26:59.984-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5800/",
      "key": "FLUID-5800",
      "summary": "Grade merging algorithm is still incorrect - accumulative linearisation must be abandoned"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-04-12T17:56:40.048-0400",
      "body": "Smoking gun test is to add the following in DataBinding.js:\n\n```javascript\nfluid.establishModelRelay = function (that, optionsModel, optionsML, optionsMR, applier) {\r\n        if (that.modelRelayEstablishing) {\r\n            fluid.fail(\"ERROR: reentry into fluid.establishModelRelay\");\r\n        }\r\n        that.modelRelayEstablishing = true;\n```\n\nCurrently this causes no failure in a core fixture, but will, for example, cause Builder.js tests to bomb out in the prefs framework\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-05-05T10:25:55.377-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/706> has been merged into the project repo master branch at 63b8a53442f712d00dfbb684702ee1f7df2b5f55\n"
    }
  ]
}
---
In some cases (presumably, where a component inherits from fluid.modelComponent via multiple paths), the special members "model" and "modelRelay" may accumulate multiple copies of their expander definitions, causing them to initialise multiple times. Particularly devastating is if there is a modelListeners block which will then register its listeners multiple times.

This is caused by the numerous faults described in FLUID-5800 - see also FLUID-5668 for other faults with "members". We don't have a choice but to move to some C3-like system which ensures that material inherited in a grade hierarchy is accepted just once from the same parent grade.

        
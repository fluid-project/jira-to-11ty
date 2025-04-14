---json
{
  "title": "FLUID-5046",
  "summary": "Rewrite fluid.rendererComponent to modern framework standards, preparing for more fundamental changes to renderer",
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
  "date": "2013-06-11T13:10:22.977-0400",
  "updated": "2015-06-15T10:26:42.617-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4260/",
      "key": "FLUID-4260"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4334/",
      "key": "FLUID-4334"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The work of rewriting all of the standard Fluid components to modern standards following the large framework rewrite associated with FLUID-4330 has almost concluded. As a final tidy-up, we should rewrite the implementation of fluid.initRendererComponent itself so that it is consistent with these new semantics as well as tidying up all the nasty manual options processing and merging code there. This will make the work for the "new Renderer" much more straightforward as well as tidying up several framework annoyances such as FLUID-4334 which are caused by a lack of a proper ginger workflow in this basic framework grade.

After this, work can then proceed on the "new Renderer" as partially described in FLUID-4260.

        
---json
{
  "title": "FLUID-6439",
  "summary": "Supply scheme for gradeNames to be supplied as a prioritised hash rather than a simple array",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-12-04T11:49:56.592-0500",
  "updated": "2024-07-19T07:46:20.813-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5948/",
      "key": "FLUID-5948"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6438/",
      "key": "FLUID-6438"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The encoding of a component's parent grade names as a simple array, made very early in the design of Infusion, is inconsistent with our more recently recognised goals of open authorship. Since then, all kinds of definitions in the framework have been adapted to support our generalised "namespaces with priorities" structure described at <https://docs.fluidproject.org/infusion/development/Priorities.html> and before long we should ensure that gradeNames themselves are no different. Being able to give a namespace to a use of a gradeName will also resolve various awkward overriding scenarios, e.g. described in FLUID-5784.\
This task was first described in the comment thread <https://issues.fluidproject.org/browse/FLUID-5948?focusedCommentId=32620> but deserves a top-level issue. This will also be a more complete fix to the ContextAwareness issue encountered in the prefs framework at <https://issues.fluidproject.org/browse/FLUID-6438>

        
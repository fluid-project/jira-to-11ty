---json
{
  "title": "FLUID-4155",
  "summary": "Allow support for \"instantiation hints\" which can guide relative instantiation order of siblings through IoC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-03-21T03:22:05.295-0400",
  "updated": "2014-03-03T13:12:52.375-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4925/",
      "key": "FLUID-4925",
      "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-13T18:03:45.125-0500",
      "body": "Note that we already have implemented a system which detects the \"fluid.typeFount\" grade name and instantiates any such components by priority\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-03T04:15:39.822-0400",
      "body": "To a large extent, the requirement for this feature has been removed by <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> and <https://fluidproject.atlassian.net/browse/FLUID-4916#icft=FLUID-4916> dynamic grades, and will be considered completely resolved once we have implemented <https://fluidproject.atlassian.net/browse/FLUID-4925#icft=FLUID-4925> and <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> - since in that case, subcomponent type computation will necessarily precede all other resolution work (as far as possible) across an entire component tree, ensuring that component construction is done in the light of maximum possible information.\\\nSince we are not planning to allow component authors to supply manual \"hints\" in the way suggested in this issue description, this issue can be closed in favour of the others described.\n"
    }
  ]
}
---
In most cases, arbitrary order (together with "gingerness" induced by inter-component references) is sufficient for instantiating the order of sibling components. However, in some cases, for example, where the only result of one instantiation is a set of (potentially unknown) context tags whose purpose is to guide the instantiation of the other, this natural order is not sufficient and one component must definitely precede its sibling, even though there is not the possibility of writing a dependence (fictitious or otherwise) that might force this ordering.\
In these (sparing) cases it would be useful to attach a "priority" annotation to a subcomponent record which will provide a hint to the system as to relative ordering. These "priority" fields will have the identical values and semantics as "priority" records attached to event listeners (which are similarly sparingly applied, but crucial when they are).

        
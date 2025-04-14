---json
{
  "title": "FLUID-5884",
  "summary": "Implement automatic context invalidation scheme \"fluid.createOnContextChange\"",
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
  "date": "2016-04-12T15:56:21.034-0400",
  "updated": "2016-04-12T15:56:21.034-0400",
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
Our "Onward" paper submission for 2016 advertises a facility that will allow a component to be automatically reconstructed if it depends on a context (via the fluid.contextAware grade) or indeed through a change in any options distribution targetted at it (either through removal or addition of such a distribution through destruction or construction of a component holding the distribution). The paper (held in <https://github.com/amb26/papers/tree/master/onward-2016> ) advertises that this facility can be opted into by deriving from the grade "fluid.createOnContextChange". This would become a more powerful analogue of the existing "createOnEvent" annotation (which after the OPTIONS FLATTENING REVOLUTION of FLUID-5750 will itself become simply a standard component option).

        
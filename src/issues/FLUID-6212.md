---json
{
  "title": "FLUID-6212",
  "summary": "Restore ability of fluid.transform to work on strings, and make consistent with fluid.each",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2017-10-12T19:30:52.320-0400",
  "updated": "2024-07-22T09:02:17.828-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In a rather long-ago commit, fluid.transform was quietly relieved of the ability to transform strings character-by character (even though the return type might somewhat unhelpfully be a string rather than an array)\
<https://github.com/fluid-project/infusion/commit/0bfd51b310d7c10f01104460f09a00f40bd9d98b>\
This algorithm is also inconsistent with that of fluid.each which is still capable of iterating over strings.\
This was presumably done to avoid unsightly mouse droppings in IoC trees where raw references had somehow been transformed into arrays, etc., but this is no way to solve such an issue. We should make these two algorithms consistent with each other.

        
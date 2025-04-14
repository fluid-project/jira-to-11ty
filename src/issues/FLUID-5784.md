---json
{
  "title": "FLUID-5784",
  "summary": "Eliminate irregularity of component property named \"typeName\" taken from field \"type\"",
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
  "date": "2015-10-04T11:09:05.120-0400",
  "updated": "2021-08-08T13:57:15.662-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For historical reasons (mainly, since in the 1.x-era framework, detection of components in the tree was extremely primitive and duck-type-based), the top-level property encoding a component's "type" (derived from the "type" field of a subcomponent or constructor name) came to be called "typeName". This causes unnecessary confusion to users as well as using up a new top-level name in a collision-prone way.

We should at the same time take the opportunity to regularise the name "gradeNames" into something more directly descriptive such as "parentGrades" or even "parents". This should be done at the same time as the "options flattening revolution" <https://fluidproject.atlassian.net/browse/FLUID-5750#icft=FLUID-5750> since that will already be a disruptive enough change.

        
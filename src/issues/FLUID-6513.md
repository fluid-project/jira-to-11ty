---json
{
  "title": "FLUID-6513",
  "summary": "Allow for more flexibility in defining adjuster panel preference mapping ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-06-03T09:41:22.520-0400",
  "updated": "2020-06-03T09:41:22.520-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently when defining a preference a primary schema, auxiliary schema, panel and enactor are all created. In particular the panels and enactors make use of a `preferenceMap` for specifying how values from the primary schema map to the options and models of the panel and enactor. Similar for model relays constructed between all the various parts.

However, it would be good, at least for panels to be able to specify this information outside of the panel definition. In that way we would be able to use the same panel grade for multiple preferences, as well as more fluidly switch between types of panels for the same preference (e.g. select box, radio buttons, etc) based on integrator preference or context. 

        
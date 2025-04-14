---json
{
  "title": "FLUID-5842",
  "summary": "the prefsEditor's preferences model properties are auto generated and not known in advance.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2016-01-14T15:08:57.838-0500",
  "updated": "2024-07-22T09:30:18.990-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When using an auxiliary schema to configure a preferences editor, model or preferences are generated based on values from the primary schema and the store. The keys in the prefsEditors model are generated from the preferences type in the in primary schema. Within the panel and enactor these are mapped via a preference map to a known model property. However, if another component outside of the panels and enactors wishes to make use of the preference value it is hard to know what the prefsEditors model property is. It requires someone to inspect the model and determine which is the correct property.

        
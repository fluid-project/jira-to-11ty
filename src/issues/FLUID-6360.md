---json
{
  "title": "FLUID-6360",
  "summary": "Remove the starter grades from the prefs framework.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-01-12T08:22:30.559-0500",
  "updated": "2019-01-12T08:23:04.844-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6312/",
      "key": "FLUID-6312",
      "summary": "Make preferences framework locale handling work the way the docs say it does"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5928/",
      "key": "FLUID-5928",
      "summary": "Schema and Grade version save preferences to different values"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The prefs framework currently supports two forms of construction 1) schema, 2) starter grades. The typical usage, including what is used by the UI Options component is to make use of the primary and auxiliary schema. A second approach was to build up everything manually through grades, and provided a set of starter grades to facilitate this. However, the grades and the schema are not always consistently supported or cross compatible (see: FLUID-5928).

The primary usefulness at this point of the grades versions is slightly faster performance by not having the overhead of generating the prefs editor and ui enhancer from a schema. However, it is planned in the future to have the auxiliary schema mostly or completely replaced by an improved infusion framework that can properly handle the construction of the necessary components in a more typical fashion.

        
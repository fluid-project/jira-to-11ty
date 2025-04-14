---json
{
  "title": "FLUID-6552",
  "summary": "Provide a means to source enactor styles as individual files for each related enactor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2020-09-15T08:53:48.297-0400",
  "updated": "2021-03-29T08:02:22.604-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-09-21T16:40:43.149-0400",
      "body": "Some of the Infusion components also require additional theming for the prefs framework. We should also consider if these should be mixed in during a construction phase or always included with the respective enactors.\n"
    }
  ]
}
---
Currently all enactor CSS styles are compiled into a single Enactors.css file from Enactors.styl However, if an instance of the prefs framework/uio does not use all of the enactors it would be helpful to only have to include the styles that are needed. 

Providing the enactor styles both as separate and combined files would allow for more flexibility in what the integrator includes.

        
---json
{
  "title": "FLUID-5318",
  "summary": "Overview panel needs a way to customize links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2014-04-22T13:44:03.608-0400",
  "updated": "2015-06-15T14:36:17.982-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The three links at the bottom of the overview panel (code, api, design) are not configurable enough. Several of the Infusion demos don't have anywhere to link to for designs, but there's no way for the integrator to NOT render that design link. I had to copy the template and remove the markup. This causes a burden when the template is modified to address other issues: Those modifications need to make it into the copy used by some of the demos.

It would be better if the integrator could somehow just provide an array of link info that could be iterated on by the panel, to allow them to configure whatever links they deem useful, be it more or less.

        
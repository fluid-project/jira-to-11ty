---json
{
  "title": "FLUID-6750",
  "summary": "Model-driven relocalisation does not take account of initial model values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-09-26T06:30:56.370-0400",
  "updated": "2024-07-22T10:35:17.491-0400",
  "versions": [
    "4.3"
  ],
  "fixVersions": [
    "4.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Working on getting the localization panel for UIOptions working, we find that the facility in <https://fluidproject.atlassian.net/browse/FLUID-6413#icft=FLUID-6413> nearly works - it responds to model-driven localisation changes in mid-life, but ignores initial model values in resourceLoader.locale as well as not attempting to localise at all if there is not already a value in the locale field of the resourceSpec.

        
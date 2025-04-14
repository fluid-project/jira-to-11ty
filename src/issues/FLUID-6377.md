---json
{
  "title": "FLUID-6377",
  "summary": "Exploration Tool demo link on Fluid project website gives 404 error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2019-04-29T16:12:55.817-0400",
  "updated": "2024-07-22T10:35:15.122-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The link to the Exploration Tool on Fluid Project website is incorrect.

To reproduce:

1. Go to <https://fluidproject.org/projects.html>
2. Select the "Preferences Exploration Tool Demo"
3. Notice that the link goes to <https://build.fluidproject.org/explorationTool> which gives a 404 error.

The correct URL is:

<https://build.fluidproject.org/prefsEditors/demos/explorationTool/>

        
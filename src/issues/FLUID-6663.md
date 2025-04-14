---json
{
  "title": "FLUID-6663",
  "summary": "Improve localization demo with different default language encodings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-07-08T09:45:38.870-0400",
  "updated": "2021-07-08T09:45:38.870-0400",
  "versions": [
    "3.0"
  ],
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
The localization demo should have different default language encodings so the reset button is more meaningful.

One way to accomplish this is to have a Region selector on the demo which will change the page encoding based on the region selected. This way the user can change (and save) the encoding from (for example) USA to France - which will change the default language from English to French. Then the localization adjuster will work as expected and the Reset button will change back to the language specified by the Region.

        
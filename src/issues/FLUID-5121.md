---json
{
  "title": "FLUID-5121",
  "summary": "The uiEnhancer should also be able to fetch templates and messages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2013-08-22T13:41:27.140-0400",
  "updated": "2021-07-29T01:39:45.557-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
UIE has an expectation at the moment that it's enactors are not view components. However, the current TableOfContents and designs for Text-to-speech all feature view components. UIE should fetch templates and messages for these types of enactors similar to how UIO works.

        
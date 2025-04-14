---json
{
  "title": "FLUID-6662",
  "summary": "Spanish text for localization demo should use proper punctuation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-07-07T11:15:11.250-0400",
  "updated": "2021-07-07T11:15:11.250-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Spanish string for "Hello World" is missing the preceding inverted exclamation mark.\
Should be "¡Hola mundo!", not "Hola Mundo!".

        
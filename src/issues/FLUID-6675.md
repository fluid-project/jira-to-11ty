---json
{
  "title": "FLUID-6675",
  "summary": "Add a fallback, non-locale specific version of Portugese UIO translations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-20T22:05:57.211-0400",
  "updated": "2022-02-03T10:38:50.703-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
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
Currently there is a Brazilian Portuguese (pt\_BR) locale translation for UIO. However, if someone were to just set the language code to "pt" it would fall back to the base message bundle which is English. It would be better to provide a Portugese fallback option, even if it is still the same as the Brazilian Portuguese locale. 

        
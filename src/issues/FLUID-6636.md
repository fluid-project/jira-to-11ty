---json
{
  "title": "FLUID-6636",
  "summary": "VoiceOver reads separator symbols when syllabification is enabled.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-29T10:51:13.057-0400",
  "updated": "2021-06-29T11:28:19.609-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Syllabification Enactor",
    "UIEnhancer"
  ],
  "environment": "Safar 14.1.1 and VoiceOver (macOS 11.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It may be debatable if this is really a bug or a feature. If the user has enabled syllabification it seems reasonable that they would want the screen reader to read it out. However, this is different than the Orator's self voicing which ignores the separators. However, these are different things (screen reading vs self voicing).

 

Steps to reproduce:

1. Use the VoiceOver screen reader
2. Open the [prefs framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
3. Open the prefs editor
4. Enable syllabification
5. Read through the content of the page.
6. Notice that the syllabification separator symbol is read by the screen reader.

        
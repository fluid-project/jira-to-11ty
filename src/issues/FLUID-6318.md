---json
{
  "title": "FLUID-6318",
  "summary": "Should be able to stop selection reading",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-08-10T10:13:01.211-0400",
  "updated": "2024-07-22T10:35:23.415-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "Self Voicing",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Orator provides an option to read back selected text. When the selection is made, a "Play" button appears over the selection. Clicking the play button will start the self voicing. However, the only way to stop it, is to remove the text selection or start the page level reading. One option would be to hide the "Play" button while it is reading. Another option would be to change the "Play" button into a "Stop" button when the self voicing is running.

        
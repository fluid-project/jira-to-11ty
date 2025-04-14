---json
{
  "title": "FLUID-6317",
  "summary": "disable captions by setting an empty track",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-08-10T10:09:45.387-0400",
  "updated": "2021-07-29T01:52:46.875-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the captions enactor will disable captions on an embedded YouTube video by calling the player's unloadModule method to unload the captions module. Another option would be to call the setOption method to set the track to {}. This will allow the setting to be remembered if the video is played on YouTube. 

        
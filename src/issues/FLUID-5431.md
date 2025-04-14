---json
{
  "title": "FLUID-5431",
  "summary": "VoiceOver reads both the on and off options of table of contents toggle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-09T10:20:57.658-0400",
  "updated": "2024-07-23T07:41:38.489-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5417/",
      "key": "FLUID-5417",
      "summary": "Little contextual information provided for checkboxes and radio buttons used in adjuster panels"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T07:41:38.489-0400",
      "body": "Could not reproduce with Safari 14.5 and VoiceOver on macOS 14.5. May have been resolved with changes for FLUID-5708\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\) Open "show display preferences"

3\) Navigate to the Table of Contents toggle

4\) continue navigating to the next adjuster.\
Notice that it reads through both the on and off options of the toggle, regardless of the state of the toggle.\
Note that the underlying checkbox is read out in the correct state.\
It says "On OFF add a table of contents, unchecked, checkbox"

        
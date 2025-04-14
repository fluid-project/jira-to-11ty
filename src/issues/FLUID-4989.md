---json
{
  "title": "FLUID-4989",
  "summary": "When in the \"Off\" position the alignment of the text and knob are off for the table of contents toggle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-04-26T14:12:10.510-0400",
  "updated": "2018-07-23T12:46:53.619-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome, FF, Safari, IE 9, IE 10\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5871/",
      "key": "FLUID-5871"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5686/",
      "key": "FLUID-5686"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4989/screen shot.png",
      "filename": "screen shot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-26T14:13:10.649-0400",
      "body": "\"screen shot.png\" shows the text and knob styling off centre\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-23T12:46:53.615-0400",
      "body": "Fixed when updating the on/off toggles as part of <https://fluidproject.atlassian.net/browse/FLUID-5708#icft=FLUID-5708>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UI Options demo

2\) navigate to the "Table of Contents" panel

3\) Ensure that the setting is in the "Off" position.

Notice that the text "off" is slightly too high and the inner circle for the knob is not centred.

        
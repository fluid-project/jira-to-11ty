---json
{
  "title": "FLUID-4990",
  "summary": "The transition for the Table of Contents toggle, is broken in IE 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-04-26T14:18:21.491-0400",
  "updated": "2018-07-23T12:47:18.457-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE 10\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5686/",
      "key": "FLUID-5686"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-07-23T12:47:18.455-0400",
      "body": "Fixed when updating the on/off toggles as part of <https://fluidproject.atlassian.net/browse/FLUID-5708#icft=FLUID-5708>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UIO demo

2\) Navigate to the Table of Contents panel

3\) turn the setting on and off.\
Notice as the toggle transitions between states that it isn't smooth and the size will expand and collapse.

        
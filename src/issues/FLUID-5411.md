---json
{
  "title": "FLUID-5411",
  "summary": "Background on portions of navigation not themed for the prefs framework demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-06-06T10:20:55.450-0400",
  "updated": "2016-09-01T14:21:15.239-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5411/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T10:21:18.458-0400",
      "body": "screenshot.png shows some elements missing theming\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\) Open "show display preferences"

3\) Set one of the contrast themes\
Notice that there are some backgrounds around the navigational elements that don't have the correct themed background.

        
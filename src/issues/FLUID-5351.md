---json
{
  "title": "FLUID-5351",
  "summary": "Prefs Framework demo (Climate Change) doesn't lay out properly in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2014-04-30T15:28:45.882-0400",
  "updated": "2014-06-25T16:01:17.986-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE 8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5351/Bad-climate-change-layout-IE.png",
      "filename": "Bad-climate-change-layout-IE.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.982-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
In IE 8, the climate change prefs framework demo page doesn't lay out properly. Might be an issue with floats. I'll attach a screenshot.

Oddly:\
1\) turning ON simplify seems to lay the page out properly, while still stripping background images\
2\) then turning simplify OFF again leaves the proper layout

        
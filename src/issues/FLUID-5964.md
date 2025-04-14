---json
{
  "title": "FLUID-5964",
  "summary": "The \"default\" option in the colour and contrast panel is clipped when browser is zoomed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-09-21T12:59:42.272-0400",
  "updated": "2016-09-21T14:27:39.643-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Chrome and Firefox, Windows 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5965/",
      "key": "FLUID-5965",
      "summary": "Native HTML 5 sliders look terrible when zoomed on Chrome"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5964/uio-clipped.png",
      "filename": "uio-clipped.png"
    }
  ],
  "comments": []
}
---
At various browser zoom levels, the bottom edge of the "a with a slash" button representing the default setting at the left of the colour and contrast panel is clipped. See attached screenshot - I can reproduce at 120% zoom on both Chrome and Firefox

        
---json
{
  "title": "FLUID-5500",
  "summary": "The circular background behind the link icons disappears when contrast themes are applied.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-08-26T09:46:21.467-0400",
  "updated": "2021-07-29T01:33:43.948-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5500/screenshot-contrast.png",
      "filename": "screenshot-contrast.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5500/screenshot-default.png",
      "filename": "screenshot-default.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-08-26T09:48:46.927-0400",
      "body": "screenshot-default.png shows the white background on the icons when the default theme is applied. screenshot-contrast.png shows the missing background when the lgdg contrast theme is applied.&#x20;\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\) Notice that the link icons at the bottom of the overview panel have a white background.

3\) Using the preferences editor, change to any of the contrast themes.\
Notice that the background behind the icons disappears.

This seems to be because the background is the same colour as the background of the overview panel. It should be inverted. This can probably be applied using the .fl-inverted-color class.

        
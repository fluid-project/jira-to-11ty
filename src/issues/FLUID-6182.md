---json
{
  "title": "FLUID-6182",
  "summary": "Arial and Verdana font appear the same in Firefox on macOS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2017-08-10T09:29:39.477-0400",
  "updated": "2021-06-22T13:21:48.392-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "FF 54 (macOS 10.12.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6216/",
      "key": "FLUID-6216",
      "summary": "The default text style options aren't available across all platforms"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6182/arial.png",
      "filename": "arial.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6182/verdana.png",
      "filename": "verdana.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-08-10T09:30:49.414-0400",
      "body": "arial.png and verdana.png are screenshots showing the applied font rendering with the respective font-family applied.\n"
    }
  ]
}
---
When switching between Arial and Verdana text styles in UI Options ( using FF on macOS ), there is no discernible difference in the font applied. 

 

Steps to reproduce:

1. open the [UI Options demo](http://build.fluidproject.org/infusion/demos/uiOptions/)
2. Open the preferences editor and change the text style to Arial
3. Change the text style to Verdana

Notice that when switching between Arial and Verdana the text style on the page does not appear to change.

        
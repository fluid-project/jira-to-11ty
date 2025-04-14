---json
{
  "title": "FLUID-6068",
  "summary": "shift-tabbing to contrast theme puts focus on the wrong item",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2016-11-14T15:53:52.188-0500",
  "updated": "2024-07-23T13:27:06.493-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE 11 ( Win 7, JAWS 17 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6068/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-14T15:54:54.844-0500",
      "body": "screenshot.png shows the default contrast theme selected, but the focus styling on the low contrast theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:27:06.493-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Prefs Framework demo](http://build.fluidproject.org/infusion/demos/prefsFramework/)\
2\. Open the prefs editor\
3\. Using the keyboard change the contrast\
4\. Using the keyboard move focus to the table of contents adjuster\
5\. Shift-tab back to put focus back into the contrast adjuster

Notice that the low contrast option has focus, but is not the selected contrast. Also notice that you can't use the arrow keys to change selection.

        
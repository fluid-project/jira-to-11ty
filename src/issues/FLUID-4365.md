---json
{
  "title": "FLUID-4365",
  "summary": "The \"Colour & Contrast\" options have inconsistent font casing with the selected value.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Justin Obara",
  "date": "2011-07-28T10:37:52.702-0400",
  "updated": "2013-09-06T13:31:51.860-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Safari 5.1, Chrome (Mac OS X)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4365/ScreenShot-options.png",
      "filename": "ScreenShot-options.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4365/ScreenShot-Selected.png",
      "filename": "ScreenShot-Selected.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T10:39:53.772-0400",
      "body": "ScreenShot-options.png shows the lower case options, while ScreenShot-Selected.png shows the option in all-caps after being selected\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T10:40:02.393-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-12T13:06:24.754-0400",
      "body": "Cindy has started implementing the fix for this and is planning to with with Heidi to address this using CSS.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:31:51.849-0400",
      "body": "The \"colour & contrast\" is now a set of custom radio buttons instead of a drop down.\n"
    }
  ]
}
---
The options aren't capitalized, but the selected value is. This is causing spacing issues as well in the select box for the selected value.

Steps to reproduce

1\) Open any of the UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" options\
Notice that when selecting the option, they show up as lower case, but after choosing one it is in all upper case.

        
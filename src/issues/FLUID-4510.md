---json
{
  "title": "FLUID-4510",
  "summary": "Increasing text size doesn't increase text on buttons (IE 6 and 7)",
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
  "date": "2011-10-06T15:13:21.902-0400",
  "updated": "2014-06-25T15:55:54.210-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE6 and IE7 on WinXP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4510/uio-large-text-not-on-buttons.png",
      "filename": "uio-large-text-not-on-buttons.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-06T15:14:22.227-0400",
      "body": "This screenshow (uio-large-text-not-on-buttons.png) shows the font increased using the Fat Panel, with the still-small text on the buttons (in IE7).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:54.204-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
In the UIO showcase demo, in IE6 and IE7 on Win XP, increasing the text size using UIO doesn't increase the size of the text inside the blue UIO buttons on the right side of the demo, or the blue 'show/hide' button at the top, or the "send" button on the form.

        
---json
{
  "title": "FLUID-3980",
  "summary": "UI Options settings should reflect the actual default settings when the panel opens",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jen Chow",
  "date": "2010-12-20T16:53:51.735-0500",
  "updated": "2013-10-04T10:06:38.451-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Win XP IE6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2802/",
      "key": "FLUID-2802"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:45:54.185-0400",
      "body": "This issue has been addressed: Now the drop-downs have a 'default' entry indicating \"whatever the page's font is\".\n"
    }
  ]
}
---
For example, the font style by default is actually a sans serif font in the demo, but the drop down menu shows "serif" font as the default font style when the user first opens the UI Options panel. Also, if the user opens the drop down menu and selects "serif" font, it doesn't actually change the font to a serif font until a different font style is selected first before re-selecting "serif" font.

        
---json
{
  "title": "FLUID-2801",
  "summary": "UI Options displays \"Serif\" as the default font style even though the page defaults to a \"Sans-Serif\" font",
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
  "date": "2009-05-28T09:55:31.000-0400",
  "updated": "2009-10-20T11:03:50.000-0400",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3301/",
      "key": "FLUID-3301"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2801/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T09:56:42.000-0400",
      "body": "\"screenshot-1\" shows the default font style as \"Serif\" but all of the fonts are \"Sans-Serif\"\n"
    }
  ]
}
---
UI Options displays "Serif" as the default font style even though the page defaults to a "Sans-Serif" font

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options dialog

Notice that the default font style is "Serif" but the text on the page is "Sans-Serif"

        
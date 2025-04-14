---json
{
  "title": "FLUID-1937",
  "summary": "After choosing a diferent font spacing, the preview of the \"no preference\" option is displayed as wider than the selected one",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-08T09:55:58.000-0500",
  "updated": "2008-12-18T11:48:04.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1937/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1937/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1937/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:57:13.000-0500",
      "body": "'screenshot-1' shows the font spacing on wide\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:58:04.000-0500",
      "body": "'screenshot-2' shows the incorrect font spacing displayed for the \"no preference\" option\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:59:20.000-0500",
      "body": "'screenshot-3' shows want the font spacing should be dispalyed as\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:48:04.000-0500",
      "body": "Appears to have been fixed.\n\nTested with&#x20;\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
After choosing a diferent font spacing, the preview of the "no preference" option is displayed as wider than the selected one

Steps to reproduce

1\) Open the Sakai mock-up example:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click on the "Edit Appearance" button

3\) Change the font spacing and save the change

4\) Click on the "No Preference" option, notice that the font spacing is displayed as being wider than the current font spacing. However, saving this change, will put the font spacing back to the original font spacing, which is narrower.

        
---json
{
  "title": "FLUID-2803",
  "summary": "slider and text field are far apart",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-28T11:14:15.000-0400",
  "updated": "2013-10-04T10:23:58.388-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2803/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T11:14:53.000-0400",
      "body": "\"screenshot-1\" shows the large gap between the slider and its textfield\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:01:48.219-0400",
      "body": "The UIO dialog has been redesigned, and this is no longer an issue.\n"
    }
  ]
}
---
slider and text field are far apart

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>

2\) Notice that the text field and slider are far appart. The slider is justified to the right of the accordion panel, while the text field is placed directly beside the label

        